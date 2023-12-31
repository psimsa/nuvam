import { RootState } from '../store/store'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MessageModel } from '../contracts/messageModel'

export const api = createApi({
  reducerPath: 'api',
  keepUnusedDataFor: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: async (headers, { getState }) => {
      const state = getState() as RootState
      const token = state.app.user?.access_token

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['api'],
  endpoints: (builder) => ({
    getGreeting: builder.query<MessageModel, null>({
      query: () => 'hello'
    })
  })
})

export const { useGetGreetingQuery, useLazyGetGreetingQuery } = api
