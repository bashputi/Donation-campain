import { PieChart, Pie } from 'recharts';


const Statistics = () => {
    const data = [
        {name: "gg" , students: 400},
        {name: "ge" , students: 40},
        {name: "ee" , students: 800}
    ];


    return (
        
          

         <div>
             <PieChart width={700} height={700}>
            <Pie  cx="50%" cy="50%" labelLine={false} data={data} dataKey="students" outerRadius={250} fill='#FF444A' />
            
          </PieChart>
         </div>
        
        
    );
};

export default Statistics;