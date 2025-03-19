import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Roshan Sharma</div>
        <div className={styles.texts}>
            <span className={styles.title}>Get in touch</span>
            <p className={styles.description}>&copy; 2025 Roshan Sharma. All rights reserved. </p>
        </div>
    </div>
)
}
export default Footer