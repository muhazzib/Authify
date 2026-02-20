import React from 'react';
import { View, Text, KeyboardTypeOptions } from 'react-native';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import InputField from './InputField';
import formInputStyles from '../styles/FormInput.styles';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const FormInput = <T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}: FormInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={formInputStyles.container}>
          <InputField
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
          {error && <Text style={formInputStyles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default React.memo(FormInput);
