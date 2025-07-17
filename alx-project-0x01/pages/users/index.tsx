import React, { useState } from "react";
import { UserData, UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([newUserWithId, ...users]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="flex justify-between mb-8 items-center">
        <h1 className="text-3xl font-bold text-gray-800">User Directory</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
        >
          Add User
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;