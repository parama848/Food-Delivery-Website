// // import React, { useState, useContext } from "react";
// // import { food_list, menu_list } from "../assets/assets";
// // import FilterByCategory from "../components/FilterByCategory";
// // import SearchBar from "./SearchBar";
// // import Title from "./Title";
// // import Filter from "./Filter";
// // import { FoodContext } from "../context/CartContext";

// // const FoodItems = () => {
// //   const [activeCategory, setActiveCategory] = useState(null);
// //   const [searchText, setSearchText] = useState("");
// //   const [sortOrder, setSortOrder] = useState("");
// //   //cart
// //   const { addToCart } = useContext(FoodContext);

// //   const categories = menu_list.map((item) => ({
// //     name: item.menu_name,
// //     image: item.menu_image,
// //   }));

// //   let finalList = [...food_list];

// //   // 1. Search Filter
// //   finalList = finalList.filter((food) =>
// //     food.name.toLowerCase().includes(searchText.toLowerCase())
// //   );

// //   // 2. Category Filter
// //   if (activeCategory) {
// //     finalList = finalList.filter((food) => food.category === activeCategory);
// //   }

// //   // 3. Sorting Filter
// //   if (sortOrder === "high") {
// //     finalList.sort((a, b) => b.price - a.price);
// //   } else if (sortOrder === "low") {
// //     finalList.sort((a, b) => a.price - b.price);
// //   }

// //   return (
// //     <>
// //       <SearchBar searchText={searchText} setSearchText={setSearchText} />

// //       <div className="flex items-center mt-10 justify-between mx-32 sm:mx-10">
// //         <Title text1="Food" text2="Menu" />
// //         <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
// //       </div>

// //       <div className="max-w-6xl px-2 py-10 mx-auto">
// //         <FilterByCategory
// //           categories={categories}
// //           activeCategory={activeCategory}
// //           setActiveCategory={setActiveCategory}
// //         />

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10">
// //           {finalList.length > 0 ? (
// //             finalList.map((food) => (
// //               <div
// //                 key={food._id}
// //                 className="px-3 py-3 rounded-lg mx-2 my-4 border border-gray-200 shadow transition-transform duration-300 hover:scale-105"
// //               >
// //                 <div className="overflow-hidden rounded-lg">
// //                   <img
// //                     src={food.image}
// //                     alt={food.name}
// //                     className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
// //                   />
// //                 </div>

// //                 <h1 className="text-xl py-2 font-bold">{food.name}</h1>
// //                 <p className="text-gray-600 text-sm">{food.description}</p>

// //                 <div className="flex justify-between mt-2">
// //                   <span className="text-green-600 font-bold">
// //                     ₹{food.price}
// //                   </span>
// //                   <span className="text-gray-500 text-sm font-black">
// //                     {food.category}
// //                   </span>
// //                 </div>

// //                 {/* ✅ Simple add to cart */}
// //                 <button
// //   className="w-full mt-3 bg-green-500 text-white rounded-lg py-2"
// //   onClick={() =>
// //     addToCart({
// //       id: String(food._id),     // <-- important fix
// //       name: food.name,
// //       image: food.image,
// //       price: Number(food.price),
// //       category: food.category,
// //     })
// //   }
// // >
// //   Add to Cart
// // </button>

// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center text-gray-500 mt-10 text-lg">
// //               No items found
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default FoodItems;
// import React, { useState, useContext } from "react";
// import { food_list, menu_list } from "../assets/assets";
// import FilterByCategory from "../components/FilterByCategory";
// import SearchBar from "./SearchBar";
// import Title from "./Title";
// import Filter from "./Filter";
// import { CartContext } from "../context/CartContext";

// const FoodItems = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const [sortOrder, setSortOrder] = useState("");

//   // ✅ cart
//   const { addToCart } = useContext(CartContext);

//   const categories = menu_list.map((item) => ({
//     name: item.menu_name,
//     image: item.menu_image,
//   }));

//   let finalList = [...food_list];

//   // 1️⃣ Search Filter
//   finalList = finalList.filter((food) =>
//     food.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   // 2️⃣ Category Filter
//   if (activeCategory) {
//     finalList = finalList.filter(
//       (food) => food.category === activeCategory
//     );
//   }

