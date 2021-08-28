import { StyleSheet } from 'react-native'
import AppStyles from './AppStyles'

const styles = StyleSheet.create({
  asset: {
    backgroundColor: AppStyles.color.white,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  // Flatlist Deck
  headline: {
    color: AppStyles.color.black,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0
  },
  created: {
    color: AppStyles.color.secondary
  },
  author: {
    fontWeight: 'bold'
  },
  description: {
    marginTop: 5,
    color: AppStyles.color.black
  }
})

export default styles
