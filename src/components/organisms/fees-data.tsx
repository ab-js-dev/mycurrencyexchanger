import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import VerticalDots from '@atoms/verical-dots'
import AccordionComponent from '@molecules/accordion'
import FeesInformation from '@components/atoms/fees-info'
interface FeesDataProps {
  exchangeRate: string
  exchangeCurrency: string
}
const FeesData: React.FC<FeesDataProps> = ({ exchangeCurrency, exchangeRate }: FeesDataProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false)
  const [dotsRepeat, setDotsRepeat] = React.useState(3)

  useEffect(() => {
    setDotsRepeat(isAccordionOpen ? 15 : 3)
  }, [isAccordionOpen])

  return (
    <View style={styles.container}>
      <VerticalDots dotsRepeat={dotsRepeat} />
      <AccordionComponent
        setAccordionState={setIsAccordionOpen}
        exchangeRate={exchangeRate}
        exchangeCurrency={exchangeCurrency}>
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
