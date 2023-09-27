import DonationsCard from "./DonationsCard";


const Donations = ({donations}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 lg:mt-24 ml-12 md:ml-8 lg:ml-2">
            {
                donations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
            }
        </div>
    );
};

export default Donations;