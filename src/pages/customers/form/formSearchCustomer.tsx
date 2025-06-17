// import { ICustomerSearch } from '@interface/search';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  formValueSelector,
  InjectedFormProps,
  reduxForm
} from 'redux-form';

interface Props {
  startDate?: string;
  endDate?: string;
}

interface ICustomerSearch {
  startDate?: string;
  endDate?: string;
}


const FormSearchCustomer: React.FunctionComponent<
  InjectedFormProps<ICustomerSearch> & Props
> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    initialValues();
    return () => {

    };
  }, []);

  function initialValues() {
  }

  function submit() {
    handleSearch();
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

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(submit)} className="col-span-1 ml-auto">
      <div className="flex flex-row gap-4"></div>
    </form>
  );
};

const _FormSearchCustomer = reduxForm<ICustomerSearch, Props>({
  form: 'formSearchCustomer',
  enableReinitialize: true,
})(FormSearchCustomer as any);

const selector = formValueSelector('formSearchCustomer');

const makeMapStateToProps = () => {
  const mapStateToProps = (state: AppState) => {
    const { startDate, endDate } =
      selector(
        state,
        'startDate',
        'endDate',
      );
    return {
      startDate,
      endDate,
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(_FormSearchCustomer);
