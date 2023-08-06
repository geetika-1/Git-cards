import React, { useState } from 'react';
import UserCard from './components/UserCard';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        // console.log(response)
        const data = await response.json();
       console.log(data)
        setUserData(data);
      } else {
        console.error('User not found');
        setUserData(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserData(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#051d4d]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <label className="block font-semibold mb-2">Enter GitHub Username:</label>
          <input
            type="text"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Get User Info
          </button>
        </form>

        {userData && <UserCard userData={userData} />}
      </div>
    </div>
 

  );
};

export default App;
