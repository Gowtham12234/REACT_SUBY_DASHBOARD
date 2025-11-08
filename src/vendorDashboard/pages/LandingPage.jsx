import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Login from '../components/forms/Login'
import Register from "../components/forms/Register"
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {

  const [showLogin,setShowLogin]=useState(false)
  const [showRegister,setShowRegister]=useState(false)
  const [showAddFirm,setShowAddFirm]=useState(false)
  const [showAddProduct,setShowAddProduct]=useState(false)
  const [showWelcome,setShowWelcome]=useState(false)
  const [showAllProducts,setShowAllProducts]=useState(false)
  const[showLogOut,setShowLogOut]=useState(false)
  const [showFirmTitle,setShowFirmTitle]=useState(true)


  useEffect(()=>{
    const loginToken=localStorage.getItem('login-token');
    if(loginToken){
      setShowLogOut(true)
      setShowWelcome(true)
    }
  },[])
  useEffect(()=>{
    const firmname=localStorage.getItem("firmname");
    const firmId = localStorage.getItem('firmId')

        if(firmname ||firmId ){
          setShowFirmTitle(false)
          setShowWelcome(true)
        }
  },[])
  const logouthandler=()=>{ 
    confirm("are you sure you want to logout")
    localStorage.removeItem("login-token");
    localStorage.removeItem("firmId")
    localStorage.removeItem("firmname")
    setShowLogOut(false);
    setShowFirmTitle(true)
    setShowWelcome(false)
  }

  const ShowLoginHandler=()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowAddFirm(false);
    setShowAddProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
}
const ShowRegisterhandle=()=>{
  
  setShowRegister(true)
  setShowLogin(false)
  setShowAddFirm(false);
  setShowAddProduct(false)
  setShowWelcome(false)
  setShowAllProducts(false)
  
  
}
const ShowAddFirmHandler=()=>{
  if(showLogOut){
  setShowAddFirm(true);
 setShowRegister(false)
  setShowLogin(false)
  setShowAddProduct(false)
  setShowWelcome(false)
  setShowAllProducts(false)
  }else{
    alert("please log in to access ")
    setShowLogin(true)
  }

}
const ShowAddProductHandler=()=>{
  if(showLogOut){

  setShowAddProduct(true)
  setShowAddFirm(false);
 setShowRegister(false)
  setShowLogin(false)
  setShowWelcome(false)
  setShowAllProducts(false)
  }
  else{
    alert("please log in ")
    setShowLogin(true)
  }
  
}
const ShowAddWelcomeHandler=()=>{
  setShowWelcome(true)
  setShowAddProduct(false)
  setShowAddFirm(false);
 setShowRegister(false)
  setShowLogin(false)
  setShowAllProducts(false)
  
}
const ShowAllProductsHandler=()=>{
  if(showLogOut){
  setShowAllProducts(true)
  setShowWelcome(false)
  setShowAddProduct(false)
  setShowAddFirm(false);
 setShowRegister(false)
  setShowLogin(false)
  }
  else{
    alert("please log in ")
    setShowLogin(true)
  }
}
 

  return (
    <>
    <section className="landingsection">
        <Navbar ShowLoginHandler={ShowLoginHandler} ShowRegisterhandle={ShowRegisterhandle} showLogOut={showLogOut} logouthandler={logouthandler}/>
        <div className="collectionsSection">
            <Sidebar ShowAddFirmHandler={ShowAddFirmHandler} ShowAddProductHandler={ShowAddProductHandler} ShowAllProductsHandler={ShowAllProductsHandler} showFirmTitle={showFirmTitle}/>
            {showLogin && <Login ShowAddWelcomeHandler={ShowAddWelcomeHandler}/>}
            {showRegister && <Register ShowLoginHandler={ShowLoginHandler}/>}
            {showAddFirm && showLogOut &&  <AddFirm/>}
            {showAddProduct && showLogOut &&  <AddProduct/>}
            {showWelcome  && <Welcome/>}
            {showAllProducts && showLogOut&& <AllProducts/>}
        </div>
        
    </section>
    
    </>
  )
}

export default LandingPage