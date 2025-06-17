import React from "react";

interface Props {
  title: string;
  placement: string | undefined;
  children: any;
}

function Tooltiped(props: Props): JSX.Element {

  const { title, placement = "top", children } = props;
  return (
    <div className="relative">
      {children}
      <span className="absolute px-2 py-2 z-10 rounded">{title}</span>
    </div>
  );
}

export default Tooltiped;
