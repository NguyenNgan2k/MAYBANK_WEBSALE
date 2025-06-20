import React from "react";
import Language from "@/components/layout/Language";
import AccountHeader from "@/components/layout/AccountHeader";
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
    <header className={"h-14 px-4 flex justify-end border-b" + (sticky ? " sticky" : "")}>
      <div className="flex items-center gap-4">
        <Language />
        <div className="h-6 border-l" />
        <AccountHeader />
      </div>
    </header>
  );
};


export default DefaultHeader;
