import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Modal from '@components/layout/Modal'
import { allBonds } from '@/utils/cfg';
import BondSuggest from '@/components/layout/input/BondSuggest';
import { BtnSubmit } from '@/utils/styledUtils';
interface Props {
  onClose: Function;
  symbol: string;
}


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

  function _handleAddStock() {

  }

  return (
    <Modal onClose={() => onClose()}>
      <div className='flex flex-col h-[700px] w-[1000px] gap-4'>
        <div className='flex justify-between'>
          <BondSuggest
            dataSuggest={allBonds || []}
            addBond={_handleAddStock}
            placeholder="Tìm kiếm mã TP"
          />
          <BtnSubmit>Đặt lênh</BtnSubmit>
        </div>
        <div className='flex'>
          <div className='w-1/2 flex flex-col gap-4'>
            <div className='text-sm font-semibold text-center'>Thông tin trái phiếu</div>
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
            <div className='grid grid-cols-[150px_auto] gap-2'>
              <div>Tài sản đảm bảo:</div>
              <div>Cổ phần VIC và các tài sản bổ sung và/hoặc thay thế khác (nếu cần thiết) thuộc sở hữu của tổ chức phát hành  và/hoặc (các) bên thứ ba</div>
              <div>TP có quyền mua/bán trước hạn:</div>
              <div>Có</div>
              <div>Áp dụng điều kiện:</div>
              <div>Dành cho NĐT chuyên nghiệp</div>
              <div>Loại trái phiếu:</div>
              <div>TP không chuyển đổi, không kèm chứng quyền</div>
              <div>Thanh toán trái tức:</div>
              <div>Vào ngày cuối cùng của mỗi kỳ tính lãi và ngày đáo hạn hoặc ngày mua lại trước hạn</div>
              <div>Lãi suất hiện tại:</div>
              <div>10,3%</div>
              <div>Ngày trả trái trái tức sắp tới:</div>
              <div>11/07/2025</div>
              <div>Phương thức trả lãi:</div>
              <div>Đối với 4 (bốn) Kỳ Tính Lãi đầu tiên, Lãi Suất bằng 10,11%/năm (mười phẩy mười một phần trăm một năm)</div>
              <div>Tổ chức Bảo lãnh phát hành/đại lý phát hành:</div>
              <div>CTCK Maybank</div>
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-4'>
            <div className='text-sm font-semibold text-center'>Dòng tiền</div>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Ngày trả lãi</th>
                  <th>Ngày GDKHQ</th>
                  <th className='!text-right'>Dòng tiền dự kiến trước thuế (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11/04/2023</td>
                  <td>18/02/2023</td>
                  <td className='!text-right'>1,050,000</td>
                </tr>
                <tr>
                  <td>11/07/2024</td>
                  <td>18/02/2024</td>
                  <td className='!text-right'>1,050,000</td>
                </tr>
                <tr>
                  <td>11/04/2025</td>
                  <td>18/02/2025</td>
                  <td className='!text-right'>1,050,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Modal>

  );
}

export default PanelStockDetail;
