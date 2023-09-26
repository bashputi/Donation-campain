

const DonationCard = ({donat}) => {
    const {id, picture, title, price, card_bg, text_and_button, category, category_bg} = donat || {};

    return (
        <div>
            
           <div style={{backgroundColor: card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
 
            <button className=" rounded text-sm font-semibold py-3 px-6" style={{backgroundColor: category_bg}}>
             <p style={{color: text_and_button}}>{category}</p>
            </button>
      
    <h4 className="mb-2 block font-sans mt-4 text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
       <p style={{color: text_and_button}} className="text-base font-semibold"> ${price}</p>
    
       <button className="text-white mt-4 rounded text-lg font-semibold py-3 px-4" style={{backgroundColor: text_and_button}}>
                            View Details
                            </button>
    
  </div>
           </div>

        </div>
    );
};

export default DonationCard;