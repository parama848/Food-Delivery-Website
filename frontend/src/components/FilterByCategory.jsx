// import React from "react";

// const FilterByCategory = ({ categories, activeCategory, setActiveCategory }) => {
//   return (
//     <div className="hide-scrollbar
//   flex gap-6 mt-6 
//   overflow-x-auto sm:overflow-x-scroll 
//   scrollbar-hidden
//   px-2 
//   flex-nowrap sm:flex-nowrap md:flex-wrap justify-center
// ">

//       {categories.map((cat) => (
//         <div
//           key={cat.name}
//           onClick={() =>
//             setActiveCategory(activeCategory === cat.name ? null : cat.name)
//           }
//           className="flex flex-col items-center cursor-pointer"
//         >
//           {/* Circle Image */}
//           <div
//             className={`w-16 sm:w-16 lg:w-28 md:w-16 h-auto rounded-full border overflow-hidden flex items-center justify-center
//               ${
//                 activeCategory === cat.name
//                   ? "border-green-500 ring-2 ring-green-300 p-1"
//                   : "border-gray-400"
//               }
//             `}
//           >
//             <img
//               src={cat.image}
//               alt={cat.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Category Name */}
//           <p
//             className={`text-sm mt-1 ${
//               activeCategory === cat.name
//                 ? "text-green-600 font-semibold"
//                 : "text-gray-600"
//             }`}
//           >
//             {cat.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterByCategory;

import React from "react";

const FilterByCategory = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div
      className="
        hide-scrollbar
        mt-6
        flex
        gap-5
        overflow-x-auto
        px-4
        pb-3
        md:justify-center
      "
    >
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() =>
            setActiveCategory(
              activeCategory === cat.name
                ? null
                : cat.name
            )
          }
          className="flex flex-col items-center cursor-pointer flex-shrink-0"
        >
          {/* Category Image */}

          <div
            className={`w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border overflow-hidden flex items-center justify-center transition-all duration-300 ${
              activeCategory === cat.name
                ? "border-green-500 ring-2 ring-green-300 p-1"
                : "border-gray-400"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Category Name */}

          <p
            className={`text-sm mt-2 whitespace-nowrap transition-colors duration-300 ${
              activeCategory === cat.name
                ? "text-green-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            {cat.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilterByCategory;