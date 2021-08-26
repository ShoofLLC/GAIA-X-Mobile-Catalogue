import React, { ReactElement, useState } from 'react'
import { Button, TextInput, View } from 'react-native'

import styles from '../css/input'

export default function Input({
  placeholder,
  submit,
  onInputChanged
}: {
  placeholder: string
  submit?: string
  onInputChanged: (input: string) => void
}): ReactElement {
  const [value, setValue] = useState('')

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
      />
      <Button
        color={styles.button.backgroundColor}
        onPress={() => {
          onInputChanged(value)
        }}
        title={submit || 'Submit'}
      />
    </View>
  )
}
