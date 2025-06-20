import { ICustomerSearch } from '@interface/search';
import RenderFieldInput from '@/components/layout/ui/input/Input';
import Select from '@/components/layout/ui/input/Select';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { arrCustomerType } from '@/utils/cfg';
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
    <form onSubmit={handleSubmit(onSubmit)} className="col-span-1 ml-auto">
      <div className="flex flex-row gap-2">
        <div className='flex gap-1 items-center'>
          <label className="">
            Mã KH
          </label>
          <Controller
            name="customerCode"
            control={control}
            render={({ field }) => (
              <RenderFieldInput
                {...field}
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            )}
          />

        </div>
        <div className='flex gap-1 items-center'>
          <label className="">
            Số giấy tờ
          </label>
          <Controller
            name="cardId"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} className='' />}
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="">
            Tên KH
          </label>
          <Controller
            name="customerName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} className='' />}
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="">
            NĐT chuyên nghiệp
          </label>
          <Select
            className=""
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

