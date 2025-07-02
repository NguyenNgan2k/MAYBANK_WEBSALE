import React from "react";
import FormSearchOrderBook from "./form/formSearchOrderBook";

const OrderBookPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="text-base font-semibold">Danh sách sổ lệnh</div>
      <div className="h-[calc(100vh-128px)] bg-section rounded-xl p-4  flex flex-col gap-4">
        <FormSearchOrderBook />
        <table className="table w-full">
          <thead>
            <tr>
              <th>Tài khoản</th>
              <th>Tên khách hàng</th>
              <th>Mã trái phiếu</th>
              <th>Loại lệnh</th>
              <th className="!text-right">Giá trị lệnh</th>
              <th className="!text-right">Khối lượng</th>
              <th>TT thanh toán</th>
              <th>Kênh</th>
              <th>Từ ngày</th>
              <th>Đến ngày</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>020611.I</td>
              <td>Nguyễn Huyền Anh</td>
              <td>VIC12502</td>
              <td className="text-red">MUA</td>
              <td className="!text-right">105,924,362</td>
              <td className="!text-right">5</td>
              <td>Đã thanh toán</td>
              <td>Trade VN</td>
              <td>18/03/2025</td>
              <td>18/04/2025</td>
            </tr>
            <tr>
              <td>020617.I</td>
              <td>Trịnh Trần Phương Tuấn</td>
              <td>ORS12304</td>
              <td className="text-green">BÁN</td>
              <td className="!text-right">96185753</td>
              <td className="!text-right">5</td>
              <td>Chờ ký HĐ</td>
              <td>Môi giới</td>
              <td>18/03/2025</td>
              <td>18/04/2025</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div >
  );
};

export default OrderBookPage;
