import React, { useState } from "react";
import FormSearchRetailDis from "../form/formSearchRetailDis";
import { BtnSell, Tag } from "@/utils/styledUtils";
import { useDispatch } from "react-redux";
import { setSymbolActive } from "@/store/client/actions";

const RetailDistribution: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col gap-4">
      <FormSearchRetailDis />
      <div className="h-[calc(100vh-296px)]">
        <table className="table w-full">
          <thead>
            <tr>
              <th rowSpan={2} className="border-r">Mã trái phiếu</th>
              <th colSpan={2} className="border-r border-b">Lợi nhuận</th>
              <th rowSpan={2}>Coupon</th>
              <th rowSpan={2}>Đơn giá (VND)</th>
              <th rowSpan={2}>KL còn lại</th>
              <th rowSpan={2} className="border-r">Thao tác</th>
              <th rowSpan={2}>Đáo hạn</th>
              <th rowSpan={2}>ĐT tối thiểu (tr)</th>
              <th rowSpan={2}>Niêm yết</th>
              <th rowSpan={2}>TS đảm bảo</th>
              <th rowSpan={2}>Bảo lãnh</th>
            </tr>
            <tr>
              <th className="border-r">Min</th>
              <th className="border-r">Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r">
                <span className="flex-center">
                  <span className="flex cursor-pointer" onClick={() => dispatch(setSymbolActive('VIC12502'))}>
                    VIC12502
                    <span className="tag-pro">PRO</span>
                  </span>
                </span>
              </td>
              <td className="text-green">9%</td>
              <td className="text-violet border-r">10.3%</td>
              <td>12%</td>
              <td className="">100,000,000</td>
              <td className="">200,001</td>
              <td className="border-r">
                <span className="flex-center ">
                  <BtnSell className="yellow">Mua</BtnSell>
                </span>
              </td>
              <td>12/06/2028</td>
              <td className="">100</td>
              <td>
                <span className="flex-center">
                  <Tag className="niem-yet">GDTT</Tag>
                </span>
              </td>
              <td>
                <span className="flex-center">
                  <Tag className="tsdb">TSĐB</Tag>
                </span>
              </td>
              <td>
                <span className="flex-center">
                  <Tag className="bao-lanh">Bảo lãnh</Tag>
                </span>
              </td>
            </tr>
            <tr>
              <td className="border-r">HDRCB2426003</td>
              <td className="text-green">9%</td>
              <td className="text-violet border-r">10.3%</td>
              <td>12%</td>
              <td className="">100,000,000</td>
              <td className="">200,000</td>
              <td className="border-r">
                <span className="flex-center">
                  <BtnSell className="green">Mua</BtnSell>
                </span>
              </td>
              <td>26/01/2026</td>
              <td className="">100</td>
              <td>_</td>
              <td>_</td>
              <td>_</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" h-7 bg-table flex items-center gap-4 px-2">
        <div className="flex gap-2">
          <BtnSell className="green-mini">Mua</BtnSell>
          Cho tất cả NĐT
        </div>
        <div className="flex gap-2">
          <BtnSell className="yellow-mini">Mua</BtnSell>
          Cho NĐT chuyên nghiệp
        </div>
      </div>
    </div>
  );
};

export default RetailDistribution;
