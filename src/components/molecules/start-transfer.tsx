import React, { type ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import StartTransferButton from '@atoms/start-transfer-button'
import ProcessingTimeInfo from '@atoms/processing-time-info'

interface StartTransferProps {
  onPress: () => void
  disabled?: boolean
}
const StartTransfer = ({ onPress, disabled }: StartTransferProps): ReactElement => {
  return (
    <View style={styles.container}>
      <ProcessingTimeInfo />
      <StartTransferButton onPress={onPress} disabled={disabled} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    height: 150
  }
})

export default StartTransfer
