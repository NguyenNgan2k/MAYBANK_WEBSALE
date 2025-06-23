import React, { useState } from "react";
import IconVn from "@assets/img/flag/vn-icon.png"
import IconEn from "@assets/img/flag/en-icon.png"


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
      <div className="flex items-center px-2 py-1 border rounded-full cursor-pointer" onClick={() => setOpen(!open)}>
        <p className="font-bold">{lang === 'vn' ? 'VN' : 'EN'}</p>
        <img src={lang === 'vn' ? IconVn : IconEn} className="w-5 h-5 ml-2" />
      </div>
      {
        open && (
          <ul className="dropdown w-28 absolute top-7 right-0">
            <li className="flex gap-4 items-center" onClick={() => handleOnclick('vn')}><img src={IconVn} className="w-6 h-6" /> VN</li>
            <li className="flex gap-4 items-center" onClick={() => handleOnclick('en')}><img src={IconEn} className="w-6 h-6" />EN</li>
          </ul>
        )
      }
    </div>
  );
}


export default Language;
