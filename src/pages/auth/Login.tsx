import React from 'react';
import { connect, useDispatch } from 'react-redux';

import _ from 'lodash';
import { loginSuccess } from './actions';

import BgLogin from 'assets/img/bg/bg_login_full.png';
import FormLogin from 'components/login/formLogin';
import FormRegister from 'components/login/formRegister';
import { makeGetConfig } from 'lib/selector';
import { storages } from 'lib/storages';
import { AppState } from 'reducers';
import { clientTokenSet } from '../client/actions';

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
  const navigate = useHistory();

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
        navigate.push('/price/bang-gia/vn30');
      }
    }

    return () => {
      dispatch(loginSuccess(null));
    };
  }, []);

  React.useEffect(() => {
    if (successful && !_.isEqual(successful, preSuccessful)) {
      // dispatch action to store
      dispatch(clientTokenSet(successful));

      storages.saveState('token', JSON.stringify(successful));
      setTimeout(() => {
        navigate.push('/price/bang-gia/vn30');
      }, 200);
    }
  }, [successful]);

  return (
    <div className="app flex flex-col h-screen overflow-hidden relative">
      <div
        className="h-screen flex items-center justify-center overflow-auto"
        style={{
          backgroundImage: `url(${BgLogin})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {!showRegister && (
          <FormLogin clearChangePass={() => setShowRegister(true)} />
        )}
        {showRegister && (
          <FormRegister clearChangePass={() => setShowRegister(false)} />
        )}
      </div>
    </div>
  );
}

const makeMapStateToProps = () => {
  const getConfig = makeGetConfig();

  const mapStateToProps = (state: AppState) => {
    return {
      config: getConfig(state),

      successful: state.login.successful,
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(LoginPage);
