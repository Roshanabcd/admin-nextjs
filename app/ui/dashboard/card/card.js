import React from 'react'
import styles from './card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className={styles.container}>card
    <MdSupervisedUserCircle/>
    <div className={styles.texts}>
        <span className={styles.details}>Total Users</span>
        <span className={styles.number}>2,500</span>
        <span><span className={styles.positive}>25%</span> more than previous week</span>
    </div>
    </div>

  )
}

export default Card