import React, { useState, useEffect } from "react";
import { firestore } from "../config/Config";

const Update = (props) => {
  const [text, setText] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    getGamestoUpdate();
  }, [])
  
  const getGamestoUpdate = () => {
    const arr = [];
    firestore
      .collection("games")
      .doc(id)
      .get()
      .then((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
        setText(...text, ...arr)
      })
  }


  const updateFields = (e) => {
    e.preventDefault();
    firestore
      .collection("games")
      .doc(id)
      .set({ title: text.title, description: text.description });

    // Redirects back to the home page
    props.history.push("/");
  };

  console.log(props);

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={updateFields}>
        <div className="inputTitle col-lg-5 col-lg-offset-5 mt-4">
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            required
            value={text.title || ""}
            onChange={(e) => setText({ ...text, title: e.target.value })}
          ></input>
        </div>
        <div className="inputTitle col-lg-5 col-lg-offset-5 mt-4">
          <input
            className="form-control"
            type="text"
            placeholder="console"
            required
            value={text.description || ""}
            onChange={(e) => setText({ ...text, description: e.target.value })}
          ></input>
        </div>

        <button type="submit" className="btn btn-success mt-2">Update</button>
      </form>
    </div>
  );
};

export default Update;