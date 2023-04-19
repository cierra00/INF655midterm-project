import React from 'react';
import {Routes,Route} from 'react-router-dom';



export default function ItemRoutes() {
  return (
    <Routes>
      <Route index element={<product />} />
        <Route path=":id" element={<product />}/>
        
      
    </Routes>
  )
}
