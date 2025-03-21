import React from 'react'
import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink'
import Link from 'next/link'
import {
  MdDashboard,
  MdSupervisedUserCircle,  
  MdShoppingBag,
  MdAttachMoney,           
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdWork,
  MdHelpCenter,
  MdLogout
} from 'react-icons/md';
import Image from 'next/image';

const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Users", path: "/dashboard/users", icon: <MdSupervisedUserCircle /> },
      { title: "Products", path: "/dashboard/products", icon: <MdShoppingBag /> },
      { title: "Transactions", path: "/dashboard/transactions", icon: <MdAttachMoney /> },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/dashboard/reports", icon: <MdAnalytics /> },
      { title: "Teams", path: "/dashboard/teams", icon: <MdPeople /> },
    ],
  },
  {
    title: "User",
    list: [
      { title: "Settings", path: "/dashboard/settings", icon: <MdOutlineSettings /> },
      { title: "Help", path: "/dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="" width={50} height={50} />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Roshan Sharma</span>
          <span className={styles.userTitle}>Administrator </span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat)=>(
        <li key={cat.title} >
          <span className={styles.cat}>{cat.title}</span>
          {
            cat.list.map(item=>(
              <MenuLink item={item} key={item.title}/>
            ))}
        </li>
      ))}</ul>
      <button className={styles.logout}>Logout
        <MdLogout/>
      </button>
    </div>
  )
}
