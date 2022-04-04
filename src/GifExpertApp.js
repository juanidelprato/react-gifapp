import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  /* const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; */
  const [categories, setCategories] = useState([]);

  /* const handleAdd = () =>{
         setCategories([...categories,'Huracan']); 
        setCategories(cats => [...cats, 'Huracan'])
    } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(c => <GifGrid category={c} key={c} />)}
      </ol>
    </>
  );
};
