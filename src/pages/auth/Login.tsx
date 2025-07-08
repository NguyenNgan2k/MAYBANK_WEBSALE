import React from 'react';
import { connect, useDispatch } from 'react-redux';

import _ from 'lodash';

import FormLogin from './form/formLogin';
import { storages } from '@lib/storages';
import { AppState } from '@/store/reducers';
import { loginSuccess } from '@/store/auth/actions';
import { useNavigate } from 'react-router-dom';
import { clientTokenSet } from '@/store/client/actions';
import { stat } from 'fs';
import { getSuccessful } from '@/store/reselect/auth';

function usePrevious(value: any): any {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

interface Props {
  successful: any;
}

function LoginPage(props: Props): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showRegister, setShowRegister] = React.useState<boolean>(false);

  const { successful } = props;

  const preSuccessful = usePrevious(successful);

  React.useEffect(() => {
    const storedToken = storages.loadState('token');
    if (storedToken) {
      const token = JSON.parse(storedToken);
      if (token.session) {
        dispatch(clientTokenSet(token));
        storages.removeState('ttl');
        navigate('/price/bang-gia/vn30');
      }
    }

    return () => {
      dispatch(loginSuccess(null));
    };
  }, []);

  React.useEffect(() => {
    if (successful && !_.isEqual(successful, preSuccessful)) {
      dispatch(clientTokenSet(successful));

      storages.saveState('token', JSON.stringify(successful));
      setTimeout(() => {
        navigate('/price/bang-gia/vn30');
      }, 200);
    }
  }, [successful]);

  return (
    <div className="app flex flex-col h-screen overflow-hidden relative">
      <div
        className="h-screen flex items-center justify-center overflow-auto"
      >
        {!showRegister && (
          <FormLogin clearChangePass={() => setShowRegister(true)} />
        )}
        {/* {showRegister && (
          <FormRegister clearChangePass={() => setShowRegister(false)} />
        )} */}
      </div>
    </div>
  );
}

const makeMapStateToProps = () => {

  const mapStateToProps = (state: AppState) => {
    return {

      successful: getSuccessful(state),
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(LoginPage);
