import React from "react";

const ListItem = ({ note }) => {
  return (
    <div className="bg-gray px-2 mx-5 ">
      <div className="text-black px-2 py-2 mx-2 bg-slate-500">{note.body}</div>
    </div>
  );
};

export default ListItem;
