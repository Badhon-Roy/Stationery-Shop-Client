import { baseApi } from "@/redux/api/baseApi";
import { TProduct, TQueryParam, TResponseRedux } from "@/types";



const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // product related

        // get all product
        getAllProducts: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: '/products/get-product',
                    method: "GET",
                    params: params
                }
            },
            providesTags: ['product'],
            transformResponse: (response: TResponseRedux<TProduct[]>) => {
                return {
                    data: response?.data,
                    meta: response?.meta
                }
            }
        }),

        // get single product
        getSingleProduct: builder.query({
            query: (args) => ({
                    url: `/products/get-product/${args?.productId}`,
                    method: "GET"
            }),
            providesTags: ['product'],
            transformResponse: (response: TResponseRedux<TProduct>) => {
                return {
                    data: response?.data,
                    meta: response?.meta
                }
            }
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products/create-product',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['product']
        }),

        updateProduct: builder.mutation({
            query: (args) => ({
                url: `/products/update-product/${args.id}`,
                method: "PUT",
                body: args.data
            }),
            invalidatesTags: ['product']
        }),
    })
})

export const { useGetAllProductsQuery, useAddProductMutation, useUpdateProductMutation, useGetSingleProductQuery } = productManagementApi;