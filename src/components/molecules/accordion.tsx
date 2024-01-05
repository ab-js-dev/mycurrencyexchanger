import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface AccordionComponentProps {
  title: string
  children: React.ReactNode
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false)
  console.log('AccordionComponent')

  const toggleExpanded = (): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setExpanded(!expanded)
  }

  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={toggleExpanded} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightSection}>
          <Text style={styles.feesText}>Fees</Text>
          <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
        </View>
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  accordion: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 16,
    color: '#333'
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  feesText: {
    fontSize: 16,
    color: '#333',
    marginRight: 8
  },
  content: {
    padding: 16,
    backgroundColor: '#f8f8f8'
  }
})

export default AccordionComponent
