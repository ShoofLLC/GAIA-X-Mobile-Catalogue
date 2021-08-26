import React, { ReactElement } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import styles from '../css/pagination'

export default function Pagination({
  page,
  totalPages,
  setPage
}: {
  page?: number
  totalPages?: number
  setPage: (page: number) => void
}): ReactElement {
  return (
    <View style={styles.pagination}>
      <TouchableHighlight
        onPress={() => {
          page && setPage(page - 1)
        }}
        disabled={page === undefined || page <= 1}
      >
        <Text style={styles.text}>{' << '}</Text>
      </TouchableHighlight>

      <Text style={styles.text}>{page}</Text>

      <TouchableHighlight
        onPress={() => {
          page && setPage(page + 1)
        }}
        disabled={
          page === undefined || totalPages === undefined || page >= totalPages
        }
      >
        <Text style={styles.text}>{' >> '}</Text>
      </TouchableHighlight>
    </View>
  )
}
