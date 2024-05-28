import React, { useState, useEffect } from "react";

import ListItem from "../components/ListItem";
const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  let person = {
    name: "yike",
    age: 12,
  };

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div>
      <div className="bg-gray-600 px-4 container">
        <div className="">
          {notes.map((note, index) => (
            <ListItem key={index} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesListPage;
