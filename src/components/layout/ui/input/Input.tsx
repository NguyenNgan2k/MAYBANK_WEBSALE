import React, { FunctionComponent, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import EyeIcon from '@assets/img/icon/eye.svg';
import EyeSlashIcon from '@assets/img/icon/eyeSlash.svg';


interface ExtraProps {
  type?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

type Props = ExtraProps & UseControllerProps;

const RenderFieldInput: FunctionComponent<Props> = ({
  type = 'text',
  className,
  placeholder,
  disabled,
  ...controllerProps
}) => {
  const {
    field,
    fieldState: { error, isTouched },
  } = useController(controllerProps);

  const [typeInput, setTypeInput] = useState(type);

  return (
    <div className="relative">
      <input
        {...field}
        type={typeInput}
        disabled={disabled}
        className={className + ' form-input placeholder:!text-subtitle'}
        placeholder={placeholder}
        style={{
          paddingRight: type === 'password' ? '2rem' : '.75rem',
          borderColor: isTouched && error ? 'var(--color-bd-error)' : undefined,
        }}
      />
      {/* {type === 'password' && (
        <span
          className="absolute"
          style={{ top: '7px', right: '10px' }}
          onClick={() =>
            setTypeInput(typeInput === 'text' ? 'password' : 'text')
          }
        >
          {typeInput === 'text' ? (
            <EyeIcon className="h-4" />
          ) : (
            <EyeSlashIcon className="h-4" />
          )}
        </span>
      )} */}
      {isTouched && error && (
        <div
          style={{
            color: '#ff5555',
            margin: '0 0 10px',
            fontSize: '0.75rem',
          }}
        >
          {error.message}
        </div>
      )}
    </div>
  );
};

export default RenderFieldInput;
