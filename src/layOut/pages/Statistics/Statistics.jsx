
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
        
         <div className='max-w-[60vw] mx-auto flex items-center'>

        <PieChart width={700} height={700}>
            <Pie data={data} labelLine={false} outerRadius={250} fill="#FF444A" dataKey="Donation">
            
              {pieSegments}
            </Pie>
          </PieChart>
        
          <div className=''>
            <div className='text-1xl font-bold text-[#FF444A]'>Donated Item </div>
            <div className='text-1xl font-bold text-[#00C49F]'>Total Donation<span></span></div>
          </div>

         </div>
        
        
    );
};

export default Statistics;