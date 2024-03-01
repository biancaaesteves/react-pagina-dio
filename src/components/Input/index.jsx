import React from 'react';
import { Controller } from "react-hook-form";

import {InputContainer,  IconContainer, InputText, ErrorText } from './styles';

const Input = ({leftIcon, name, control,errorMessage, ...rest}) => {
  // ...rest joga tudo o que sobrar de propriedade para dentro
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        rules={{required: true}}
        render={({ field }) =>  <InputText {...field} {...rest} />}
      />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }; 