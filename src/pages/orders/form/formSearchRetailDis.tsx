import Input from '@/components/layout/ui/input/Input';
import Select from '@/components/layout/ui/input/Select';
import { arrCustomerType } from '@/utils/cfg';
import { BtnSubmit } from '@/utils/styledUtils';
import { IRetailDisSearch } from '@interface/search';
import { AppState } from '@store/reducers';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
interface Props {

}

const FormSearchRetailDis: React.FC = (props) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between">
      <div className="flex flex-row gap-2">
        <div className='flex gap-1 items-center'>
          <label className="">
            Mã trái phiếu
          </label>
          <Input
            name="customerCode"
            control={control}
            placeholder="Nhập mã TP"
          />
        </div>
        <div className='flex gap-1 items-center'>
          <label className="">
            Tổ chức phát hành
          </label>
          <Input
            name="cardId"
            control={control}
            placeholder="Nhập TCPH"
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

export default connect(makeMapStateToProps)(FormSearchRetailDis);

