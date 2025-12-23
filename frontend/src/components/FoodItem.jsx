import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import FilterByCategory from "../components/FilterByCategory";
import SearchBar from "./SearchBar";
import { CartContext } from "../context/CartContext";
import { menu_list } from "../assets/assets";

const FoodItems = () => {
  const [foods, setFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { addToCart } = useContext(CartContext);

  // Categories
  const categories = menu_list.map((item) => ({
    name: item.menu_name,
    image: item.menu_image,
  }));

  // Fetch foods
  const fetchFoods = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/products`);
      if (res.data.success) {
        setFoods(res.data.products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Filters
  let finalList = [...foods];

  // Search
  finalList = finalList.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Category
  if (activeCategory) {
    finalList = finalList.filter(
      (food) => food.category === activeCategory
    );
  }

  // Sort
  if (sortOrder === "high") {
    finalList.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "low") {
    finalList.sort((a, b) => a.price - b.price);
  }

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600 text-lg">
        Loading foods...
      </p>
    );
  }

  return (
    <>
      {/* SEARCH */}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {/* TITLE + SORT (JUSTIFY BETWEEN, SMALL SIZE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-semibold">
            <span className="text-gray-800">Food </span>
            <span className="text-green-600">Menu</span>
          </h2>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="
              text-sm
              border border-gray-300
              rounded-md
              px-3 py-1.5
              bg-white
              outline-none
              focus:ring-2 focus:ring-green-400
            "
          >
            <option value="">Sort</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* CATEGORY FILTER */}
        <FilterByCategory
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* FOOD GRID */}
        <div
          className="
            grid gap-6 mt-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {finalList.length > 0 ? (
            finalList.map((food) => (
              <div
                key={food._id}
                className="
                  bg-white
                  border border-gray-200
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={`http://localhost:4000${food.image}`}
                    alt={food.name}
                    className="
                      w-full h-44
                      object-cover
                      transition-transform
                      duration-300
                      hover:scale-110
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {food.name}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {food.description}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-green-600 font-bold">
                      ₹{food.price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {food.category}
                    </span>
                  </div>

                  {/* ADD TO CART */}
                  <button
                    onClick={() =>
                      addToCart({
                        id: String(food._id),
                        name: food.name,
                        image: food.image,
                        price: Number(food.price),
                        category: food.category,
                      })
                    }
                    className="
                      w-full mt-4
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      py-2.5
                      rounded-lg
                      transition
                    "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No items found
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodItems;

// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import FilterByCategory from "../components/FilterByCategory";
// import SearchBar from "./SearchBar";
// import { CartContext } from "../context/CartContext";
// import { menu_list } from "../assets/assets";

// const FoodItems = () => {
//   const [foods, setFoods] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [loading, setLoading] = useState(true);

//   const { addToCart } = useContext(CartContext);

//   // ✅ BACKEND URL (from Vercel env)
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   // Categories
//   const categories = menu_list.map((item) => ({
//     name: item.menu_name,
//     image: item.menu_image,
//   }));

//   // Fetch foods
//   const fetchFoods = async () => {
//     try {
//       const res = await axios.get(`${backendUrl}/api/products`);
//       if (res.data.success) {
//         setFoods(res.data.products);
//       }
//     } catch (error) {
//       console.error("Failed to fetch foods:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   // Filters
//   let finalList = [...foods];

//   // Search
//   finalList = finalList.filter((food) =>
//     food.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   // Category
//   if (activeCategory) {
//     finalList = finalList.filter(
//       (food) => food.category === activeCategory
//     );
//   }

//   // Sort
//   if (sortOrder === "high") {
//     finalList.sort((a, b) => b.price - a.price);
//   } else if (sortOrder === "low") {
//     finalList.sort((a, b) => a.price - b.price);
//   }

//   if (loading) {
//     return (
//       <p className="text-center mt-10 text-gray-600 text-lg">
//         Loading foods...
//       </p>
//     );
//   }

//   return (
//     <>
//       {/* SEARCH */}
//       <SearchBar
//         searchText={searchText}
//         setSearchText={setSearchText}
//       />

//       {/* TITLE + SORT */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg sm:text-xl font-semibold">
//             <span className="text-gray-800">Food </span>
//             <span className="text-green-600">Menu</span>
//           </h2>

//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white outline-none focus:ring-2 focus:ring-green-400"
//           >
//             <option value="">Sort</option>
//             <option value="high">High to Low</option>
//             <option value="low">Low to High</option>
//           </select>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
//         {/* CATEGORY FILTER */}
//         <FilterByCategory
//           categories={categories}
//           activeCategory={activeCategory}
//           setActiveCategory={setActiveCategory}
//         />

//         {/* FOOD GRID */}
//         <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {finalList.length > 0 ? (
//             finalList.map((food) => (
//               <div
//                 key={food._id}
//                 className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
//               >
//                 {/* IMAGE */}
//                 <div className="overflow-hidden rounded-t-xl">
//                   <img
//                     src={`${backendUrl}${food.image}`}
//                     alt={food.name}
//                     className="w-full h-44 object-cover transition-transform duration-300 hover:scale-110"
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">
//                     {food.name}
//                   </h3>

//                   <p className="text-sm text-gray-600 line-clamp-2 mt-1">
//                     {food.description}
//                   </p>

//                   <div className="flex justify-between items-center mt-3">
//                     <span className="text-green-600 font-bold">
//                       ₹{food.price}
//                     </span>
//                     <span className="text-xs text-gray-500 font-medium">
//                       {food.category}
//                     </span>
//                   </div>

//                   {/* ADD TO CART */}
//                   <button
//                     onClick={() =>
//                       addToCart({
//                         id: String(food._id),
//                         name: food.name,
//                         image: food.image,
//                         price: Number(food.price),
//                         category: food.category,
//                       })
//                     }
//                     className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg transition"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-500 text-lg">
//               No items found
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodItems;
