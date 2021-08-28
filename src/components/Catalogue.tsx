import React, { ReactElement, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
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
import styles from '../css/catalogue'

export default function Catalogue(): ReactElement {
  const [data, setData] = useState<QueryResult>()
  const [query, setQuery] = useState<SearchQuery>(defaultQuery)

  const [page, setPage] = useState(1)

  let componentIsMounted = true

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
      if (componentIsMounted) {
        setData(queryResult)
      }
    }
    fetch()
    return () => {
      componentIsMounted = false
    }
  }, [page, query])

  return (
    <View style={styles.catalogue}>
      <FlatList
        data={data?.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Asset {...item} />}
      />
      <Pagination
        page={data?.page}
        totalPages={data?.totalPages}
        setPage={setPage}
      />
      <Footer>
        <View>
          <Search onSearchQueryChanged={setQuery} />
        </View>
      </Footer>
    </View>
  )
}
