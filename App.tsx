import React, { ReactElement } from 'react'
import { SafeAreaView, View } from 'react-native'
import Catalogue from './src/components/Catalogue'
import Header from './src/components/Header'
import styles from './src/css/app'

export default function App(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Catalogue />
    </SafeAreaView>
  )
}
