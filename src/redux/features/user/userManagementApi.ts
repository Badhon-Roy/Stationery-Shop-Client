import { baseApi } from "@/redux/api/baseApi";
import { TLoginUser, TQueryParam, TResponseRedux } from "@/types";



const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: '/users/get-user',
                    method: "GET",
                    params: params
                }
            },
            providesTags: ['user'],
            transformResponse: (response: TResponseRedux<TLoginUser[]>) => {
                return {
                    data: response?.data,
                    meta: response?.meta
                }
            }
        }),
        createUser: builder.mutation({
            query: (data) => ({
                url: '/users/create-user',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['user']
        }),
    })
})

export const { useGetAllUserQuery, useCreateUserMutation } = userManagementApi;