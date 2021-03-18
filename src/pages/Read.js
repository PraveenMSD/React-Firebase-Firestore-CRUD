import React, { useState, useEffect } from "react";
import { firestore } from "../config/Config";
import { Link } from "react-router-dom";

const Read = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    getGames()
  }, [])

  // Get data with realtime updates
  const getGames = () => {
    const blank = [];
    firestore.collection("games").onSnapshot((querySnapshot) => {
      let changes = querySnapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          blank.push({ id: change.doc.id, ...change.doc.data() })
        } else {
          return text
        }
      })
      setText([...text, ...blank]);
    })
    return () => {
      setText([...text, ...blank])
    }
  }

  console.log(text)
  
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
            <div className="row">
            <div className="col-md-5">
            <div className="card" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.description}</p>
                <Link to={`/update/${game.id}`}>
                  <button className="btn btn-info">Edit</button>
                </Link> &nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={(e) => remove(e)}>Delete</button>
              </div>
            </div>
            </div>
            </div>
          </p>
        );
      })}
    </div>
  );
};

export default Read;