import React, { createContext, useReducer } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

const INIT_STATE = {
  product: [],
  productDetails: null,
  productsDetails: {},
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...prevState, product: action.payload };
    case "GET_READPRODUCT":
      return { ...prevState, readProduct: action.payload };
    case "GET_ONE_READPRODUCT":
      return { ...prevState, productDetails: action.payload };
    case "GET_PRODUCTS_DETAILS":
      return { ...prevState, productsDetails: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const db = getFirestore();

  const productCollection = collection(db, "products");

  // console.log(db);

  // Render //
  const getProduct = async () => {
    const data = await getDocs(productCollection);
    const productArr = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    // console.log(data);
    dispatch({
      type: "GET_PRODUCT",
      payload: productArr,
    });
  };

  // Details //

  const getProductsDetails = async id => {
    const data = await getDocs(productCollection);
    let productsDetails = {};
    data.docs.forEach(doc =>
      doc.id === id ? (productsDetails = doc.data()) : null
    );
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: productsDetails,
    });
  };

  // ! ====== CREATE START =======

  async function addProduct(newProduct) {
    try {
      await addDoc(collection(db, "products"), newProduct);
    } catch (e) {
      console.log(e);
    }
  }

  // ! ====== CREATE FINISH =======

  // ! ====== READ START ======

  async function readProduct() {
    try {
      const { docs } = await getDocs(collection(db, "products"));
      const data = docs.map(item => {
        return { ...item.data(), id: item.id };
      });
      dispatch({
        type: "GET_READPRODUCT",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // ! ====== READ FINISH ======

  // ? ===== readOneProduct Start =====

  async function readOneProduct(id) {
    try {
      const oneDoc = doc(db, "products", id);
      const data = await getDoc(oneDoc);
      const obj = { ...data.data(), id: data.id };
      dispatch({
        type: "GET_ONE_READPRODUCT",
        payload: obj,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // ? ===== readOneProduct Finish =====

  // ! ====== DELETE START ======

  async function deleteProduct(id) {
    try {
      const oneDoc = doc(db, "products", id);
      await deleteDoc(oneDoc);
      navigate("/list");
      readOneProduct();
    } catch (e) {
      console.log(e);
    }
  }

  // ! ====== DELETE FINISH ======

  // ! ====== UPDATE FINISH ======

  async function editProduct(id, editedObj) {
    try {
      const oneDoc = doc(db, "products", id);
      await updateDoc(oneDoc, editedObj);
      navigate(`/details/${id}`);
      readProduct();
    } catch (e) {
      console.log(e);
    }
  }

  // ! ====== UPDATE FINISH ======

  // Filter

  const filProducts = async newFilter => {
    try {
      const data = await getDocs(productCollection);
      const filterArr = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filProductArr = filterArr.filter(
        elem => elem.category === newFilter
      );
      dispatch({
        type: "GET_PRODUCT",
        payload: filProductArr,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Search

  async function getSearch(searchVal) {
    console.log(searchVal);
    if (searchVal.length > 0) {
      let searchValue = searchVal.toLowerCase();
      const { docs } = await getDocs(collection(db, "products"));
      const data = docs.map(item => {
        return { ...item.data(), id: item.id };
      });
      let searchProducts = data.filter(elem => {
        return (
          elem.category
            .toLowerCase()
            .slice(0, searchValue.length)
            .indexOf(searchValue) !== -1
        );
      });

      dispatch({
        type: "GET_PRODUCT",
        payload: searchProducts,
      });
      searchVal = "";
    } else {
      const searchProducts = null;
      dispatch({
        type: "GET_PRODUCT",
        payload: searchProducts,
      });
    }
  }

  //  Comments

  const addComments = async (id, newComment) => {
    const produtcsDoc = doc(db, "products", id);
    await updateDoc(produtcsDoc, newComment);
    getProduct();
  };

  let cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProduct,
    getProduct,
    filProducts,
    addComments,
    getSearch,
    getProductsDetails,
    product: state.product,
    readroduct: state.readProduct,
    productDetails: state.productDetails,
    // pageTotalCount: state.pageTotalCount,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
