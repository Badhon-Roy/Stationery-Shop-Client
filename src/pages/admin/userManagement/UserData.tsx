import { useDeleteUserMutation, useGetAllUserQuery, useUpdateUserRoleMutation } from "@/redux/features/user/userManagementApi";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Loading from "@/components/loading/Loading";
import { useState } from "react";
import { toast } from "sonner";
const UserData = () => {
    const { data : users , isLoading} = useGetAllUserQuery(undefined)
    const [updateUserRole] = useUpdateUserRoleMutation();
    const [deleteUser] = useDeleteUserMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [itemToUpdate, setItemToUpdate] = useState(null);

    // Handle opening the modal
    const openModal = (itemId: any) => {
        setItemToDelete(itemId); // Pass the item id to delete
        setIsModalOpen(true);
    };
    const openUpdateModal = (itemId: any) => {
        setItemToUpdate(itemId); // Pass the item id to delete
        setIsUpdateModalOpen(true);
    };

    // Handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setItemToDelete(null);
    };
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setItemToUpdate(null);
    };

    // Handle the delete action
    const handleUpdate = async (role : string) => {
        const toastId = toast.loading('Updating..');
        if (itemToUpdate) {
            const userInfo = {
                userId: itemToUpdate,
                role: String(role)
            }
            const res = await updateUserRole({
                id: itemToUpdate,
                data: userInfo
            })
            console.log(res);
            if (res?.data?.success) {
                toast.success(res?.data?.message, { id: toastId });
            } else if (res?.error) {
                toast.error('Something went wrong. Please try again!', { id: toastId });
            }
            closeUpdateModal();
        }
    };
    // Handle the delete action
    const handleDelete = async () => {
        const toastId = toast.loading('Deleting..');
        if (itemToDelete) {
            const res = await deleteUser({
                id: itemToDelete
            })
            if (res?.data?.success) {
                toast.success(res?.data?.message, { id: toastId });
            } else if (res?.error) {
                toast.error('Something went wrong. Please try again!', { id: toastId });
            }
            closeModal();
        }
    };
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
             <div>
                <h2 className="dashboardTitle">View and <span className="primaryColor">Manage</span> Users</h2>
                <p className="dashboardSubtitle">Easily access and control all user details from a single dashboard.</p>
            </div>
              <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Update Role</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                {users?.data?.map(user => (
                    <TableBody key={user?._id}>
                        <TableRow>
                            <TableCell >
                                <img className="w-[40px] h-[40px] rounded-full object-cover" src={user?.photoUrl} alt="" />
                            </TableCell>
                            <TableCell>{user?.name}</TableCell>
                            <TableCell>{user?.email}</TableCell>
                            <TableCell>{user?.role}</TableCell>
                            <TableCell>
                                <button
                                    style={{ borderRadius: "8px" }}
                                    className="text-sm font-medium bg-[#fb5770] text-white hover:bg-[#e44d63] px-2 rounded-lg py-2 focus:outline-none"
                                    onClick={() => openUpdateModal(user?._id)} // Pass the correct item ID
                                >
                                    Update
                                </button>
                            </TableCell>

                            {/* Modal */}
                            {isUpdateModalOpen && itemToUpdate === user?._id && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                                    <div style={{ borderRadius: '8px' }} className="p-6 bg-white ">
                                        <h3 className="text-lg font-semibold text-center">Are you sure you want to <br /> update this user role?</h3>
                                        <div className="flex justify-between gap-4 mt-4">
                                            <button
                                                onClick={closeUpdateModal}
                                                style={{ borderRadius: '8px' }}
                                                className="px-4 py-2 text-gray-700 bg-gray-300"
                                            >
                                                No
                                            </button>
                                            <button
                                                onClick={()=>handleUpdate('admin')}
                                                style={{ borderRadius: '8px' }}
                                                className="bg-[#fb5770] text-white px-4 py-2"
                                            >
                                                As a Admin
                                            </button>
                                            <button
                                                onClick={()=>handleUpdate('user')}
                                                style={{ borderRadius: '8px' }}
                                                className="bg-[#fb5770] text-white px-4 py-2"
                                            >
                                                As a User
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <TableCell>
                                <button
                                    style={{ borderRadius: "8px" }}
                                    className="text-sm font-medium bg-[#fb5770] text-white hover:bg-[#e44d63] px-2 rounded-lg py-2 focus:outline-none"
                                    onClick={() => openModal(user?._id)} // Pass the correct item ID
                                >
                                    Delete
                                </button>
                            </TableCell>

                            {/* Modal */}
                            {isModalOpen && itemToDelete === user?._id && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                                    <div style={{ borderRadius: '8px' }} className="w-64 p-6 bg-white">
                                        <h3 className="text-lg font-semibold text-center">Are you sure you want to <br /> delete this user?</h3>
                                        <div className="flex justify-between mt-4">
                                            <button
                                                onClick={closeModal}
                                                style={{ borderRadius: '8px' }}
                                                className="px-4 py-2 text-gray-700 bg-gray-300"
                                            >
                                                No
                                            </button>
                                            <button
                                                onClick={handleDelete}
                                                style={{ borderRadius: '8px' }}
                                                className="bg-[#fb5770] text-white px-4 py-2"
                                            >
                                                Yes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </TableRow>
                    </TableBody>
                ))}
            </Table>
        </div>
    );
};

export default UserData;