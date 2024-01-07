import React, { type ReactElement } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface StartTransferButtonProps {
  onPress: () => void
  disabled?: boolean
}
const StartTransferButton = ({ onPress, disabled }: StartTransferButtonProps): ReactElement => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.button, disabled ?? false ? styles.disabled : styles.enabled]}
    onPress={onPress}
    testID="StartTransferButton">
    <Text style={styles.buttonText}>Start transfer</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  enabled: {
    backgroundColor: '#4F8EF7'
  },
  disabled: {
    backgroundColor: '#BDBDBD'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default StartTransferButton
