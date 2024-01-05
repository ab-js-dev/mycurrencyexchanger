import React from 'react'
import { TextInput, StyleSheet, type TextInputProps } from 'react-native'

type InputFieldProps = {
  isEditable?: boolean
  onAmountChange: (text: string) => void
} & TextInputProps

const InputField: React.FC<InputFieldProps> = ({ isEditable = true, onAmountChange }) => {
  return (
    <TextInput
      editable={isEditable}
      style={styles.input}
      onChangeText={onAmountChange}
      placeholder="0.00"
      keyboardType="decimal-pad"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 100,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D1F2D',
    textAlign: 'right'
  }
})

export default InputField
