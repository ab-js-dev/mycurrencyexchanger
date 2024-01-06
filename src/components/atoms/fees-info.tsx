import React, { type ReactElement } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { FEE_TIERS, type Tiers } from '@static/fees'

const renderItem = ({ item }: { item: Tiers }): ReactElement => (
  <View style={styles.itemContainer}>
    <Text style={styles.amountText}>AED {item.limit} and above</Text>
    <Text style={styles.feeText}>{(item.fee * 100).toFixed(2)}%</Text>
  </View>
)
const FeesInformation = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fee Structure</Text>
      <FlatList
        data={FEE_TIERS}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#727c97',
    marginBottom: 15
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  amountText: {
    fontSize: 14,
    color: '#9fa8b9'
  },
  feeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6200EE'
  }
})

export default FeesInformation
