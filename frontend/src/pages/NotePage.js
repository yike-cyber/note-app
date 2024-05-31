import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ReactComponent as DeleteIcon } from "../../src/assets/icons/delete.svg";
import { ReactComponent as LeftArrowIcon } from "../../src/assets/icons/arrow-left.svg";

const NotePage = ({ prop }) => {
  const params = useParams();
  let noteId = params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  let deleteNoteHandler = async () => {
    await fetch(`/api/notes/${noteId}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  let updateNoteHandler = async () => {
    await fetch(`/api/notes/${noteId}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    updateNoteHandler();
  };

  return (
    <div className="bg-zinc-500 h-screen mb-5 rounded-b w-auto pt-4 flex flex-row justify-between">
      <div className="py-2 mx-2">
        <Link to={`/`}>
          <LeftArrowIcon />
        </Link>
      </div>
      <div className="w-full h-60 flex flex-col items-center py-4 px-4 rounded">
        <textarea
          name="body"
          id="body_block"
          className="bg-slate-800 px-5 py-2 text-white w-full h-60"
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          value={note?.body || ""}
        ></textarea>
        <button
          className="bg-blue-900 rounded px-2 hover:bg-green-700 text-xl my-2 py-1"
          onClick={handleSubmit}
        >
          update
        </button>
      </div>
      <div className="py-2">
        <div onClick={deleteNoteHandler}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default NotePage;
