import React from 'react';
import Card from '../shared/Card';

export default function SearchItem({search, setSearch}) {
  return (
    <Card>
      <h2>Search For Items</h2>
      <form onSubmit={(e)=> e.preventDefault()}>
      <input type="text" 
      name="search" id="search" 
      role="searchbox" 
      placeholder="Search Items"
      className="input"
      onChange={(e)=> setSearch(e.target.value)}/>
      </form>
    </Card>
  );
}
