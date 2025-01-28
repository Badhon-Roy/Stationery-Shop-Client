import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux } from "@/types";



const addedCartManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // product related

        // get all product
        // getAllProducts: builder.query({
        //     query: (args) => {
        //         const params = new URLSearchParams();
        //         if (args) {
        //             args.forEach((item: TQueryParam) => {
        //                 params.append(item.name, item.value as string)
        //             })
        //         }

        //         return {
        //             url: '/products/get-product',
        //             method: "GET",
        //             params: params
        //         }
        //     },
        //     providesTags: ['product'],
        //     transformResponse: (response: TResponseRedux<any>) => {
        //         return {
        //             data: response?.data,
        //             meta: response?.meta
        //         }
        //     }
        // }),


        getAddedCart: builder.query({
            query: (email: string | undefined) => {
              const params = new URLSearchParams();
              if (email) {
                params.append('email', email);
              }
      
              return {
                url: '/addedCarts/get-addedCart',
                method: 'GET',
                params: params,
              };
            },
            providesTags: ['addedCart'],
            transformResponse: (response: TResponseRedux<any>) => {
              return {
                data: response?.data,
                meta: response?.meta
              };
            }
          }),



        addToCartProduct: builder.mutation({
            query: (data) => ({
                url: '/addedCarts/add-cart',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['addedCart']
        }),

        deleteAddToCartProduct: builder.mutation({
            query: (args) => ({
                url: `/addedCarts/delete-addedCart/${args.id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['addedCart']
        }),
    })
})

export const { useGetAddedCartQuery ,useAddToCartProductMutation , useDeleteAddToCartProductMutation} = addedCartManagementApi;