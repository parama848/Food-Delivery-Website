import React from 'react'

const Filter = ({ sortOrder, setSortOrder }) => {
  return (
    <div>
      <select
        className="px-3 py-2 outline-none border border-gray-600 rounded text-sm sm:text-xs"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="high">High to Low</option>
        <option value="low">Low to High</option>
      </select>
    </div>
  )
}

export default Filter
