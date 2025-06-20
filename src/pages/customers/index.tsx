import React from "react";
import FormSearchCustomer from "./form/formSearchCustomer";

const CustomersPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="text-base">Danh sách khách hàng</div>
      <div className="bg-section rounded-xl p-4 h-full">
        <FormSearchCustomer />
      </div>

    </div>
  );
};

export default CustomersPage;
