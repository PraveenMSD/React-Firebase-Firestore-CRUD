import React, { useState } from "react";
import { firestore } from "../config/Config";
import Read from "./Read";

const Create = () => {
  const [text, setText] = useState({
    title: "",
    console: "",
  });

  const update = (e) => {
    e.preventDefault();
    firestore.collection("games").add({
      ...text,
      title: text.title,
      console: text.console,
    });
  };

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={update}>
        <div className="inputTitle col-lg-5 col-lg-offset-5 mt-4">
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            required
            value={text.title}
            onChange={(e) => setText({ ...text, title: e.target.value })}
          ></input>
        </div>
        <div className="inputTitle col-lg-5 col-lg-offset-5 mt-2">
          <input
            className="form-control"
            type="text"
            placeholder="Console"
            required
            value={text.console}
            onChange={(e) => setText({ ...text, console: e.target.value })}
          ></input>
        </div>

        <button type="submit" className="btn btn-success mt-2">Submit</button>
      </form>
      <Read />
    </div>
  );
};

export default Create;
