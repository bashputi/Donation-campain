import swal from "sweetalert";

const DonatCard = ({donat}) => {

    const {id, picture, description, price, title, text_and_button} = donat || {};

    const handleDonates = () => {

        const addedDonatesArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if(!donationItems) {
            addedDonatesArray.push(donat)
            localStorage.setItem('donations', JSON.stringify(addedDonatesArray))
            swal("Good job!!", "You donated", "success");
        }else{
            const isExists = donationItems.find((donat) => donat.id === id);

            if(!isExists) {
                addedDonatesArray.push(...donationItems, donat)
                localStorage.setItem('donations', JSON.stringify(addedDonatesArray))
                swal("Good job!!", "You donated", "success");
            }else{
                swal("error!", "Already Added", "error");
            }
        }
    }
   
    return (
        <div>

            <div className="mb-6 max-w-[1000px]  mx-auto flex flex-col shadow-md">
                        
          
                   <img className=" rounded-lg h-[70vh]"
                        src={picture}
                        alt="img-blur-shadow"
                        layout="fill"
                        />
                 
                    <div>
                    <div className="-mt-[72px] pl-6 py-9 relative bg-black opacity-50" >
                        
                        </div >
                        <div className="-mt-14 ml-4 absolute">
                        <button onClick={handleDonates} className="text-white rounded text-sm font-medium py-3 px-6" style={{backgroundColor: text_and_button}}>
                            Donate ${price}
                            </button>
                        </div>
                    </div>
                  
                  
                
                    <div className="p-6">
                        <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                        </h5>
                        <p>{description}</p>
                    </div>
                
                    </div>

        </div>
    );
};

export default DonatCard;