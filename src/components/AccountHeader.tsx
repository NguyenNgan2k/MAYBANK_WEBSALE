import React, { useState } from "react";

interface Props {
}

function AccountHeader(props: Props): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center">
      </div>
      <div>
        <div>Nguyễn Thị Ngân</div>
        <div className="text-subtitle text-[10px]">Admin</div>
      </div>
    </div>
  );
}


export default AccountHeader;
