import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div>
            <h1 className='text-2xl mt-5 text-orange-500 font-bold'>DashBoard</h1>

            <div className='grid grid-cols-2 gap-4 items-center mx-20 my-10'>
            <div>
            <LineChart width={400} height={400} data={data}>
            <Line dataKey={'revenue'} type="monotone"></Line>
            <Line dataKey={'investment'} type="monotone"></Line>
            <Line dataKey={'sell'} type="monotone"></Line>
            <Tooltip></Tooltip>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
        </LineChart>
        </div>

        <div>
            <AreaChart 
            width={500} height={400}
            data={data}
            margin={{top:10,right:30,left:0, bottom:0,}}
            >
                <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis dataKey={'sell'}></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey={'sell'} stroke="#8884d8" fill='#8884d8'></Area>

            </AreaChart>

        </div>

        </div>
        </div>

        
    );
};

export default Dashboard;