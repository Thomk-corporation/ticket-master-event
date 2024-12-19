import { useState } from "react";

function Navbar(){
    const [search ,setSearch] = useState("")

    function handleInputChange(event){
        console.log("Capture event of tarjet input ",event)
        
        console.log("Capture event of tarjet input ",event.target.value)
        setSearch(event.target.value)
    }


    return (
        <div>
            <p>My Tickec Office</p>
            <input 
                placeholder="Search your events" 
                onChange={handleInputChange}
                value= {search}                
            />
        </div>
    )      
}


export default Navbar;