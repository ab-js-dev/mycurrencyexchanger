import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons' // Make sure to install @expo/vector-icons

const VerticalDots: React.FC = () => {
  console.log('VerticalDots')

  return (
    <TouchableOpacity style={styles.dots}>
      <Entypo name="dots-three-vertical" size={24} color="black" />
      <Entypo name="dots-three-vertical" size={24} color="black" />
      <Entypo name="dots-three-vertical" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  dots: {
    padding: 8
  }
})

export default VerticalDots