//   // 3️⃣ Sorting Filter
//   if (sortOrder === "high") {
//     finalList.sort((a, b) => b.price - a.price);
//   } else if (sortOrder === "low") {
//     finalList.sort((a, b) => a.price - b.price);
//   }

//   return (
//     <>
//       <SearchBar searchText={searchText} setSearchText={setSearchText} />

//       <div className="flex items-center mt-10 justify-between mx-32 sm:mx-10">
//         <Title text1="Food" text2="Menu" />
//         <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
//       </div>

//       <div className="max-w-6xl px-2 py-10 mx-auto">
//         <FilterByCategory
//           categories={categories}
//           activeCategory={activeCategory}
//           setActiveCategory={setActiveCategory}
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10">
//           {finalList.length > 0 ? (
//             finalList.map((food) => (
//               <div
//                 key={food._id}
//                 className="px-3 py-3 rounded-lg mx-2 my-4 border border-gray-200 shadow transition-transform duration-300 hover:scale-105"
//               >
//                 <div className="overflow-hidden rounded-lg">
//                   <img
//                     src={food.image}
//                     alt={food.name}
//                     className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
//                   />
//                 </div>

//                 <h1 className="text-xl py-2 font-bold">{food.name}</h1>
//                 <p className="text-gray-600 text-sm">{food.description}</p>

//                 <div className="flex justify-between mt-2">
//                   <span className="text-green-600 font-bold">
//                     ₹{food.price}
//                   </span>
//                   <span className="text-gray-500 text-sm font-black">
//                     {food.category}
//                   </span>
//                 </div>

//                 {/* ✅ Add to Cart */}
//                 <button
//                   className="w-full mt-3 bg-green-500 text-white rounded-lg py-2"
//                   onClick={() =>
//                     addToCart({
//                       id: String(food._id),
//                       name: food.name,
//                       image: food.image,
//                       price: Number(food.price),
//                       category: food.category,
//                     })
//                   }
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 mt-10 text-lg">
//               No items found
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodItems;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import FilterByCategory from "../components/FilterByCategory";
import SearchBar from "./SearchBar";
import Title from "./Title";
import Filter from "./Filter";
import { CartContext } from "../context/CartContext";
import { menu_list } from "../assets/assets";

const FoodItems = () => {
  const [foods, setFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ cart
  const { addToCart } = useContext(CartContext);

  // Categories (from menu_list)
  const categories = menu_list.map((item) => ({
    name: item.menu_name,
    image: item.menu_image,
  }));

  // 🔥 Fetch foods from backend
  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/products"
      );

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

  // 🔍 Filters
  let finalList = [...foods];

  // 1️⃣ Search
  finalList = finalList.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // 2️⃣ Category
  if (activeCategory) {
    finalList = finalList.filter(
      (food) => food.category === activeCategory
    );
  }

  // 3️⃣ Sort
  if (sortOrder === "high") {
    finalList.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "low") {
    finalList.sort((a, b) => a.price - b.price);
  }

  if (loading) {
    return (
      <p className="text-center mt-10 text-lg">
        Loading foods...
      </p>
    );
  }

  return (
    <>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <div className="flex items-center mt-10 justify-between mx-32 sm:mx-10">
        <Title text1="Food" text2="Menu" />
        <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <div className="max-w-6xl px-2 py-10 mx-auto">
        <FilterByCategory
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10">
          {finalList.length > 0 ? (
            finalList.map((food) => (
              <div
                key={food._id}
                className="px-3 py-3 rounded-lg mx-2 my-4 border border-gray-200 shadow transition-transform duration-300 hover:scale-105"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={`http://localhost:4000${food.image}`}
                    alt={food.name}
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <h1 className="text-xl py-2 font-bold">
                  {food.name}
                </h1>
                <p className="text-gray-600 text-sm">
                  {food.description}
                </p>

                <div className="flex justify-between mt-2">
                  <span className="text-green-600 font-bold">
                    ₹{food.price}
                  </span>
                  <span className="text-gray-500 text-sm font-black">
                    {food.category}
                  </span>
                </div>

                {/* ✅ Add to Cart */}
                <button
                  className="w-full mt-3 bg-green-500 text-white rounded-lg py-2"
                  onClick={() =>
                    addToCart({
                      id: String(food._id),
                      name: food.name,
                      image: food.image,
                      price: Number(food.price),
                      category: food.category,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10 text-lg">
              No items found
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodItems;
