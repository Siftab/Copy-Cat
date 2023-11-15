
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Card = ({ item }) => {

    // console.log(item)
    const { id, picture, title, category, category_bg, card_bg, text_button_bg } = item;

   



    return (
        <Link to={`/donation-details/${id}`}>
            <div className={`card card-compact shadow-xl`} style={{ backgroundColor: `${card_bg}` }}>
                <figure><img src={picture} alt="Shoes" className='w-full' /></figure>
                <div className="card-body">
                    <h2 className={`text-sm font-medium p-2 w-fit rounded-md `} style={{
                        backgroundColor: `${category_bg}`,
                        color: `${text_button_bg}`
                    }}>{category}</h2>
                    <p className={`text-xl font-semibold`} style={{ color: `${text_button_bg}` }}>{title}</p>

                </div>
            </div>
        </Link>
    );

};
Card.propTypes = {
    item: PropTypes.object.isRequired,

}

export default Card;