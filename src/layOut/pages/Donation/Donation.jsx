import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import ErrorPage from "../Error/ErrorPage";



const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false);
   

    useEffect(() => {
       const donationItems = JSON.parse(localStorage.getItem('donation'));
       

       if(donationItems) {
           setDonation(donationItems)
       }else{
        setNoFound(<ErrorPage></ErrorPage>)
       }
    },[]);

    return <div> { noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
           <div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    isShow ? donation.map((donat) => (
                        <DonationCard key={donat.id} donat={donat}></DonationCard>))
                        : donation.slice(0, 4).map((donat) => (
                            <DonationCard key={donat.id} donat={donat}></DonationCard>))
                }

            </div>
                {
                    donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-6 text-white mt-8 font-semibold bg-[#009444] rounded-lg py-2 mx-auto block">
                       {isShow ? "See Less" : "See All"} 
                    </button>
                }

           </div>
        }
             
    </div>;
       
};

export default Donation;