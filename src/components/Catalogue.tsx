import React, { ReactElement, useEffect, useState } from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'
import axios from 'axios'
import {
  defaultQuery,
  queryMetadata,
  QueryResult,
  SearchQuery
} from '../utils/aquarius'
import Asset from './Asset'
import Footer from './Footer'
import Pagination from './Pagination'
import Search from './Search'

export default function Catalogue(): ReactElement {
  const [data, setData] = useState<QueryResult>()
  const [query, setQuery] = useState<SearchQuery>(defaultQuery)

  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetch = async () => {
      const source = axios.CancelToken.source()
      const queryResult = await queryMetadata(
        {
          ...query,
          page: page
        },
        source.token
      )
      setData(queryResult)
    }
    fetch()
  }, [page, query])

  return (
    <>
      <FlatList
        data={data?.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Asset {...item} />}
      />
      <Footer>
        <Pagination
          page={data?.page}
          totalPages={data?.totalPages}
          setPage={setPage}
        />
        <Search onSearchQueryChanged={setQuery} />
      </Footer>
    </>
  )
}
