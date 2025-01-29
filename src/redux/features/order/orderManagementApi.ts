import { baseApi } from "@/redux/api/baseApi";



const orderManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAddedCart: builder.query({
        //     query: (email: string | undefined) => {
        //       const params = new URLSearchParams();
        //       if (email) {
        //         params.append('email', email);
        //       }
      
        //       return {
        //         url: '/addedCarts/get-addedCart',
        //         method: 'GET',
        //         params: params,
        //       };
        //     },
        //     providesTags: ['order'],
        //     transformResponse: (response: TResponseRedux<any>) => {
        //       return {
        //         data: response?.data,
        //         meta: response?.meta
        //       };
        //     }
        //   }),
        
        createOrder: builder.mutation({
            query: (data) => ({
                url: '/orders/create-order',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['order']
        }),

    //     updateCartQuantity: builder.mutation({
    //       query: ({ email, productId, change }) => ({
    //           url: `/addedCarts/update-quantity`,
    //           method: "PATCH",
    //           body: { email, productId, change },
    //       }),
    //       invalidatesTags: ['order']
    //   }),
    //     deleteAddToCartProduct: builder.mutation({
    //         query: ({ email, productId }) => ({
    //             url: `/addedCarts/delete-addedCart?email=${email}`,
    //             method: "DELETE",
    //             body: {
    //                 productId,
    //             }
    //         }),
    //         invalidatesTags: ['order'],
    //     }),
        
    })
})

export const { useCreateOrderMutation} = orderManagementApi;