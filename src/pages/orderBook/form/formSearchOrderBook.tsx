import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { arrCustomerType } from '@/utils/cfg';
import { BtnSubmit } from '@/utils/styledUtils';
import { ICustomerSearch } from '@interface/search';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
interface Props {

}

const FormSearchOrderBook: React.FC = (props) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between items-center">
      <div className="grid grid-cols-5 grid-rows-2 gap-2">
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Tài khoản
          </label>
          <Input
            name="accountCode"
            control={control}
            placeholder="Nhập tài khoản"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Mã TP
          </label>
          <Input
            name="bondCode"
            control={control}
            placeholder="Nhập mã trái phiếu"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Tên KH
          </label>
          <Input
            name="customerName"
            control={control}
            placeholder="Nhập tên KH"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Trạng thái
          </label>
          <Select
            name="status"
            control={control}
            opts={[]}
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Loại lệnh
          </label>
          <Select
            name="typeOrder"
            control={control}
            opts={[]}
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Từ ngày
          </label>
          <Input
            name="fromDate"
            control={control}
            placeholder="Từ ngày"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Đến ngày
          </label>
          <Input
            name="toDate"
            control={control}
            placeholder="Đến ngày"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="w-16">
            Kênh
          </label>
          <Select
            name="channel"
            control={control}
            opts={[]}
          />
        </div>
      </div>
      <BtnSubmit type='submit'>
        Tìm kiếm
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

export default connect(makeMapStateToProps)(FormSearchOrderBook);

