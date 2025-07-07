import { take, fork, cancel, call, put, cancelled } from "redux-saga/effects";
import { handleApiErrors } from "@/lib/api-error";

import * as actions from "./actionType";
import * as clientActions from "../client/actionType";
import { loginError, loginSuccess } from "./actions";

import axios from "axios";
import { clientTokenUnset } from "@store/client/actions";
import NetClientInfo from "@/utils/netInfo";

axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
axios.defaults.timeout = 5000;

const appUrl = `${process.env.REACT_APP_API_URL}`;

async function loginApi(username: string, password: string) {
  const loginUrl = `${appUrl}/TraditionalService`;

  const netInfo = NetClientInfo();
  const _info =
    netInfo.browser +
    " " +
    netInfo.browserVersion +
    " - " +
    netInfo.os +
    " " +
    netInfo.osVersion;

  let _params = {
    group: "L",
    user: "",
    session: "",
    channel: "W",
    data: {
      type: "string",
      cmd: "Web.sCheckLogin",
      p1: username,
      p2: password,
      p3: "W",
      p4: "",
      p6: _info || "",
    },
  };

  // return {
  //   cmd: 'Web.sCheckLogin',
  //   oID: 'MODE_SYN0fa5ebfb-a7f8-480f-b865-4d409e5a0146',
  //   rc: 1,
  //   rs: 'OK',
  //   data: {
  //     user: '030001',
  //     name: 'nguyễn xuân khánh',
  //     sid: 'dabbef5a-7bfe-488f-8e2c-ea2a13a81acb',
  //     address: 'H',
  //     defaultAcc: '0300011',
  //     iFlag: 1,
  //     CountLoginFail: 0,
  //     AuthenType: 'I',
  //     IP: '27.72.57.102',
  //     AuthenFlag: '',
  //     CustomerCode: '',
  //     ConfirmFlag: 0,
  //     LoginPeriod: 0,
  //     LastLoginTime: '',
  //   },
  // };

  try {
    const response = axios.post(loginUrl, JSON.stringify(_params), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    const response_1 = handleApiErrors(await response);
    const json = await response_1.data;
    if (!json.rc || json.rc < 1) {
      throw json.rs;
    }
    return json.data;
  } catch (error) {
    if (error?.toString().includes("Failed to fetch")) {
      throw Error("Login không thành công. Vui lòng kiểm tra lại kết nối mạng");
    } else throw error;
  }
}

function* logout() {
  // dispatches the CLIENT_UNSET action
  yield put(clientTokenUnset());

  // remove our token
  localStorage.removeItem("token");

  // redirect to the /login screen
  // history.push('/login')
}

function* loginFlow(username: string, password: string): any {
  try {
    const token: any = yield call(loginApi, username, password);
    // log(JSON.stringify(token));
    // yield put(setClient(token));

    // localStorage.setItem('token', JSON.stringify(token));
    yield put(loginSuccess(token));

    // redirect them to home!
    // history.push('/home')
  } catch (error: any) {
    // error? send it to redux
    yield put(loginError(error));
  } finally {
    if (yield cancelled()) {
      // history.push('/login')
    }
  }
}

function* loginWatcher(): any {
  while (true) {
    const { username, password } = yield take(actions.LOGIN_REQUESTING);

    const task = yield fork(loginFlow, username, password);

    const action = yield take([
      clientActions.CLIENT_UNSET,
      actions.LOGIN_ERROR,
    ]);

    if (action.type === clientActions.CLIENT_UNSET) yield cancel(task);

    yield call(logout);
  }
}

export default loginWatcher;
