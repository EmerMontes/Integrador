import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = (props)=>{
  const location = useLocation()
  
  return (
     <div>
       {(location.pathname !== '/') ? 
       <div>
          <SearchBar onSearch={props.onSearch}/>
          <button onClick={props.randomHandler}>AGG RAMDOM</button>
       
          <div>
          <button><Link to="/about">About</Link></button> 
          <Link to="/home"><button>Home</button></Link>
           <button onClick={props.logOut}>LOG OUT</button>
          </div>
      </div> : null}
      </div>

      )
}

export default Nav;