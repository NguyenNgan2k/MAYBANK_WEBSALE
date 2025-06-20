import { INormalSelect } from '@/interface';
import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';

// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface Props {
  className: string;
  name: string;
  required?: boolean;
  control: any;
  opts: INormalSelect[]
}

const RenderFieldSelect: FunctionComponent<Props> = (props) => {
  const {
    className,
    name,
    control,
    opts
  } = props;

  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select {...field}>
            {opts.map((otp: any) => (
              <option key={otp.value} value={otp.value}>
                {otp.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default RenderFieldSelect;
