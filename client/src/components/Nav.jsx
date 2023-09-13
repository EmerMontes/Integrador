import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = (props)=>{
  const location = useLocation()
  
  return (
     <div>
       {(location.pathname !== '/') ? 
       <div>
          <SearchBar onSearch={props.onSearch} randomHandler={props.randomHandler} />
          <div>
          <button><Link to="/about">About</Link></button> 
          <Link to="/home"><button>Home</button></Link>
          <Link to="/favorites"><button>Favoritos</button></Link>
           <button onClick={props.logOut}>LOG OUT</button>
          </div>

      </div> : null}
      </div>

      )
}

export default Nav;