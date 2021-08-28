import { StyleSheet } from 'react-native'
import AppStyles from './AppStyles'

const styles = StyleSheet.create({
  footer: {
    backgroundColor: AppStyles.color.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  pull: {
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: AppStyles.color.secondary,
    borderRadius: 100,
    width: 100,
    height: 3
  },
  text: {
    color: AppStyles.color.white
  }
})

export default styles
