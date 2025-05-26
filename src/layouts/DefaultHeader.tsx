import React from "react";
import Language from "@components/language";
import IgLogo from "@assets/img/logo/maybank.png";

interface Props {
}
const DefaultHeader: React.FunctionComponent<Props> = (props) => {
  const [sticky, setSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  });

  const handleStickyHeader = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <header className={"h-14 px-4 py-2 flex justify-between" + (sticky ? " sticky" : "")}>
      <div className="flex items-center">
        <div className="font-bold w-full">
          <p className="text-subtitle text-xs">Chào mừng trở lại</p>
          <p className="text-sm">NGUYEN THI THANH</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-xs border p-1 mr-2">
          KHÁCH HÀNG | SALE
        </div>
        <Language />
        <div>
          <div className="rounded-full bg-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white p-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>

        </div>
      </div>
    </header>
  );
};


export default DefaultHeader;
