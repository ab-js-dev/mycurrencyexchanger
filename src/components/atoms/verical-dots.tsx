import React, { type ReactElement } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons' // Make sure to install @expo/vector-icons

interface VerticalDotsProps {
  dotsRepeat: number
}
const VerticalDots: React.FC<VerticalDotsProps> = ({ dotsRepeat }): ReactElement => {
  const dotsArray = Array.from({ length: dotsRepeat }, (_, index) => index)

  return (
    <TouchableOpacity style={styles.dots}>
      {dotsArray.map((_, index) => (
        <Entypo key={index} name="dots-three-vertical" size={24} color="black" />
      ))}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  dots: {
    padding: 8
  }
})

export default VerticalDots
