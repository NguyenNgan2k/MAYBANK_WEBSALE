import React, { useState } from "react";
import FlagVn from "@assets/img/icon/flag/vi.png"
import IconVn from "@assets/img/icon/flag/vn-icon.png"
import FlagEn from "@assets/img/icon/flag/en.png"
import IconEn from "@assets/img/icon/flag/en-icon.png"


interface Props {
}

function Language(props: Props): JSX.Element {
  const [lang, setLang] = useState('vn');
  const [open, setOpen] = useState(false);

  function handleOnclick(lang: string) {
    setLang(lang)
    setOpen(false)
  }
  return (
    <div className="relative">
      <div className="flex items-center px-2 py-1 border rounded-[14px] cursor-pointer w-14" onClick={() => setOpen(!open)}>
        <p className="text-xs font-bold text-[#646464]">{lang === 'vn' ? 'VN' : 'EN'}</p>
        <img src={lang === 'vn' ? IconVn : IconEn} className="w-4 h-4 ml-2" />
      </div>
      {
        open && (
          <ul className="w-28 border rounded shadow-xl absolute top-5 left-2 bg-white">
            <li className="flex p-3 hover:bg-[#f2f2f2]" onClick={() => handleOnclick('vn')}>VN <img src={FlagVn} className="ml-2" /></li>
            <li className="flex p-3 hover:bg-[#f2f2f2]" onClick={() => handleOnclick('en')}>EN <img src={FlagEn} className="ml-2" /></li>
          </ul>
        )
      }
    </div>
  );
}


export default Language;
