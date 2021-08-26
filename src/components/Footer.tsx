import React, { ReactElement, ReactNode, useRef } from 'react'
import BottomSheet from 'reanimated-bottom-sheet'

export default function Footer({
  children
}: {
  children: ReactNode
}): ReactElement {
  const sheetRef = useRef<BottomSheet>(null)

  const renderContent = () => {
    return children
  }

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={['40%', '1%']}
      initialSnap={1}
      borderRadius={10}
      renderContent={renderContent}
      enabledContentTapInteraction={false}
    />
  )
}
