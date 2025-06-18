import { FunctionComponent, useState } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';

// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface Props {
  input: any;
  className: string | undefined;
  placeholder: string | undefined;
  disabled?: boolean | undefined;
  meta: any;
  label: Path<any>
  register: UseFormRegister<any>
  required: boolean
}

const RenderFieldInput: FunctionComponent<Props> = (props) => {
  const {
    input,
    className,
    disabled,
    placeholder,
    meta: { touched, error },
    register,
    label,
    required
  } = props;
  const [typeInput, setTypeInput] = useState(type);

  return (
    <div className="relative">
      <input
        {...input}
        type={typeInput}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        style={{
          paddingRight: type === 'password' ? '2rem' : '.75rem',
          borderColor: `${touched && error ? '#ff5555' : ''}`,
          backgroundColor: `${disabled ? 'var(--color-bg-disable)' : ''}`,
        }}
        {...register(label, { required })}
      />
      {touched && error && (
        <div
          style={{
            color: '#ff5555',
            margin: '0 0 10px',
            fontSize: '0.75rem',
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default RenderFieldInput;
