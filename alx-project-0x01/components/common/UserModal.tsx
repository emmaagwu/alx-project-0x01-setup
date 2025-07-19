// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";


const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const path = name.split(".");
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [path[1]]: value,
        },
      }));
    } else if (name.includes("geo.")) {
      const path = name.split(".");
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [path[1]]: value,
          },
        },
      }));
    } else if (name.includes("company.")) {
      const path = name.split(".");
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [path[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {[
            { label: "Name", name: "name" },
            { label: "Username", name: "username" },
            { label: "Email", name: "email" },
            { label: "Phone", name: "phone" },
            { label: "Website", name: "website" },
            { label: "Street", name: "address.street" },
            { label: "Suite", name: "address.suite" },
            { label: "City", name: "address.city" },
            { label: "Zipcode", name: "address.zipcode" },
            { label: "Latitude", name: "geo.lat" },
            { label: "Longitude", name: "geo.lng" },
            { label: "Company Name", name: "company.name" },
            { label: "Catch Phrase", name: "company.catchPhrase" },
            { label: "BS", name: "company.bs" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
            </div>
          ))}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
