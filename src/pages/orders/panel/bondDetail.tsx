import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

interface Props {
  onClose: Function;
  symbol: string;
}

const styleLg = {
  content: {
    top: '50%',
    transform: 'translateY(-50%)',
    bottom: 'auto',
    left: 'calc( 50% - 640px )',
    height: 'auto',
    width: '1280px',
    padding: '12px',
    borderWidth: '1px',
    overflow: 'inherit',
    borderRadius: '24px',
    background: 'var(--color-bg-primary)',
    borderColor: 'var(--color-border-weak)',
  },
};

function usePrevious(value: any) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function PanelStockDetail(props: Props) {
  const location = useLocation();
  const { symbol, onClose } = props;
  const { pathname } = location;
  const prePathname = usePrevious(pathname);

  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
    };
  }, []);

  React.useEffect(() => {
    if (pathname && prePathname && pathname !== prePathname) {
      onClose();
    }
  }, [pathname]);

  return (
    <ReactModal
      isOpen={true}
      contentLabel="onRequestClose Example"
      // onRequestClose={onClose}
      shouldCloseOnOverlayClick={false}
      style={styleLg}
    >

    </ReactModal>
  );
}

export default React.memo(PanelStockDetail);
