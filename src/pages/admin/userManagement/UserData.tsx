import { useGetAllUserQuery } from "@/redux/features/user/userManagementApi";

const UserData = () => {
    const { data } = useGetAllUserQuery(undefined)
    console.log(data);
    return (
        <div>
            <h2>This is UserData page</h2>
        </div>
    );
};

export default UserData;