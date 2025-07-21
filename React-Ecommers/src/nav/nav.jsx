
import "./nav.css"
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart , AiOutlineUserAdd } from "react-icons/ai";


function Nav({handlechange,value}) {
  return (
    <nav>
        <div className="SearchBar-Wrapper">
            <input onChange={handlechange} value={value} type="text" placeholder="Enter Product" className="SearchBar" />
        </div>

        <div className="profile-container">
            <a href="" >
                <FiHeart className="nav-icon"/>
            </a>
            <a href="">
                <AiOutlineShoppingCart className="nav-icon"/>
            </a>
            <a href="">
                <AiOutlineUserAdd className="nav-icon"/>
            </a>
        </div>
    </nav>
    
  )
}

export default Nav