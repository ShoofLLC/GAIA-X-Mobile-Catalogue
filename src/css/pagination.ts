import { StyleSheet } from 'react-native'
import AppStyles from './AppStyles'

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    height: 80,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    backgroundColor: AppStyles.color.black
  },
  button: {
    color: AppStyles.color.primary,
    fontSize: 16
  },
  page: {
    color: AppStyles.color.white,
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15
  }
})

export default styles
