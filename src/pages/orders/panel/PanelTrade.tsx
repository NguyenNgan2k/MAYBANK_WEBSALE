import Modal from '@/components/layout/Modal';
import { ReactComponent as IconClose } from 'assets/img/icon/icon_close.svg';
import _ from 'lodash';
import React from 'react';
// import FormOrder from './formTrade';

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
        <div className='text-center text-base font-semibold'>Đặt lệnh</div>
      </div>
    </Modal>
  );
}


export default React.memo(PanelTrade);
