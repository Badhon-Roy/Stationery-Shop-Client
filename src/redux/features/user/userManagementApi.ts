import { baseApi } from "@/redux/api/baseApi";



const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: '/users/get-user',
                method: "GET"
            })
        })
    })
})

export const { useGetAllUserQuery } = userManagementApi;