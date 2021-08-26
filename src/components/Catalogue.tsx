import React, { ReactElement, useEffect, useState } from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'
import axios from 'axios'
import { queryMetadata, QueryResult } from '../utils/aquarius'
import Asset from './Asset'
import Footer from './Footer'

export default function Catalogue(): ReactElement {
  const [data, setData] = useState<QueryResult>()
  const [page, setPage] = useState(1)

  const initialQuery = {
    offset: 9,
    page: 1,
    query: {
      query_string: {
        query: '(chainId:2021000) AND -isInPurgatory:true'
      }
    },
    sort: { created: -1 }
  }

  useEffect(() => {
    const fetch = async () => {
      const source = axios.CancelToken.source()
      const queryResult = await queryMetadata(
        {
          ...initialQuery,
          page: page
        },
        source.token
      )
      setData(queryResult)
    }
    fetch()
  }, [page])

  return (
    <>
      <FlatList
        data={data?.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Asset {...item} />}
      />
      <Footer
        page={data?.page}
        totalPages={data?.totalPages}
        setPage={setPage}
      />
    </>
  )
}
