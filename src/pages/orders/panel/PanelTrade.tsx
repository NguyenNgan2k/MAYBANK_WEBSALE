import Modal from '@/components/layout/Modal';
import { ReactComponent as IconClose } from 'assets/img/icon/icon_close.svg';
import _ from 'lodash';
import React from 'react';
import FormOrder from './formTrade';

interface Props {
  onClose: Function;
}

export function usePrevious(value: any) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function PanelTrade(props: Props): JSX.Element {
  const { onClose } = props;
  return (
    <Modal onClose={() => onClose()}>
      <div className='flex flex-col h-[700px] w-[1000px] gap-4'>
        <div className='flex gap-2 h-full'>
          <div className='w-1/2 flex flex-col gap-4'>
            <div className='text-sm font-semibold text-center'>Lệnh mua</div>
            <FormOrder />
          </div>
          <div className='w-1/2 flex flex-col gap-4'>
            <div className='text-sm font-semibold text-center'>Minh họa dòng tiền</div>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Nội dung</th>
                  <th>Ngày nhận về</th>
                  <th className='!text-right'>Tiền nhận về (tr)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trái tức</td>
                  <td>07/09/2025</td>
                  <td className='!text-right'>0.5</td>
                </tr>
                <tr>
                  <td>Trái tức</td>
                  <td>07/09/2025</td>
                  <td className='!text-right'>0.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Modal>
  );
}


export default React.memo(PanelTrade);
