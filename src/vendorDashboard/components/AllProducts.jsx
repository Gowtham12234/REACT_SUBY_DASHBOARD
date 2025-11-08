import React, { useEffect, useState } from "react";
import {API_URL} from "../data/apipath"
const AllProducts = () => {

    const [products,setProducts]=useState([]);
    const ProductHandler =async()=>{
        const firmId=localStorage.getItem('firmId');
        try {
            const response=await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductsData=await response.json();
            setProducts(newProductsData.products)
            console.log(newProductsData);
            
        } catch (error) {
            console.error("failed to fetch products")
            alert("failed to fetch products");
        }
    }

    useEffect(()=>{
        ProductHandler()
        console.log("this is use effect");
        
    },[])
    const deleteProductById = async (productId) => {
  const ok = window.confirm("Are you sure you want to delete this product?");
  if (!ok) return;
  try {
    const response = await fetch(`${API_URL}/product/${productId}`, {
      method: "DELETE"
    });
    if (response.ok) {
      setProducts(products.filter(product => product._id !== productId));
      alert("Product deleted successfully");
    } else {
      alert("Failed to delete product");
    }
  } catch (error) {
    console.error("Failed to delete");
    alert("Failed to delete product");
  }
};

  return <>
  <div>
    {!products?(
        <p> No products added </p>
    ):(
        <>
            {products.map((item)=>{
                return(
                    <>
                        <div className="products-list">
                            <div key={item._id} className="products">
                                {item.image && (
                                    <img src={`${API_URL}/uploads/${item.image}`} alt={item.productname} />
                                )}
                                <h2>{item.productname}</h2>
                                <h3>{item.price}</h3>
                                <button>edit</button>
                                <button onClick={()=>deleteProductById(item._id)}>delete</button>
                            </div>
                        </div>
                    </>
                )
            })}
        
        </>
    )}
  </div>
  
  </>;
};

export default AllProducts;

