import { useContext , useRef} from "react";
import { AddressContext } from "../App";

function Addresstext(){
    const [address , setAddress] = useContext(AddressContext)
    const addressRef=useRef();
    
    
    function handleChange(){
        setAddress({
            isMap: false,
            lat: 31.25214048726485,
	lng:  30.009838471967534,   
            address: addressRef.current.value
        })
        console.log(address)
    }
    
    
    return(
        <>
        <h2> Address Form</h2>
        {/* <input type="text" placeholder="Building Name" /><br/>
        <input type="text" placeholder="Apt. No."/>
        <input type="text" placeholder="Floor "/> <br/>
        <input type="text" placeholder="Street Name"/> <br/>
        <input type="text" placeholder="Additional directions(optional)"/> <br/>
        <input type="tel" placeholder="Phone number "/> <br/> <br/> */}
        <input type="text" placeholder="Address" onChange={handleChange} ref={addressRef}/>
        <button type="submit">Save Address</button>
        </>
   
   
   
    );
   
   
   
   
   }
   export default Addresstext;