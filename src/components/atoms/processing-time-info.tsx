import React, { type ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const ProcessingTimeInfo = (): ReactElement => (
  <View style={styles.container} testID="ProcessingTimeInfo">
    <View style={styles.infoTextContianer}>
      <FontAwesome5 name="bolt" size={20} color="black" testID="process-time-icon" />
      <Text style={styles.infoText}>Processing time - 1 Hour</Text>
    </View>
    <Text style={styles.disclaimerText}>*Normal working hours & public holidays apply</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoTextContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  disclaimerText: {
    fontSize: 14,
    color: '#bdbec3'
  }
})

export default ProcessingTimeInfo
