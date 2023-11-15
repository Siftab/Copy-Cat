import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
import { setNewToCart } from '../Utility/mehcanisim';

const DontaionDetails = () => {
    const { id } = useParams();
    const { items } = useLoaderData();

    const targetCard = items.find(card => card.id === parseInt(id));
    const { picture, text_button_bg, title, description, price ,id:cardId} = targetCard;
//     console.log(id,cardId)
// const confirmation= (price)=>{
//     Swal.fire({
//         position: "center",
//         icon: "success",
//         title: `you have donated $${price}`,
//         showConfirmButton: false,
//         timer: 1500
//       });
// }


    return (
        <div className='max-w-6xl mx-auto'>

            <div>
                <div className='relative mt-20'>
                    <img src={picture} alt="" className='w-full' />
                    <div className='bg-black py-9 bg-opacity-40 relative bottom-[132px] '>
                        <button className='py-4 px-7 text-xl font-semibold text-white rounded ml-9 ' style={{ backgroundColor: `${text_button_bg}` }}
                        onClick={()=>{setNewToCart(cardId,price);}}> Donate ${price}</button>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-bold '>{title}</h1>
                    <p className='text-[#0B0B0BB2] text-base font-normal my-6'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DontaionDetails;