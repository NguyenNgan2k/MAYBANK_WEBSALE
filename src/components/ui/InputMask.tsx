import React, { FunctionComponent, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface ExtraProps {
  type?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

type Props = ExtraProps & UseControllerProps;

const RenderInputMask: FunctionComponent<Props> = ({
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
    <IMaskInput
      className={'text-right form-input placeholder:!text-subtitle placeholder:text-left ' + className}
      mask={Number}
      radix="."
      unmask={true}
      value={field.value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default RenderInputMask;
