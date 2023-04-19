import React, { useState } from "react";
import SearchItem from "./SearchItem";
import Item from "./Item";


export default function Items({ itemList, handleDelete, handleChecked }) {
  const [search, setSearch] = useState("");
  const result = itemList.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <>
    <SearchItem  search={search} setSearch={setSearch}/>
      {result.length ? (
        <div>
          {result.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              handleDelete={handleDelete}
              checked={item.checked}
              handleChecked={handleChecked}
            />
          ))}
        </div>
      ) : (
        <p>item List is empty</p>
      )}
    </>
  );
}
