import React, { ReactElement } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { View } from 'react-native'
import { defaultQuery, SearchQuery } from '../utils/aquarius'
import Input from './Input'

export default function Search({
  onSearchQueryChanged
}: {
  onSearchQueryChanged: (query: SearchQuery) => void
}): ReactElement {
  const [search, setSearch] = useState('')
  const [assetsPerPage, setAssetsPerPage] = useState(9)

  useEffect(() => {
    const searchString = `${search} ${search && 'AND '}${
      defaultQuery.query.query_string.query
    }`
    onSearchQueryChanged({
      ...defaultQuery,
      offset: assetsPerPage === 0 ? 9 : assetsPerPage,
      query: {
        query_string: {
          query: searchString
        }
      }
    })
  }, [search, assetsPerPage])

  return (
    <View>
      <Input placeholder="Search" onInputChanged={setSearch} submit="Search" />
      <Input
        placeholder="Assets per page"
        onInputChanged={(number) => setAssetsPerPage(Number(number))}
      />
    </View>
  )
}
