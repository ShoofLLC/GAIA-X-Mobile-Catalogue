import { StyleSheet } from 'react-native'
import AppStyles from './AppStyles'

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppStyles.color.primary
  },
  inputContainer: {
    backgroundColor: AppStyles.color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    color: AppStyles.color.black,
    borderRadius: 5,
    height: 40,
    width: '60%',
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    marginRight: 5
  }
})

export default styles
