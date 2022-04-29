import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'Jan',
    analysis: '150',
    'Active User': 1000
  },
  {
    name: 'Feb',
    analysis: '950',
    'Active User': 800
  },
  {
    name: 'Mar',
    analysis: '2300',
    'Active User': 3000
  },
  {
    name: 'Apr',
    analysis: '5',
    'Active User': 3000
  },
  {
    name: 'May',
    analysis: '2000',
    'Active User': 1000
  },
  {
    name: 'Jul',
    analysis: '41',
    'Active User': 3000
  },
  {
    name: 'Aug',
    analysis: '1',
    'Active User': 2500
  },
  {
    name: 'Sep',
    analysis: '1',
    'Active User': 4000
  },
  {
    name: 'Oct',
    analysis: '4000',
    'Active User': 6000
  },
  {
    name: 'Nov',
    analysis: '1',
    'Active User': 2000
  },
  {
    name: 'Dec',
    analysis: '1000',
    'Active User': 0
  },
];

const Chart = () => {
  return (
    <div className='w-[100%]  bg -gray-800'>
      {/* <h3>Analytics</h3> */}
      <div className='container mx-auto'>

        {/* <ResponsiveContainer className='w-full' width='80%' aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey='name' stroke='#5550bd' /> */}
        {/* <YAxis dataKey='analysis' stroke='#5550bd' /> */}
        {/* <Line type='monotone' dataKey='Active User' stroke='#5250bd' />
            <Tooltip />
            <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
          </LineChart>
        </ResponsiveContainer> */}
{/* المهنه اللي ماكنتش فيها صبى
ماينفعش تبقى فيها معلم */}
        <ResponsiveContainer className='w-full text-sm' width="100%" aspect={4 / 1} >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="analysis" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Active User" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  )
}

export default Chart