import React from 'react';  
import styles from "./Style.module.css"; // import css file
function Navbar({value}){
    return (
        <div className='w-full px-20 py-3 flex justify-between items-center'>
            <h3 className={`${styles.a} ${styles.b}`}>Orange</h3>
            <div className='flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3 '>
                <h3>Favourites</h3>
                <h4>{value.filter(item=>item.added).length}</h4>
            </div>
        </div>
    )
}
export default Navbar; // export the component so that we can use it in other files