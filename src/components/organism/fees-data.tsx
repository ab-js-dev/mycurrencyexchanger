import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import VerticalDots from '../atoms/verical-dots'
import AccordionComponent from '../molecules/accordion'

const FeesData: React.FC = () => {
  //   const handleMenuPress = (): void => {
  //     // Handle the press event for menu options
  //   }
  console.log('FeesData')

  return (
    <View style={styles.container}>
      <VerticalDots />
      <AccordionComponent title="1 AED = PHP 14.24">
        <Text>Additional details can go here...</Text>
      </AccordionComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default FeesData
