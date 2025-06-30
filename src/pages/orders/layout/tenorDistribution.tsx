import React, { useState } from "react";
import FormSearchRetailDis from "../form/formSearchRetailDis";
import { BtnSell, Tag } from "@/utils/styledUtils";
import { setDblPrice } from "@/store/client/actions";
import { useDispatch } from "react-redux";

const TenorDistribution: React.FC = () => {
  const dispatch = useDispatch()
  const _handleTradeSym = (sym = '') => {
    const newOrder = {
      symbol: sym,
    };
    dispatch(setDblPrice(newOrder));
  };

  return (
    <div className="flex flex-col gap-4">
      <FormSearchRetailDis />
      <div className="h-[calc(100vh-296px)]">
        <table className="table w-full">
          <thead>
            <tr>
              <th rowSpan={2} className="border-r">Mã trái phiếu</th>
              <th>Max</th>
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
          </thead>
          <tbody>
            <tr>
              <td className="border-r">
                <span className="flex-center">
                  <span className="flex">
                    VIC12502
                    <span className="tag-pro">PRO</span>
                  </span>
                </span>
              </td>
              <td className="text-violet">9%</td>
              <td>12%</td>
              <td className="">100,000,000</td>
              <td className="">200,001</td>
              <td className="border-r">
                <span className="flex-center ">
                  <BtnSell className="yellow cursor-pointer"
                    onClick={() =>
                      dispatch(setDblPrice('VIC12502'))
                    }
                  >
                    Mua
                  </BtnSell>
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
              <td className="text-violet">9%</td>
              <td>12%</td>
              <td className="">100,000,000</td>
              <td className="">200,000</td>
              <td className="border-r">
                <span className="flex-center ">
                  <BtnSell className="green cursor-pointer"
                    onClick={() =>
                      _handleTradeSym('HDRCB2426003')
                    }
                  >
                    Mua
                  </BtnSell>
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
          <BtnSell className="green-mini cursor-pointer">Mua</BtnSell>
          Cho tất cả NĐT
        </div>
        <div className="flex gap-2">
          <BtnSell className="yellow-mini cursor-pointer">Mua</BtnSell>
          Cho NĐT chuyên nghiệp
        </div>
      </div>
    </div >
  );
};

export default TenorDistribution;
