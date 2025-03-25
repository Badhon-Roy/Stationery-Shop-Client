import Loading from "@/components/loading/Loading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetOrdersQuery } from "@/redux/features/order/orderManagementApi";
import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/types";
import { verifyToken } from "@/utils/verifyToken";

const ViewOrders = () => {
    const token = useAppSelector(selectCurrentToken);
    let user: TUser | null = null;
    if (token) {
        user = verifyToken(token) as TUser;
    }

    const { data: getOrders, isLoading: addedCartLoading } = useGetOrdersQuery(
        (user as TUser)?.email
    );
    if (addedCartLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="dashboardTitle">My<span className="primaryColor"> Order </span> Product</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                </TableHeader>

                {getOrders?.data?.[0]?.products?.map((product: any) => (
                    <TableBody key={product?.product?._id}>
                        <TableRow>
                            <TableCell >
                                <img style={{ borderRadius: '8px' }} className="w-[40px] h-[40px] object-cover" src={product?.product?.image} alt="" />
                            </TableCell>
                            <TableCell>{product?.product?.name}</TableCell>
                            <TableCell>{product?.product?.brand}</TableCell>
                            <TableCell>{product?.product?.category}</TableCell>
                            <TableCell className="text-center">{product?.quantity}</TableCell>
                            <TableCell className="text-center">{product?.product?.price}tk</TableCell>
                            <TableCell>
                                <span
                                    className={`text-sm font-semibold flex items-center justify-center gap-2 p-1 rounded-full 
                                        ${getOrders?.data?.[0].status === "Shipping"
                                            ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
                                            : getOrders?.data?.[0].status === "Pending"
                                                ? "bg-gradient-to-r from-[#fb5770] to-[#ff7e91] text-white"
                                                : "bg-gray-500 text-white"
                                        }`}
                                    style={{
                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                >
                                    <img
                                        className="w-[30px] md:block hidden"
                                        src={
                                            getOrders?.data?.[0].status === "Shipping"
                                                ? "https://cdn-icons-png.flaticon.com/512/5952/5952766.png"
                                                : getOrders?.data?.[0].status === "Pending"
                                                    ? "https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/clock-color-icon.png"
                                                    : "" 
                                        }
                                        alt=""
                                    />
                                    <span>
                                        {getOrders?.data?.[0].status}
                                    </span>
                                </span>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                ))}
            </Table>
        </div>
    );
};

export default ViewOrders;