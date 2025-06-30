import React from 'react';
import { connect, useDispatch } from 'react-redux';
import * as _ from 'lodash';
import { AppState } from '@/store/reducers';
import { setSymbolActive } from '@/store/client/actions';
import { usePrevious } from '@/components/hooks';

import PanelBondDetail from '@pages/orders/panel/bondDetail';
import PanelTrade from '@pages/orders/panel/PanelTrade';
interface Props {
  symbolActive?: any;
  dblPri?: string
}

const DefaultFooter: React.FunctionComponent<Props> = (props) => {
  const {
    symbolActive,
    dblPri

  } = props;
  const preSymbolActive = usePrevious(symbolActive);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [toggleTrade, setToggleTrade] = React.useState<boolean>(false);
  const preDblPri = usePrevious(dblPri);

  React.useEffect(() => {
    if (symbolActive && !_.isEqual(symbolActive, preSymbolActive)) {
      setShowModal(true);
    }
  }, [symbolActive]);


  React.useEffect(() => {
    if (dblPri &&
      !_.isEqual(dblPri, preDblPri)
    ) {
      setToggleTrade(true);
    }
  }, [dblPri]);

  function _handleCloseModal() {
    setShowModal(false);
    dispatch(setSymbolActive(''));
  }

  function _handleClosePanelTrade() {
    setToggleTrade(false);
  }


  return (
    <>
      {/* <footer className="px-4 py-[10px] text-[11px] text-center text-skin-footer">
        Giá x 1,000 VND. Khối lượng x 1. Giá trị x 1,000,000 VND. Bản quyền
        thuộc về Công ty cổ phần Chứng khoán XTCS © 2024
      </footer> */}
      {showModal && (
        <PanelBondDetail onClose={_handleCloseModal} symbol={symbolActive} />
      )}
      {toggleTrade && <PanelTrade onClose={_handleClosePanelTrade} />}
    </>
  );
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state: AppState) => {
    return {
      symbolActive: state.client.symbolActive,
      dblPri: state.client.dblPri,
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(DefaultFooter);
