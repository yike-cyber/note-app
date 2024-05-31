import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ListItem from "../components/ListItem";
const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

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
    <div className="bg-zinc-500   h-screen mb-5 rounded-b w-auto pt-4">
      <div className=" px-2 container max-h-screen ">
        <div className="flex flex-row justify-between mb-2 py-1 text-red-500  font-bold text-xl">
          <p>
            <Link to={"/"}>
              <span>&#9782;</span>
            </Link>

            <span className="ml-2">Notes</span>
          </p>

          <p className="mr-2 text-lg font-normal text-black">{notes.length}</p>
        </div>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
