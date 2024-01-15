import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getTracks = createApi({
  reducerPath: 'getTracks',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: 'catalog/track/all/',
      }),
      providesTags: ['Tracks'],
    }),
    getFavoritesTracks: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        headers: {
          Authorizations: 'tralala', //Bearer ${token}
        },
      }),
      providesTags: ['Tracks'],
    }),
    addFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: 'catalog/track/${id}/favorite/',
        method: 'POST',
      }),
      invalidatesTags: ['Tracks'],
    }),
    deleteFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: '/catalog/track/<id>/favorite/',
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks'],
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavoritesTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} = getTracks
export default getTracks.reducer
