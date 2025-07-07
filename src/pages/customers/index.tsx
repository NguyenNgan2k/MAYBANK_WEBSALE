import React from "react";
import FormSearchCustomer from "./form/formSearchCustomer";
import IcCheck from '@assets/img/icon/check.svg'

const CustomersPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="text-base font-semibold">Danh sách khách hàng</div>
      <div className="h-[calc(100vh-128px)] bg-section rounded-xl p-4  flex flex-col gap-4">
        <FormSearchCustomer />
        <table className="table w-full">
          <thead>
            <tr>
              <th>Mã KH</th>
              <th>Số TK</th>
              <th>Tên KH</th>
              <th>Số giấy tờ</th>
              <th>Giá trị đầu tư</th>
              <th>Email</th>
              <th>SĐT</th>
              <th>NĐTCN</th>
              <th>Số ngày còn lại</th>
              <th>Trạng thái mở VSD</th>
              <th>Trạng thái ĐK VSD</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>800007</td>
              <td>079C800007</td>
              <td>TRẦN DUNG NHI</td>
              <td>034300002124</td>
              <td>97,125,125</td>
              <td>nhi@gmail.com</td>
              <td>0352160205</td>
              <td></td>
              <td>521</td>
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
              <td className="text-primary cursor-pointer underline">Chi tiết</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div >
  );
};

export default CustomersPage;
