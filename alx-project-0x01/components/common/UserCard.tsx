import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">
        📧 <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600 mb-2">
        📞 <span className="font-medium">Phone:</span> {phone}
      </p>
      <p className="text-gray-600 mb-2">
        🌐 <span className="font-medium">Website:</span> <a href={`https://${website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{website}</a>
      </p>
      <p className="text-gray-600 mb-2">
        🏠 <span className="font-medium">Address:</span> {address.suite}, {address.street}, {address.city}, {address.zipcode}
      </p>
      <p className="text-gray-600">
        🏢 <span className="font-medium">Company:</span> {company.name} - <em>{company.catchPhrase}</em>
      </p>
    </div>
  );
};

export default UserCard;
