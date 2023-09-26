import { Link } from "react-router-dom";


const DonationsCard = ({donation}) => {
    const {id, picture, title, category, category_bg, card_bg, text_and_button} = donation || {};
    return (
        <div >

            <Link to={`/donations/${id}`}>
            <div className="mb-6 w-80 flex flex-col shadow-md" style={{backgroundColor: card_bg}}>
            
            <img className="w-80 rounded-lg"
            src={picture}
            alt="img-blur-shadow"
            layout="fill"
            />

        <div className="mt-4 ml-6" >
            <button className=" rounded text-sm font-medium py-3 px-6" style={{color: text_and_button},{backgroundColor: category_bg}}>
             {category}
            </button>
        </div>
      
        <div className="p-6" style={{color: text_and_button}}>
            <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
            </h5>
          
        </div>
       
        </div>
            </Link>

        </div>
    );
};

export default DonationsCard;