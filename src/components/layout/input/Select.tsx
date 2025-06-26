import React, { useRef, useState, useEffect } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import _ from 'lodash';
import PerfectScrollBar from 'react-perfect-scrollbar';

import IcArrowDown from '@assets/img/icon/arrowDown.svg';
import { INormalSelect } from 'interface';

interface ExtraProps {
  placeholder?: string;
  disabled?: boolean;
  opts?: Array<INormalSelect>;
  required?: boolean;
  className?: string;
}

type Props = ExtraProps & UseControllerProps;

function usePrevious(value: any) {
  const ref = useRef<any>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const RenderNormalSelect: React.FC<Props> = ({
  placeholder,
  disabled,
  opts,
  required = false,
  className = '',
  ...controllerProps
}) => {
  const showRef = useRef<HTMLDivElement>(null);
  const [txtSearch, setTxtSearch] = useState<string>();
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const {
    field,
    fieldState: { error, isTouched }
  } = useController(controllerProps);

  const preValue = usePrevious(field.value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showRef.current && !showRef.current.contains(event.target as Node)) {
        setShowSelect(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!_.isEqual(field.value, preValue)) {
      if (field.value) {
        const selected = _.find(opts, o => o.value === field.value);
        if (selected) setTxtSearch(selected.label);
      } else {
        setTxtSearch(placeholder || "Chọn");
      }
    }
  }, [field.value]);

  const handleSelect = (val: string) => {
    setShowSelect(false);
    field.onChange(val);
  };

  return (
    <>
      <div
        className={
          'relative ' +
          className +
          (isTouched && error ? ' border border-error' : '')
        }
        ref={showRef}
      >
        <div
          className={
            'form-input w-full h-full cursor-pointer flex items-center ' +
            (!field.value && 'text-subtitle')
          }
          onClick={() => setShowSelect(!showSelect)}
        >
          {txtSearch || placeholder || ''}
        </div>
        {showSelect && (
          <ul className="dropdown w-full absolute top-9 left-0 z-10">
            <PerfectScrollBar className="max-h-[400px]">
              {opts?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleSelect(item.value)}
                    className={
                      field.value === item.value ? 'bg-dropdown-active !text-title' : ''
                    }
                  >
                    {item.label}
                  </li>
                )
              })}
            </PerfectScrollBar>
          </ul>
        )}
        <img src={IcArrowDown}
          className={
            'w-4 h-4 cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 ' +
            (showSelect ? 'rotate-180' : '')
          }
        />
      </div>
      {isTouched && error && (
        <div className="text-left text-error">{error.message}</div>
      )}
    </>
  );
};

export default RenderNormalSelect;
