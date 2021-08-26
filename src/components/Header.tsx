import React, { ReactElement } from 'react'
import { Alert, Linking, Text, TouchableHighlight } from 'react-native'
import { title, tagline, portalUri } from '../../app.config'
import styles from '../css/header'

export default function Header(): ReactElement {
  return (
    <>
      <Text style={styles.heading}>{title}</Text>
      <TouchableHighlight
        onPress={() =>
          Alert.alert(
            'Open Portal',
            'Leave the App and navigate to the MVG Portal?',
            [
              {
                text: 'Yes',
                onPress: () => Linking.openURL(portalUri)
              },
              { text: 'No' }
            ]
          )
        }
      >
        <Text style={{ color: 'white' }}>{tagline}</Text>
      </TouchableHighlight>
    </>
  )
}
