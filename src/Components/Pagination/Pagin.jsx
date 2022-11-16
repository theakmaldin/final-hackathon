import React, { useEffect, useState } from "react";
import firebase from "firebase";

const productRef = firebase
  .firebase()
  .collection("products")
  .orderBy("id", "asc");

const Pagin = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    productRef
      .limit(3)
      .get()
      .then(collections => {
        updateState(collections);
      });
  }, []);

  const updateState = collections => {
    const isCollectionEmpty = collections.size === 0;
    if (!isCollectionEmpty) {
      const products = collections.docs.map(products => products.data());
      const lastDoc = collections.doc[collections.dosc.length - 1];
      setListOfProducts(listOfProducts => [...listOfProducts, ...products]);
      setLastDoc(lastDoc);
    } else {
      setIsEmpty(true);
    }
    setLoading(false);
  };

  const fetchMore = () => {
    setLoading(true);
    productRef
      .startAfter(lastDoc)
      .limit(3)
      .get()
      .then(collections => {
        updateState(collections);
      });
  };

  if (listOfProducts.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {listOfProducts.map((item, index) => {
        return (
          <div
            key={index}
            style={{ background: item.products, height: "50vh" }}></div>
        );
      })}
      {loading && <h1>Loading...</h1>}

      {!loading && isEmpty && <button onClick={fetchMore}>More</button>}
      {isEmpty && <h1>There are no more data</h1>}
    </div>
  );
};

export default Pagin;
