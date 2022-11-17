// // import React, { useState, useEffect } from "react";
// // import { useLocation, link } from "react-router-dom";
// // import { fire } from "../../fire";
// // import ProductsList from "../Products/ProductList/ProductList";
// // import "./Filter.css";

// // const Search = () => {
// //   const [data, setData] = useState({});

// //   const useQuery = () => {
// //     return new URLSearchParams(useLocation().search);
// //   };
// //   let query = useQuery();
// //   let search = query.get("title");

// //   useEffect(() => {
// //     searchData();
// //   }, [search]);

// //   const searchData = () => {
// //     fire
// //       .child("product")
// //       .orderByChild("title")
// //       .equalTo(search)
// //       .on("value", snapshot => {
// //         if (snapshot.val()) {
// //           const data = snapshot.val();
// //           setData(data);
// //         }
// //       });
// //   };
// //   return (
// //     <div>
// //       <ProductsList />
// //     </div>
// //   );
// // };

// // export default Search;

// // import React, { useState, useEffect } from "react";
// // import { styled, alpha } from "@mui/material/styles";
// // import InputBase from "@mui/material/InputBase";
// // import SearchIcon from "@mui/icons-material/Search";
// // import { useLocation, useSearchParams } from "react-router-dom";

// // const Search = styled("div")(({ theme }) => ({
// //   position: "relative",
// //   borderRadius: theme.shape.borderRadius,
// //   backgroundColor: alpha(theme.palette.common.white, 0.15),
// //   "&:hover": {
// //     backgroundColor: alpha(theme.palette.common.white, 0.25),
// //   },
// //   marginRight: theme.spacing(2),
// //   marginLeft: 0,
// //   width: "100%",
// //   [theme.breakpoints.up("sm")]: {
// //     marginLeft: theme.spacing(3),
// //     width: "auto",
// //   },
// // }));

// // const SearchIconWrapper = styled("div")(({ theme }) => ({
// //   padding: theme.spacing(0, 2),
// //   height: "100%",
// //   position: "absolute",
// //   pointerEvents: "none",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //   color: "inherit",
// //   "& .MuiInputBase-input": {
// //     padding: theme.spacing(1, 1, 1, 0),
// //     // vertical padding + font size from searchIcon
// //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //     transition: theme.transitions.create("width"),
// //     width: "100%",
// //     [theme.breakpoints.up("md")]: {
// //       width: "20ch",
// //     },
// //   },
// // }));

// // const LiveSearch = () => {
// //   const [searchValue, setSearchValue] = useState("");
// //   const [paramsSearch, setParamsSearch] = useSearchParams();
// //   const location = useLocation();

// //   useEffect(() => {
// //     if (location.pathname === "/list") {
// //       setParamsSearch({
// //         price_gte: +paramsSearch.get("price_gte"),
// //         price_lte: +paramsSearch.get("price_lte"),
// //         q: searchValue,
// //       });
// //       console.log(searchValue);
// //     }
// //   }, [searchValue]);

// //   return (
// //     <Search>
// //       <SearchIconWrapper>
// //         <SearchIcon />
// //       </SearchIconWrapper>
// //       <StyledInputBase
// //         placeholder="Search…"
// //         inputProps={{ "aria-label": "search" }}
// //         value={searchValue}
// //         onChange={e => setSearchValue(e.target.value)}
// //       />
// //     </Search>
// //   );
// // };

// // export default LiveSearch;

// import React, { useContext, useState } from "react";
// import { productContext } from "../../Context/ProductContextProvider";
// import ProductCard from "../Products/ProductCard/ProductCard";

// const Search = () => {
//   const { searchProducts, getSearch } = useContext(productContext);
//   const [searchValue, setSearchValue] = useState("");

//   // function handleValue() {
//   //   getSearch(searchValue);
//   //   setSearchValue("");
//   // }

//   return (
//     <div>
//       <form
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//           width: "50%",
//         }}>
//         <input
//           type="text"
//           className="inputField"
//           placeholder="Search..."
//           value={searchValue}
//           onChange={e => setSearchValue(e.target.value)}
//         />
//       </form>
//       {searchProducts ? (
//         <div className="list">
//           {searchProducts.map(item => (
//             <ProductCard item={item} key={item.id} />
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// };
// export default Search;
