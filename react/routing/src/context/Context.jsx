import React, { createContext, useState } from 'react'
export const UserContext = createContext();

const Context = (props) => {
    console.log(props);
//   return (
//     <div>Context</div>
//   )
    const [users,setusers]=useState([
        {id:0,username:"jhone",city:"usa"},
        {id:1,username:"keishna",city:"india"},
        {id:2,username:"danse",city:"america"},
    ])
     return <UserContext.Provider value={{users,setusers}}>{props.children}</UserContext.Provider>;
}
export default Context