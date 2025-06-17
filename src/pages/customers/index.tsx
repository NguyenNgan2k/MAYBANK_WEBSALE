import React from "react";
import FormSearchCustomer from "./form/formSearchCustomer";

const CustomersPage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="text-base">Danh sách khách hàng</div>
      <FormSearchCustomer />
    </div>
  );
};

export default CustomersPage;
