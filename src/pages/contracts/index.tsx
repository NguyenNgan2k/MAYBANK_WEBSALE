import React from "react";
import FormSearchContracts from "./form/formSearchContracts";
import IcCheck from '@assets/img/icon/check.svg'


const ContractsPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="text-base font-semibold">Danh sách hợp đồng</div>
      <div className="h-[calc(100vh-128px)] bg-section rounded-xl p-4  flex flex-col gap-4">
        <FormSearchContracts />
        <table className="table w-full">
          <thead>
            <tr>
              <th>Mã khách hàng</th>
              <th>Tên khách hàng</th>
              <th>Mã hợp đồng</th>
              <th className="!text-right">Số tiền</th>
              <th className="!text-right">Khối lượng</th>
              <th>Ngày đầu tư</th>
              <th>Kỳ hạn</th>
              <th>Trạng thái</th>
              <th>Ký E-Contract</th>
              <th>Thanh toán</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>800006</td>
              <td>Nguyễn Huyền Anh</td>
              <td>VHM2025-250611-1-800006-70-1</td>
              <td className="!text-right">105,924,362</td>
              <td className="!text-right">5</td>
              <td>11/06/2025</td>
              <td>1W</td>
              <td>Chưa duyệt</td>
              <td>
                <span className="flex justify-center">
                  <img src={IcCheck} className="w-5 h-5" />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <img src={IcCheck} className="w-5 h-5" />
                </span>
              </td>
              <td className="text-primary cursor-pointer underline">Thanh lý</td>
            </tr>
            <tr>
              <td>800006</td>
              <td>Nguyễn Huyền Anh</td>
              <td>VHM2025-250611-1-800006-70-1</td>
              <td className="!text-right">105,924,362</td>
              <td className="!text-right">5</td>
              <td>11/06/2025</td>
              <td>1W</td>
              <td>Chưa duyệt</td>
              <td>
                <span className="flex justify-center">
                  <img src={IcCheck} className="w-5 h-5" />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <img src={IcCheck} className="w-5 h-5" />
                </span>
              </td>
              <td className="text-primary cursor-pointer underline">Thanh lý</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div >
  );
};

export default ContractsPage;
