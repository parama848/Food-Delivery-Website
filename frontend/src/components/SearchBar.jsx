import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="flex items-center gap-2 justify-center mt-14 relative w-full">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search food..."
        className="w-[70%] sm:w-[50%] px-4 py-2 outline-none rounded-full border border-gray-800"
      />

      {/* <SearchIcon className="cursor-pointer absolute right-[17%] sm:right-[26%] md:right-[30%] lg:right-[33%] top-[50%] -translate-y-1/2" /> */}
    </div>
  );
};

export default SearchBar;
