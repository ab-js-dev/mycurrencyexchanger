import React from 'react'
import { View } from 'react-native'
import FlagSelect from '../components/flagSelect'

const CalculatorScreen: React.FC = () => {
  return (
    <View>
      <FlagSelect text="You send exactly" onSelect={() => null}/>
    </View>
  )
}

export default CalculatorScreen
