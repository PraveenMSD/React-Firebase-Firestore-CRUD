import React, { useState, useEffect } from "react";
import { firestore } from "../config/Config";
import { Link } from "react-router-dom";

const Read = () => {
  const [text, setText] = useState([]);

  // Get all data once
  // useEffect(() => {
  //   const bla = [];
  //   firestore
  //     .collection("games")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         bla.push({ ...doc.data(), id: doc.id });
  //       });
  //       setText([...text, ...bla]);
  //     });
  // }, []);

  // Get data with realtime updates
  useEffect(() => {
    const bla = [];
    firestore.collection("games").onSnapshot((snap) => {
      let changes = snap.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          bla.push({ id: change.doc.id, ...change.doc.data() });
        } else {
          return text;
        }
      });
      setText([...text, ...bla]);
    });
    return () => {
      setText([...text, ...bla]);
    };
  }, []);

  return (
    <div className="mt-4">
      <h1>Read</h1>
      {text.map((game) => {
        const remove = (e) => {
          e.preventDefault();
          firestore
            .collection("games")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if (doc.id === game.id) {
                  firestore.collection("games").doc(doc.id).delete();
                }
              });
            });
        };

        return (
          <p key={game.id}>
            Title: {game.title} - Console: {game.console}
            <button className="btn btn-danger" onClick={(e) => remove(e)}>Delete</button>
            <Link to={`/update/${game.id}`}>
              <button className="btn btn-info">Update</button>
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default Read;
