import Input from '@/components/layout/ui/input/Input';
import Select from '@/components/layout/ui/input/Select';
import { arrCustomerType } from '@/utils/cfg';
import { ICustomerSearch } from '@interface/search';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
interface Props {

}

const FormSearchCustomer: React.FC = (props) => {
  const { control, handleSubmit } = useForm<ICustomerSearch>()

  useEffect(() => {
    initialValues();
    return () => {

    };
  }, []);

  function initialValues() {
  }

  const onSubmit: SubmitHandler<ICustomerSearch> = (data) => {
    console.log(data)
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
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex flex-row gap-2">
        <div className='flex gap-1 items-center'>
          <label className="">
            Mã KH
          </label>
          <Input
            name="customerCode"
            control={control}
            placeholder="Nhập mã KH"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="">
            Số giấy tờ
          </label>
          <Input
            name="cardId"
            control={control}
            placeholder="Nhập số giấy tờ"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="">
            Tên KH
          </label>
          <Input
            name="customerName"
            control={control}
            placeholder="Nhập tên KH"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="">
            NĐT chuyên nghiệp
          </label>
          <Select
            name="customerType"
            control={control}
            opts={arrCustomerType}
          />
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

