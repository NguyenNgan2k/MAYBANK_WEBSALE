import { ICustomerSearch } from '@interface/search';
import Input from '@/components/layout/ui/input/Input';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import {
  Field,
  formValueSelector,
  InjectedFormProps,
  reduxForm
} from 'redux-form';

interface Props {

}




const FormSearchCustomer: React.FC = (props) => {
  const { register, handleSubmit } = useForm<ICustomerSearch>()

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

  return (
    <form onSubmit={handleSubmit(submit)} className="col-span-1 ml-auto">
      <div className="flex flex-row gap-2">
        <div>
          <label className="">
            Mã KH
          </label>
          <Input className="" label="First Name" register={register} />
        </div>
      </div>
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

export default connect(makeMapStateToProps)(FormSearchCustomer);
