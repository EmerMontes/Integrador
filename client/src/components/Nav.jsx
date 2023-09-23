import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../styles/nav.css'

import { FcHome } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { RiLogoutCircleRFill } from "react-icons/ri";


const Nav = (props)=>{
  const location = useLocation()
  
  return (
     <div className="este">
       {(location.pathname !== '/') ? 
       <div className="layout">
          <SearchBar onSearch={props.onSearch} randomHandler={props.randomHandler} />
          
          <div className="sidebar">
          <Link to="/home"><FcHome/></Link>
          <Link to="/favorites"><button><FcLike/></button></Link>
          <Link to="/about"><button><FcBusinessman/></button></Link> 
           <button className="logoout" onClick={props.logOut}>
            <RiLogoutCircleRFill/>
           </button>
          </div>
          

      </div> : null}
      </div>

      )
}

export default Nav;