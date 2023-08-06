import React from 'react';

const UserCard = ({ userData }) => {
  const { avatar_url, login, name, public_repos, public_gists, created_at } = userData;

  return (
    <div className="max-w-md flex items-center flex-col mt-3 mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
      <img className="shadow rounded-full max-w-full h-40 align-middle border-none" src={avatar_url} alt={`${login}'s avatar`} />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600 font-semibold">@{login}</p>
        <p className="mt-2 font-semibold">Public Repos: {public_repos}</p>
        <p className='font-semibold'>Public Gists: {public_gists}</p>
        <p className='font-semibold'>Profile Created: {new Date(created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default UserCard;
