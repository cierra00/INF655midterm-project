import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Card from '../shared/Card';
import { Link } from "react-router-dom";

export default function Item({
  id,
  title,
  description,
  handleDelete,
  checked,
  handleChecked,
}) {


  return (
   <>
   <Link to="/newItem">New Item</Link>
   <Card>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChecked(id)}
      />

      <div
        className="text-display"
        style={checked ? { textDecoration: "line-through" } : null}
      >
        {title}
      </div>
      <div
        className="text-display"
        style={checked ? { textDecoration: "line-through" } : null}
      >
        {description}
      </div>
      
      <button onClick={() => handleDelete(id)} className="delete">
        <FaTrashAlt />
      </button>
    </Card>
    </>
  );
}
