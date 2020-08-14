import React,{useContext} from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {


    const {setUser} = useContext(UserContext);

  
    return ( 
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button 
            className="btn btn-secondary"
            onClick={()=>setUser({
                id:123,
                name:"algo"
            })}
            >
                Login
            </button>
        </div>
     );
}
 
export default LoginScreen;