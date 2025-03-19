"use client"
import React from 'react'
import styles from './chart.module.css'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
const data = [
  {
    name: '2010',
    Visit: 4000,
    Click: 2400,
    order: 2400,
  },
  {
    name: '2011',
    Visit: 3000,
    Click: 1398,
    order: 2210,
  },
  {
    name: '2012',
    Visit: 2000,
    Click: 800,
    order: 2290,
  },
  {
    name: '2013',
    Visit: 2780,
    Click: 3908,
    order: 2000,
  },
  {
    name: '2014',
    Visit: 1890,
    Click: 4800,
    order: 2181,
  },
  {
    name: '2015',
    Visit: 2390,
    Click: 3800,
    order: 2500,
  },
  {
    name: '2016',
    Visit: 3490,
    Click: 4300,
    order: 2100,
  },
];


const chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Weekly Sales
      </h2>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'var(--bgSoft)', color: 'var(--textSoft)', borderRadius: 'none' }} />
          <Legend />
          <Line type="monotone" dataKey="Visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="order" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}

export default chart
