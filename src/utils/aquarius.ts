import axios, { CancelToken, AxiosResponse } from 'axios'
import { metadataCacheUri } from '../../app.config'

export interface DDO {
  id: string
  created: string
  updated: string
  dataToken: string
  service: any[]
  name: string
}

export interface QueryResult {
  results: DDO[]
  page: number
  totalPages: number
  totalResults: number
}

export interface SearchQuery {
  offset?: number
  page?: number
  query: {
    query_string?: {
      [property: string]: string | number | string[] | number[] | boolean
    }
  }
  sort?: {
    [jsonPath: string]: number
  }
}

export const defaultQuery = {
  offset: 9,
  page: 1,
  query: {
    query_string: {
      query: '(chainId:2021000) AND -isInPurgatory:true'
    }
  },
  sort: { created: -1 }
}

export function transformQueryResult(
  {
    results,
    page,
    total_pages: totalPages,
    total_results: totalResults
  }: any = {
    result: [],
    page: 0,
    total_pages: 0,
    total_results: 0
  }
): QueryResult {
  return {
    results: (results || []).map((ddo: DDO) => ddo),
    page,
    totalPages,
    totalResults
  }
}

export async function queryMetadata(
  query: SearchQuery,
  cancelToken: CancelToken
): Promise<QueryResult> {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${metadataCacheUri}/api/v1/aquarius/assets/ddo/query`,
      { ...query, cancelToken }
    )

    if (!response || response.status !== 200 || !response.data) return

    return transformQueryResult(response.data)
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(error.message)
    } else {
      console.error(error.message)
    }
  }
}
