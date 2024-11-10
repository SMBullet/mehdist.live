import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery, setFilteredMachines, originalMachines }) => {
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter HackTheBox machines based only on the title
    const filtered = originalMachines.filter((machine) =>
      machine.title.toLowerCase().includes(query)
    );
    setFilteredMachines(filtered);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by Title..."
        className="ml-12 p-2 bg-transparent border-b-2 border-gray-400 text-white focus:outline-none focus:border-red-400 transition-all duration-300 ease-in-out placeholder-gray-500"
        style={{ width: '250px', transition: 'width 0.4s ease' }}
        onFocus={(e) => (e.target.style.width = '300px')}
        onBlur={(e) => (e.target.style.width = '250px')}
      />
      <style jsx>{`
        input::placeholder {
          color: #b0b0b0; /* Lighter placeholder color */
        }
      `}</style>
    </div>
  );
};

export default SearchBox;
