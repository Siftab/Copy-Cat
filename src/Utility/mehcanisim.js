import Swal from "sweetalert2";

const getCart =()=>{
    const donations = localStorage.getItem('donations');
    if(donations){
        return JSON.parse(donations);
    }
    else {
        return [];
    }
}

const confirmation= (price)=>{
    Swal.fire({
        position: "center",
        icon: "success",
        title: `you have donated ${price}$ succesfully`,
        showConfirmButton: false,
        timer: 1500
      });
}
const alreadyAdded=()=>{Swal.fire({
    position: "center",
    icon: "warning",
    title: "Already donated",
    showConfirmButton: false,
    timer: 1500
  });}

const setNewToCart=(id,price)=>{
    console.log(id)
    const donations = getCart();
    if(!donations.includes(id)){
        donations.push(id);
    localStorage.setItem('donations',JSON.stringify(donations));
    confirmation(price);
    }
    else  {alreadyAdded()}
}
export {getCart,setNewToCart}