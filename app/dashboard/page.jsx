import React from 'react'
import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import Transection from '../ui/dashboard/transections/transections'
import Chart from '../ui/dashboard/chart/chart'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
          
        </div>
        <Transection/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard