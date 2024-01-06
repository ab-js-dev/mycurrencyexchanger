import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import VerticalDots from '@atoms/verical-dots'
import AccordionComponent from '@molecules/accordion'
import FeesInformation from '@components/atoms/fees-info'

const FeesData: React.FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false)
  const [dotsRepeat, setDotsRepeat] = React.useState(3)

  useEffect(() => {
    setDotsRepeat(isAccordionOpen ? 3 : 5)
  }, [isAccordionOpen])

  return (
    <View style={styles.container}>
      <VerticalDots dotsRepeat={dotsRepeat} />
      <AccordionComponent setAccordionState={setIsAccordionOpen} title="1 AED = PHP 14.24">
        <FeesInformation />
      </AccordionComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 10,
    padding: 10
  }
})

export default FeesData
