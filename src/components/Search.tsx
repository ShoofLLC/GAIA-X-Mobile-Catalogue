import React, { ReactElement } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
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
      offset: assetsPerPage,
      query: {
        query_string: {
          query: searchString
        }
      }
    })
  }, [search, assetsPerPage])

  return (
    <>
      <Input placeholder="Search" onInputChanged={setSearch} />
      <Input
        placeholder="Assets per page"
        onInputChanged={(number) => setAssetsPerPage(Number(number))}
      />
    </>
  )
}
