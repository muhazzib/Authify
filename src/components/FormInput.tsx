import React from 'react';
import { View, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import InputField from './InputField';

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

function FormInput<T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          <InputField
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

export default FormInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
