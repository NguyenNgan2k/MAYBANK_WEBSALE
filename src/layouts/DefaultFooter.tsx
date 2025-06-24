import React from 'react';
import { connect, useDispatch } from 'react-redux';
import * as _ from 'lodash';
import { AppState } from '@/store/reducers';

import PanelStockDetail from '@pages/orders/panel/bondDetail';
import { setSymbolActive } from '@/store/client/actions';
import { usePrevious } from '@/components/hooks';

interface Props {
  symbolActive?: any;

}

const DefaultFooter: React.FunctionComponent<Props> = (props) => {
  const {
    symbolActive,

  } = props;
  const preSymbolActive = usePrevious(symbolActive);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState<boolean>(false);



  React.useEffect(() => {
    if (symbolActive && !_.isEqual(symbolActive, preSymbolActive)) {
      setShowModal(true);
    }
  }, [symbolActive]);


  function _handleCloseModal() {
    setShowModal(false);
    dispatch(setSymbolActive(''));
  }


  return (
    <>
      {/* <footer className="px-4 py-[10px] text-[11px] text-center text-skin-footer">
        Giá x 1,000 VND. Khối lượng x 1. Giá trị x 1,000,000 VND. Bản quyền
        thuộc về Công ty cổ phần Chứng khoán XTCS © 2024
      </footer> */}
      {showModal && (
        <PanelStockDetail onClose={_handleCloseModal} symbol={symbolActive} />
      )}
    </>
  );
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state: AppState) => {
    return {
      symbolActive: state.client.symbolActive,
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(DefaultFooter);
