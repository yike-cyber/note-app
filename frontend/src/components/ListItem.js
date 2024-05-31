import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div className=" mx-5  flex flex-row bg-light rounded  mb-2 justify-between">
      <Link to={`/note/${note.id}`}>
        <div className="text-black px-2 py-2 mx-2 text-lg   ">
          {note.body} {note.id}
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
