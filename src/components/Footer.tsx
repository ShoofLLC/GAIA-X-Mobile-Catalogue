import React, { ReactElement, ReactNode, useRef, useState } from 'react'
import { View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import BottomSheet from 'reanimated-bottom-sheet'
import styles from '../css/footer'

export default function Footer({
  children
}: {
  children: ReactNode
}): ReactElement {
  const sheetRef = useRef<BottomSheet>(null)
  const [snap, setSnap] = useState(1)

  const renderContent = () => {
    return (
      <View style={styles.footer}>
        <TouchableWithoutFeedback
          onPress={() => {
            setSnap(snap ? 0 : 1)
            sheetRef.current?.snapTo(snap)
          }}
        >
          <View style={styles.pull}></View>
        </TouchableWithoutFeedback>
        {children}
      </View>
    )
  }

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[200, 40]}
      initialSnap={1}
      borderRadius={10}
      renderContent={renderContent}
      enabledContentTapInteraction={false}
    />
  )
}
