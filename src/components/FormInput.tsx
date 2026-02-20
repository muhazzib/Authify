import React, { useState } from 'react';
import { View, Text, KeyboardTypeOptions, TouchableOpacity } from 'react-native';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import InputField from './InputField';
import formInputStyles from '../styles/FormInput.styles';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

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
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = !!secureTextEntry;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={formInputStyles.container}>
          {isPassword && (
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              style={formInputStyles.eyeIconContainer}
              accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
            >
              <MaterialIcons
                name={showPassword ? 'visibility' : 'visibility-off'}
                size={22}
                color="#888"
              />
            </TouchableOpacity>
          )}
          <InputField
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            secureTextEntry={isPassword && !showPassword}
            keyboardType={keyboardType}
          />
          {error && <Text style={formInputStyles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default React.memo(FormInput);