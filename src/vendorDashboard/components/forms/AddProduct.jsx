import React,{useState} from 'react'
import { API_URL } from '../../data/apipath';
const AddProduct = () => {
  const [productname,setProductname]=useState("");
  const [price,setprice]=useState("");
  const [category,setCategory]=useState([])
  const [bestSeller,setBestSeller]=useState(false)
  const [image,setImage]=useState(null);
  const [description,setDescription]=useState("")

  const handleCategoryChange=(event)=>{
    const value=event.target.value;
    if(category.includes(value)){
      setCategory(category.filter((item)=> item!==value))
    }
    else{
      setCategory([...category,value])
    }
  }
  const handleBestSeller=async(event)=>{
    const value=event.target.value;
    setBestSeller(value)
  }
  const handleImagepload=(event)=>{
  const selectedImage=event.target.files[0];
  setImage(selectedImage)
}

  const handleAddproduct=async(e)=>{
    e.preventDefault()
    try {
      const loginToken=localStorage.getItem("login-token")
      const firmId=localStorage.getItem("firmId")
      if(!loginToken || !firmId){
        console.error("user not authenticated")
      }
      const formData=new FormData();
            formData.append("productname",productname)
            formData.append("price",price)
            formData.append("description", description);
            formData.append("image",image)
            formData.append("bestSeller", String(bestSeller));
            category.forEach((value)=>{
            formData.append("category",value)
            })

            const response=await fetch(`${API_URL}/product/add-product/${firmId}`,{
              method:"POST",
              body:formData,
              

            })
            const data=await response.json()
            if(response.ok){
              alert("product added succesfully");

            }
            setProductname("");
            setprice("")
            setCategory("")
            setBestSeller(false)
            setImage(null)
            setDescription("")
    } catch (error) {
      
      alert("failed  to add product")
    }
    
  }
  return (
    <>
        <div className="firmSection">
          <form className="tableForm" onSubmit={handleAddproduct} >
    <h3>Add Product</h3>
        <label >Product Name</label>
        <input type="text"  value={productname} onChange={(e)=>setProductname(e.target.value)}/>
        <label >Price</label>
        <input type="text"  value={price} onChange={(e)=>setprice(e.target.value)}/>
        <div className="checkInp">
     <label >Category</label>
         <div className="inputsContainer">
         <div className="checboxContainer">
                 <label>Veg</label>
                 <input type="checkbox" value="veg" checked= {category.includes('veg')} onChange={handleCategoryChange} />
               </div>
               <div className="checboxContainer">
                 <label>Non-Veg</label>
                 <input type="checkbox" value="non-veg" checked= {category.includes('non-veg')} onChange={handleCategoryChange} />
               </div>
         </div>

   </div>
   <div className="checkInp">
     <label >Best Seller</label>
         <div className="inputsContainer">
         <div className="checboxContainer">
                 <label>Yes</label>
                 <input type="radio" value="true" onChange={() => setBestSeller(true)} checked={bestSeller==true}  />
               </div>
               <div className="checboxContainer">
                 <label>No</label>
                 <input type="radio" value="false" onChange={() => setBestSeller(false)} checked={bestSeller==false} />
               </div>
         </div>

   </div>
       
        <label >Description</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <label >Firm Image</label>
        <input type="file"  onChange={handleImagepload}/>
        <br />
    <div className="btnSubmit">
<button type='submit'>Submit</button>
</div>
   </form>
         </div>
    </>
  )
}

export default AddProduct