"use client"
import React from 'react'
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import { MdOutlineChat, MdPublic, MdSearch, MdOutlineNotifications } from 'react-icons/md';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder='Search...' className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={24}/>
          <MdOutlineNotifications size={24}/>
          <MdPublic size={24}/>
        </div>
        
      </div>
    </div>
  )
}
