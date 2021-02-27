import React from 'react'
import { useState } from 'react'
import ProductItem from './ProductItem.js'


function ListProduct() {
    // Soal Nomor - 1
    // Membuat variabel dengan state
    const [barang] = useState([
        {
          name: "Laptop",
          color: "black"
        },
        {
          name: "Mouse",
          color: "white",
        },
        {
          name: "Keyboard",
          color: "silver",
        },
      ])



    return (
        <div>

               { barang.map( (items) => {
                
                // Soal Nomor - 3
                // Lempar data ke komponen ProductItem
                // Asumsi name sebagai key
                return <ProductItem key={items.name}  name={items.name} color={items.color} /> 

                  
            })}

        </div>
    )
}

export default ListProduct
