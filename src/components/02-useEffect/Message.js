import React,{useEffect, useState, Fragment} from 'react';

const Message = () => {

    const[coords,setCoords]=useState({x:0,y:0})
    const{x,y}=coords;

    useEffect(() => {

        const mouseMove=(e)=>{
            // console.log(e);
            const coors={x:e.x,y:e.y};
            // console.log(coors);
            setCoords(coors);
        }

        window.addEventListener('mousemove',mouseMove);
        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])
    
    return ( 
        <Fragment>
            <h3>Erers genial</h3>
            <p>x:{x} y:{y}</p>
        </Fragment>
     );
}
 
export default Message;