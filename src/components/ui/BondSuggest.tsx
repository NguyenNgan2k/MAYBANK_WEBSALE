import * as _ from 'lodash';
import React from 'react';
import PerfectScrollBar from 'react-perfect-scrollbar';

import { IAllBonds } from '@/interface';
import IcSearch from '@assets/img/icon/search.svg';
import { usePrevious } from '@/components/hooks';

function escapeRegexCharacters(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

interface Props {
  dataSuggest: IAllBonds[];
  addBond: Function;
  placeholder: string;
  className?: string;
  input?: any
}

function BondSuggest(props: Props): JSX.Element {
  const wrapperRef = React.useRef<any>(null);
  const inputRef = React.useRef<any>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [textSearch, setTextSearch] = React.useState<string>('');
  const [suggestions, setSuggestions] = React.useState<IAllBonds[]>([]);
  const [indexActive, setIndexActive] = React.useState<number>(-1);
  const [selected, setSelected] = React.useState<boolean>(false);

  const { dataSuggest, addBond, className, placeholder, input } = props;

  const preIndexActive = usePrevious(indexActive);
  const preInputValue = usePrevious(input?.value);

  console.log(input)

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    // See note below
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (indexActive > -1 && !_.isEqual(indexActive, preIndexActive)) {
      let _rootRow: any = document.getElementById('active-select');
      if (_rootRow) {
        _rootRow.scrollIntoView({
          behavior: 'instant',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }
  }, [indexActive]);

  React.useEffect(() => {
    if (input?.value && !_.isEqual(input?.value, preInputValue)) {
      setSelected(true);
      setTextSearch(input?.value);
      getSuggestions(input?.value);
    }
  }, [input?.value]);

  React.useEffect(() => {
    if (selected) return;
    // remove old data
    input?.onChange('');

    if (textSearch) {
      setShowModal(true);
      getSuggestions(textSearch);
    } else {
      setSuggestions([]);
      setShowModal(false);
      setIndexActive(-1);
    }
  }, [textSearch]);

  function handleClickOutside(event: any) {
    if (
      wrapperRef &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setShowModal(false);
      setSelected(false);
    }
  }

  function handleClear() {
    setShowModal(false);
    input?.onChange('');
    setTextSearch('');
    setIndexActive(-1);
  }

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (suggestions.length > 0)
        if (indexActive < 0 || indexActive > suggestions.length) {
          const find = _.find(suggestions, (o) => o?.bond_code === textSearch);
          addBond(find);
          handleClear();
        } else {
          setSelected(true);
          const _record = suggestions[indexActive];
          addBond(_record);
          handleClear();
        }
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (indexActive === suggestions.length - 1) {
        setIndexActive(0);
      } else if (indexActive <= suggestions.length - 1)
        setIndexActive(indexActive + 1);
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (indexActive > 0) setIndexActive(indexActive - 1);
    }
  }

  function handleSelect(record: IAllBonds) {
    setShowModal(false);
    setSelected(true);
    addBond(record);
    handleClear();
  }

  function getSuggestions(value: string) {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return setSuggestions(dataSuggest);
    }

    const _dataSearch = dataSuggest?.filter((item: any) =>
      item.bond_code?.toLowerCase().includes(escapedValue?.toLowerCase()),
    );
    setSuggestions(_dataSearch);
    setIndexActive(0);
  }

  return (
    <div
      {...input}
      ref={wrapperRef}
      className={
        'form-search flex items-center relative ' + className
      }
    >
      <img src={IcSearch} className="w-4 h-4 mr-2" />
      <input
        ref={inputRef}
        value={textSearch}
        onChange={(e) => {
          setSelected(false);
          setTextSearch(e.target.value);
        }}
        type={'text'}
        placeholder={placeholder}
        className="input-search"
        autoComplete="off"
        onKeyDown={handleKeyDown}
        onClick={() => {
          if (!textSearch && !suggestions.length) setSuggestions(dataSuggest);
          setShowModal(true);
        }}
      />
      {showModal && (
        <div className="dropdown w-[300px] absolute top-9 left-0 z-10">
          <PerfectScrollBar className="w-full max-h-[360px] 2xl:max-h-[476px]">
            <ul>
              {suggestions &&
                !!suggestions.length &&
                suggestions.map((item: IAllBonds, index: number) => (
                  <li
                    key={index}
                    className={
                      `group flex items-center ` +
                      (indexActive === index ? 'active' : '')
                    }
                    onClick={() => handleSelect(item)}
                    id={indexActive === index ? 'active-select' : ''}
                  >
                    <span
                      className='font-bold'
                    >
                      {item?.bond_code}
                    </span>
                    <span
                      className='mx-1'
                    >
                      -
                    </span>
                    <span
                      className={`truncate font-medium`}
                    >{`${item?.bond_issuer}`}</span>
                  </li>
                ))}
            </ul>
            {(!suggestions || !suggestions.length) && (
              <p className="text-center text-xs text-skin-subdued w-[328px]">
                Không có dữ liệu
              </p>
            )}
          </PerfectScrollBar>
        </div>
      )}
    </div>
  );
}

export default BondSuggest;
