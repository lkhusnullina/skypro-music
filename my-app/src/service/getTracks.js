import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getTracks = createApi({
    reducerPath: 'getTracks',
    baseQuery: fetchBaseQuery({
            baseUrl: 'https://skypro-music-api.skyeng.tech/'
        }
    ),
     endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => ({
                url: 'catalog/track/all/'
            })
        }),
        getFavoritesTracks: builder.query({
            query: () => ({
                url: 'catalog/track/favorite/all/',
                headers: {
                    Authorizations: 'tralala' //Bearer ${token}
                }
            })
        })
     })   
})

export const {useGetAllTracksQuery, useGetFavoritesTracksQuery} = getTracks;
export default getTracks.reducer;