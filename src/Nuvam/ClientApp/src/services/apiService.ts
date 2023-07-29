import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MessageModel } from '../contracts/messageModel'

export const api = createApi({
    reducerPath: 'api',
    keepUnusedDataFor: 30,
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['api'],
    endpoints: (builder) => ({
        getGreeting: builder.query<MessageModel, null>({
            query: () => 'hello'
        })
    })
})

export const { useGetGreetingQuery, useLazyGetGreetingQuery } = api