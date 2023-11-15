import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getCart } from '../Utility/mehcanisim';


const Statistics = () => {
    const[donated,setDonated]=useState(0);
    const [total,setTotal]=useState(0)
    useEffect(()=>{
        const info= getCart();
    console.log(info.length)
    setDonated(info.length)
    },[]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setTotal(data.items.length))
    },[])

    
    

    const data = [
        { name: 'Total donation', value: total },
        { name: 'your donation', value: donated },

    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
      <div className='max-w-6xl mx-auto'>
          <div >
            <ResponsiveContainer  width="100%" height={700}>
                <PieChart >
                    <Pie
                       
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>


        </div>
        
        <div className='flex flex-col md:flex-row justify-center gap-10 mt-10'>
        <div className='flex gap-3'> <p className='text-lg'>{data[1].name}</p><span className='px-24 rounded-sm bg-[#00C49F]'></span></div>
            <div className='flex gap-3 '><p className='text-lg'>{data[0].name}</p><span className='px-24 rounded-sm bg-[#FF444A]'></span></div>
            
        </div>
        
      </div>
    );
};

export default Statistics;