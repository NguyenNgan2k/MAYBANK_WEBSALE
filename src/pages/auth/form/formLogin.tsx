import Input from '@/components/ui/Input';
import { BtnSubmit } from '@/utils/styledUtils';
import { ILoginForm } from '@interface/form';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import IcLogin from '@assets/img/icon/login.svg'
import { loginRequest, loginSuccess } from '@/store/auth/actions';

interface Props {
  clearChangePass: Function;
}

function FormLogin(props: Props): JSX.Element {
  const { control, handleSubmit } = useForm<ILoginForm>()
  const dispatch = useDispatch();

  useEffect(() => {
    initialValues();
    return () => {

    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch(loginSuccess(null));
    };
  }, []);

  function initialValues() {
  }

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data)
    if (data.username && data.password) {
      console.log('Login data:', data);
      dispatch(loginRequest(data.username, data.password))
    }
  }

  function handleSearch() {
    // const params = {
    //   group: 'B',
    //   user: token.user,
    //   session: token.sid,
    //   data: {
    //     type: '2cursor',
    //     cmd: 'CashTransactionNew',
    //     p1: _acc,
    //     p2: _startDate,
    //     p3: _endDate,
    //     p4: '',
    //     p5: '',
    //     p6: '1',
    //     p7: '15',
    //   },
    // };

    // dispatch(reportCashRequest(params));
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[500px] w-[450px] flex flex-col p-10 bg-white rounded-3xl shadow-lg bg-gradient-to-b from-amber-200 to-white to-30%"

    >
      <div className='bg-white w-16 h-16 flex items-center justify-center rounded-3xl mx-auto shadow-lg'>
        <img src={IcLogin} className='w-10 h-10 mx-auto -rotate-90' />
      </div>
      <p className='text-2xl font-semibold text-center my-8'>Đăng nhập</p>
      <div className='flex flex-col gap-4'>
        <Input
          name="username"
          control={control}
          placeholder="Tài khoản"
          className='form-input-login'
        />
        <Input
          name="password"
          control={control}
          placeholder="Password"
          className='form-input-login'
          type='password'

        />
        <p className='ml-auto text-sm'>Quên mật khẩu?</p>
      </div>
      <BtnSubmit type='submit' className='!h-10 mt-auto !text-sm !text-white !bg-stone-700'>
        Đăng nhập
      </BtnSubmit>
    </form>
  );
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state: AppState) => {
    return {
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(FormLogin);

