import { StyleSheet } from 'react-native'
import AppStyles from './AppStyles'

const styles = StyleSheet.create({
  header: {
    padding: 20
  },
  title: {
    textAlign: 'center',
    color: AppStyles.color.white,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    textAlign: 'center',
    color: AppStyles.color.white,
    marginTop: 10
  }
})

export default styles
