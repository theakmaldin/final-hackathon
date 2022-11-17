import React, { useReducer } from "react";

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
export const commentContext = React.createContext();

const INIT_STATE = {
  comments: [],
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...prevState, comments: action.payload };

    default:
      return prevState;
  }
}

const CommentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const db = getFirestore();
  const commentsCollection = collection(db, "comments");

  async function addComment(newComment) {
    try {
      await addDoc(collection(db, "comments"), newComment);
    } catch (e) {
      console.log(e);
    }
  }

  async function readComment() {
    try {
      const { docs } = await getDocs(collection(db, "comments"));
      const data = docs.map(item => {
        return { ...item.data(), id: item.id };
      });
      dispatch({
        type: "GET_READCOMMENT",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const getComments = async () => {
    const data = await getDocs(commentsCollection);
    const commentsArr = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    // console.log(data);
    dispatch({
      type: "GET_COMMENTS",
      payload: commentsArr,
    });
  };
  return (
    <commentContext.Provider
      value={{
        getComments,
        addComment,
        readComment,
        comments: state.comments,
      }}>
      {children}
    </commentContext.Provider>
  );
};

export default CommentContextProvider;
