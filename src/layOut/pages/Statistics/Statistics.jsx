
import { PieChart, Pie, Cell} from 'recharts';


const Statistics = () => {
   const donationItems = JSON.parse(localStorage.getItem('donation'));    
    const donationLength = donationItems.length;
    const donationMade = (donationLength * 360) / 12 ;
     
    const DonationLeft = 360 - donationMade ;
      
     const data = [
        {name: "TotalDonation" , Donation: donationMade},
        {name: "DonationLeft" , Donation: DonationLeft}, 
    ];
     const COLORS = ['#FF444A', '#00C49F'];

    const pieSegments = data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index]} />
    ));
    
    return (
        
         <div className='lg:max-w-[40vw] lg:mx-auto md:flex items-center'>

        <PieChart width={400} height={400}>
            <Pie data={data} labelLine={false} outerRadius={150} fill="#FF444A" dataKey="Donation">
            
              {pieSegments}
            </Pie>
          </PieChart>
        
          <div className='ml-40 md:ml-0'>
            <div className='text-1xl font-bold text-[#FF444A]'>Donated Item </div>
            <div className='text-1xl font-bold text-[#00C49F]'>Total Donation<span></span></div>
          </div>

         </div>
        
        
    );
};

export default Statistics;