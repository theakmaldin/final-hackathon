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

export const productContext = createContext();

const INIT_STATE = {
  product: [],
  productDetails: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...prevState, product: action.payload };
    case "GET_READPRODUCT":
      return { ...prevState, readProduct: action.payload };
    case "GET_ONE_READPRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

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
      readProduct();
    } catch (e) {
      console.log(e);
    }
  }

  // ! ====== UPDATE FINISH ======

  let cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProduct,
    getProduct,
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
