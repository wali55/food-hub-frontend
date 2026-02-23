"use client";

import { setUsers } from "@/features/admin/adminSlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  isActive: false;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

const UsersInitializer = ({ users }: { users: User[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUsers(users));
  }, [users]);

  return <div></div>;
};

export default UsersInitializer;
