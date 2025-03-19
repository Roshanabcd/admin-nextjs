import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'
import { SlArrowRight } from "react-icons/sl";


const rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt=""  fill className={styles.image} />

        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Available Now</span>
          <h3>How to use the new version of the admin dashboard?</h3>

          <span className={styles.title}>Take 4 minutes to learn</span>
          <p className={styles.description}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur doloremque doloribus, natus non saepe repellendus molestias vitae quia aperiam repellat libero ad, inventore corrupti nulla dolore maxime sunt quaerat.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            <span>Watch Video</span>
          </button>
        </div>

      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt=""  fill className={styles.image} />

        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Coming Soon</span>
          <h3>New server actions are available, partial pre-rendering is comming up!</h3>

          <span className={styles.title}>Boost your production</span>
          <p className={styles.description}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur doloremque doloribus, natus non saepe repellendus molestias vitae quia aperiam repellat libero ad, inventore corrupti nulla dolore maxime sunt quaerat.</p>
          <button className={styles.button}>
            <SlArrowRight/>
            <span>Learn More</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default rightbar