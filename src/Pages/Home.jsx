import React, { createContext, useContext, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card/Card';
import Swal from 'sweetalert2';
export const SeacrhContext=createContext('');
const Home = () => {
   
    const {items}= useLoaderData();
    const[mainHolder,setMainHolder]=useState(items);
    const [displayCard,setDisplayCard]=useState(mainHolder)
    //  console.log(displayCard)

    const handleSearch=(e)=>{
         e.preventDefault();
        const category =e.target.search.value;
        const newDisplay= mainHolder.filter(card=>card.category==category);
        

        if(category.toLowerCase()==='all'){
            setDisplayCard(mainHolder)
        }
        else if(category.toLowerCase()==='health' ||category.toLowerCase()==='education'||category.toLowerCase()==='clothing'||category.toLowerCase()==='food' ){
            
            setDisplayCard(newDisplay);

        }
        else{ Swal.fire({
                title: "Alert",
                text: "Search with proper category Name",
                icon: "warning"
              });}

        // if(newDisplay!== []){
        // setDisplayCard(newDisplay);}
        // else{ Swal.fire({
        //     title: "Alert",
        //     text: "Search with proper category Name",
        //     icon: "warning"
        //   });}

    
}
   
    return (
        <div>
            <SeacrhContext.Provider value={handleSearch}><Banner></Banner></SeacrhContext.Provider>
           <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative'>
                 {
                    displayCard.map(item=><Card key={item.id}   item={item}></Card>)
                 }
           </div>
        </div>
    );
};
// export SeacrhContext;
export default Home;