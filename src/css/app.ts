import { Platform, StyleSheet } from 'react-native'
import AppStyles from './AppStyles'

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25 : 10,
    flex: 1,
    backgroundColor: AppStyles.color.black
  }
})

export default styles
