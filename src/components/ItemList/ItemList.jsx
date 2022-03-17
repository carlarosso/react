import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item.jsx/Item";
import { getFetch } from "../Items/Items";
import "./ItemList.css";


function ItemList() {


  return (
    <>

     {/*  {loading ? (
        <h2 className="loading"> Loading... </h2>
      ) : (
 */}
        <Item />

      
    </>
  )

}

export default ItemList;
