import React, { useEffect } from 'react'
import { TextInput, StyleSheet, type TextInputProps } from 'react-native'

type InputFieldProps = {
  isEditable?: boolean
  calculatedValue?: string
  onAmountChange: (text: string) => void
} & TextInputProps

const InputField: React.FC<InputFieldProps> = ({
  calculatedValue,
  isEditable = true,
  onAmountChange
}) => {
  const [value, setValue] = React.useState<string>('')
  const onChange = (val: string): void => {
    onAmountChange(val)
    setValue(val)
  }

  useEffect(() => {
    setValue(calculatedValue ?? '')
  }, [calculatedValue])
  return (
    <TextInput
      editable={isEditable}
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder="0.00"
      keyboardType="decimal-pad"
      testID="inputField"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 70,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D1F2D',
    textAlign: 'right'
  }
})

export default InputField
