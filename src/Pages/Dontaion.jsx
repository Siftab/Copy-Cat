import React, { useEffect, useState } from 'react';
import { getCart } from '../Utility/mehcanisim';
import DonationCard from '../Components/DonationCard/DonationCard';
import { useLoaderData } from 'react-router-dom';

const Dontaion = () => {
    const [cardToShow, setCardToShow] = useState([]);
    const [showMore,setShowMore]=useState(false);
    const { items: cards } = useLoaderData();
    // console.log(cards)
    useEffect(() => {
        const carts = getCart();
        if (cards.length > 0) {
            const donatedCard = cards.filter(card => carts.includes(card.id))
            setCardToShow(donatedCard);
            // console.log(donatedCard)

        }
    }, [cards])
    // console.log(carts)

    return (
        <div className='max-w-6xl mx-auto mt-20'>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                    //    if(showMore){
                    //    { cardToShow.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)}
                    //    }
                    //    else{
                    //     {cardToShow.map(card => <DonationCard key={card.id} card={card}></DonationCard>)}
                    //    }
                   showMore === false? 
                   cardToShow.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>): 
                   cardToShow.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
                    
                </div>
                <div className='flex justify-center'>
                    {
                        cardToShow.length > 4 && <button onClick={()=>setShowMore(true)} className={`px-7 py-3 bg-[#009444] rounded-lg text-white ${showMore === true? 'hidden':''} mt-14`}> see All</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Dontaion;