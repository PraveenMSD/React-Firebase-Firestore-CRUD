import React, { useState, useEffect } from "react";
import { firestore } from "../config/Config";

const Update = (props) => {
  const [text, setText] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    const arr = [];
    firestore
      .collection("games")
      .doc(id)
      .get()
      .then((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
        setText(...text, ...arr);
      });
  }, []);

  const updateFields = (e) => {
    e.preventDefault();
    firestore
      .collection("games")
      .doc(id)
      .set({ title: text.title, console: text.console });

    // Redirects back to the home page
    props.history.push("/");
  };

  console.log(props);

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={updateFields}>
        <div>
          <input
            type="text"
            placeholder="Title"
            required
            value={text.title || ""}
            onChange={(e) => setText({ ...text, title: e.target.value })}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Console"
            required
            value={text.console || ""}
            onChange={(e) => setText({ ...text, console: e.target.value })}
          ></input>
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
