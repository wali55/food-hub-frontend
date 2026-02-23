"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/hooks";
import { User } from "@/components/initializer/UsersInitializer";
import UpdateUserStatusAlert from "./UpdateUserStatusAlert";

const Users = () => {
  const { users } = useAppSelector((state) => state.admin);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#FF5322]">Name</TableHead>
          <TableHead className="text-[#FF5322]">Email</TableHead>
          <TableHead className="text-[#FF5322]">Phone</TableHead>
          <TableHead className="text-[#FF5322]">Role</TableHead>
          <TableHead className="text-[#FF5322]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users &&
          users.length > 0 &&
          users?.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateUserStatusAlert user={user} isActive={!user.isActive} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Users;
