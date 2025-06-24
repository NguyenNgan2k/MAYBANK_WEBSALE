import React, { useState } from "react";
import RetailDistribution from '@pages/orders/layout/retailDistribution'
import TenorDistribution from '@pages/orders/layout/tenorDistribution'

const CustomersPage: React.FC = () => {
  const [typeBond, setTypeBond] = useState('RETAIL') // RETAIL / TENOR
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="text-base font-semibold">Danh sách trái phiếu</div>
      <div className="h-[calc(100vh-128px)] bg-section rounded-xl p-4 flex flex-col gap-4">
        <div className="w-40 h-8 p-0.5 rounded-xl bg-secondary flex items-center">
          <div
            className={"w-1/2 h-7 flex items-center justify-center rounded-xl cursor-pointer " + (typeBond === 'RETAIL' && 'bg-primary font-semibold')}
            onClick={() => setTypeBond("RETAIL")}
          >
            Đáo hạn
          </div>
          <div
            className={"w-1/2 h-7 flex items-center justify-center rounded-xl cursor-pointer " + (typeBond === 'TENOR' && 'bg-primary font-semibold')}
            onClick={() => setTypeBond("TENOR")}
          >
            Kỳ hạn
          </div>
        </div>
        <div>
          {
            typeBond === 'RETAIL' && <RetailDistribution />
          }
          {
            typeBond === 'TENOR' && <TenorDistribution />
          }
        </div>
      </div>
    </div >
  );
};

export default CustomersPage;
