import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const MainLayOut = () => {
  return (
    <div>
        <Header></Header>
        <div className=" min-h-screen">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}



export default MainLayOut