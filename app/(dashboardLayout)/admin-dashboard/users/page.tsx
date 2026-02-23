import { getAllUsers } from "@/actions/admin.action"
import UsersInitializer from "@/components/initializer/UsersInitializer";
import Users from "@/components/modules/admin-page/Users";

const UsersPage = async () => {
  const {data: usersData} = await getAllUsers();
  return (
    <div className="w-full">
      <div className="p-4 flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">All Users</h1>
      </div>
      <UsersInitializer users={usersData} />
      <div className="m-4 border border-neutral-200 rounded-md">
        <Users />
      </div>
    </div>
  )
}

export default UsersPage