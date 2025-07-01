import { arrPayMethod } from '@/utils/cfg';
import { BtnClose, BtnSubmit } from '@/utils/styledUtils';
import { IRetailDisSearch } from '@interface/search';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import Input from '@/components/layout/input/Input';
import Select from '@/components/layout/input/Select';
import InputMask from '@/components/layout/input/InputMask';
import SelectBond from '@/components/layout/input/SelectBond';
interface Props {

}

const FormOrder: React.FC = (props) => {
  const { control, handleSubmit } = useForm<IRetailDisSearch>()

  useEffect(() => {
    initialValues();
    return () => {

    };
  }, []);

  function initialValues() {
  }

  const onSubmit: SubmitHandler<IRetailDisSearch> = (data) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
      <div className="flex flex-col gap-2 h-full" >
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Mã trái phiếu
          </label>
          <SelectBond
            name="customerCode"
            control={control}
            placeholder="Nhập mã TP"
            className='!w-56'
          />
        </div>
        <div className='rounded-t-md'>
          <div className='font-semibold bg-primary py-2'>
            <p className='text-center'>VIC12502</p>
            <p className='text-center'>Tập đoàn Vingroup</p>
            <p className='text-center'>Mệnh giá: 100,000,000 VND</p>
          </div>
          <div className='bg-secondary py-2 px-4'>
            <div className='grid grid-cols-3 gap-2'>
              <div>
                <p>Lợi nhuận</p>
                <p className='font-semibold'>12%</p>
              </div>
              <div>
                <p>Kỳ thanh toán lãi</p>
                <p className='font-semibold'>Hàng quý</p>
              </div>
              <div></div>
              <div>
                <p>Ngày phát hành</p>
                <p className='font-semibold'>11/04/2025</p>
              </div>
              <div>
                <p>Ngày đáo hạn</p>
                <p className='font-semibold'>12/06/2028</p>
              </div>
              <div>
                <p>Kỳ hạn còn lại</p>
                <p className='font-semibold'>37.9 tháng</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Tài khoản
          </label>
          <Select
            name="accountCode"
            control={control}
            placeholder="Nhập tài khoản"
            opts={[]}
            className='!w-56'
          />
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Sức mua tối đa
          </label>
          <div>1,005,258,444</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Số tiền dự kiến đầu tư
          </label>
          <InputMask
            name="amount"
            control={control}
            placeholder="Nhập số tiền"
            className='!w-56'
          />
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Ngày yêu cầu
          </label>
          <div>17/04/2025</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Giá đặt (1,000 VND)
          </label>
          <div>100,000,000</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Số lượng
          </label>
          <div>10</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Lợi suất thực nhận
          </label>
          <div>4.8%/năm</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Phương thức thanh toán
          </label>
          <Select
            name="accountCode"
            control={control}
            placeholder="Nhập phương thức thanh toán"
            opts={arrPayMethod}
            className='!w-56'
          />
        </div>
        <div className='flex gap-1 items-center justify-between mt-auto'>
          <label className="">
            Phí
          </label>
          <div>52.303</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Thuế
          </label>
          <div>-</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Giá trị thực trả(VND)
          </label>
          <div className='font-semibold'>484.339.803</div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <label className="">
            Giá trị thực cọc(VND)
          </label>
          <div className='font-semibold'>484.339.803</div>
        </div>
        <div className='flex justify-end'>
          <BtnClose className='mr-2'>Hủy</BtnClose>
          <BtnSubmit>Xác nhận</BtnSubmit>
        </div>
      </div>
    </form >
  );
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state: AppState) => {
    return {
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(FormOrder);

