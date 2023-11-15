import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const DonationCard = ({card}) => {
    const {id,picture,category_bg,card_bg,title,price,text_button_bg,category}=card;
    return (
        <div>
            <div className="card card-side h-60 shadow-xl" style={{backgroundColor:`${card_bg}`}}>
                <figure><img src={picture} alt="Movie" className='h-full w-[220px]' /></figure>
                <div className="card-body">
                   <div className='flex-grow'> <p className='py-2 px-1 w-fit rounded text-sm' style={{backgroundColor:`${category_bg}`,color:`${text_button_bg}`}}>{category}</p>
                    <h2 className="text-2xl font-semibold ">{title}</h2>
                    <p className='font-semibold' style={{color:`${text_button_bg}`}}>${price}</p>
                    </div>
                    <Link to={`/donation-details/${id}`}><button className='text-white text-lg font-semibold px-4 py-2 rounded-lg flex-grow-' style={{backgroundColor:`${text_button_bg}`}}>See Details</button></Link>
                  
                </div>
            </div>
        </div>
    );
};
DonationCard.propTypes={
    card:PropTypes.object.isRequired
}


export default DonationCard;