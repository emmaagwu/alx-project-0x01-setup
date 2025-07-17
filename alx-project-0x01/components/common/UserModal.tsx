// components/common/UserModal.tsx

import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // handle nested fields
    if (name.includes("address.") || name.includes("geo.") || name.includes("company.")) {
      const [outer, inner] = name.split(".");
      setUser((prevUser) => ({
        ...prevUser,
        [outer]: {
          ...prevUser[outer as keyof typeof prevUser],
          [inner]: value,
        },
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="input" />
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="input" />
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="input" />
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="input" />
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="input" />

          <input name="address.street" value={user.address.street} onChange={handleChange} placeholder="Street" className="input" />
          <input name="address.suite" value={user.address.suite} onChange={handleChange} placeholder="Suite" className="input" />
          <input name="address.city" value={user.address.city} onChange={handleChange} placeholder="City" className="input" />
          <input name="address.zipcode" value={user.address.zipcode} onChange={handleChange} placeholder="Zipcode" className="input" />

          <input name="geo.lat" value={user.address.geo.lat} onChange={handleChange} placeholder="Latitude" className="input" />
          <input name="geo.lng" value={user.address.geo.lng} onChange={handleChange} placeholder="Longitude" className="input" />

          <input name="company.name" value={user.company.name} onChange={handleChange} placeholder="Company Name" className="input" />
          <input name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" className="input" />
          <input name="company.bs" value={user.company.bs} onChange={handleChange} placeholder="BS" className="input" />

          <div className="col-span-full flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
