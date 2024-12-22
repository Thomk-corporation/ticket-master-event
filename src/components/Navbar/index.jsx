import { useState } from "react";


function Navbar({onSearch}){
    const [search ,setSearch] = useState("")

    function handleInputChange(event){   
        setSearch(event.target.value)
    }

    function handleInputKeyDown(event){
        if(event.key === "Enter"){
           onSearch(search)
        }
    }


    return (
        <div>
            <p>My Tickec Office</p>
            <input 
                placeholder="Search your events" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value= {search}                
            />
        </div>
    )      
}


export default Navbar;