import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface AccordionComponentProps {
  exchangeRate: string
  exchangeCurrency: string
  children: React.ReactNode
  setAccordionState: (state: boolean) => void
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  exchangeRate,
  exchangeCurrency,
  children,
  setAccordionState
}) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = (): void => {
    setExpanded(!expanded)
    setAccordionState(!expanded)
  }

  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={toggleExpanded} style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.staticLabelFirst}>1 </Text>
          <Text style={styles.staticLabelSecond}>AED = </Text>
          <Text style={styles.rateLabel}>{exchangeRate}</Text>
          <Text style={styles.rateLabel}>{exchangeCurrency}</Text>
        </View>
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 5
  },
  staticLabelFirst: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#727c97'
  },
  rateLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#727c97',
    marginRight: 4
  },

  staticLabelSecond: {
    fontSize: 16,
    color: '#9fa8ba',
    marginTop: 2
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  feesText: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200EE'
  },
  content: {
    padding: 16,
    backgroundColor: '#f8f8f8'
  }
})

export default AccordionComponent
