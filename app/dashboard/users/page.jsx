import React from 'react'
import styles from "../../ui/dashboard/users/users.module.css"
import Search from "../../ui/dashboard/search/search"
import Link from 'next/link'
import Image from 'next/image'
import Pagination from "../../ui/dashboard/pagination/pagination"

const UsersPage = ({placeholder}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <Search placeholder="Search" />
            <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
            </Link>
            </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png   " alt="User" width={50} height={50} className={styles.userImage}/>
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>Roshan Sharma</div>
                            </div>
                        </div>
                    </td>
                    <td>roshan.sharma@gmail.com</td>
                    <td>2023-01-01</td>
                    <td>Administrator</td>
                    <td>Active</td>
                    <td>
                        <Link href="/dashboard/users/edit">
                            <button className={`${styles.button} ${styles.View}`}>View</button>
                        </Link>
                        <Link href="/dashboard/users/edit">
                            <button className={`${styles.button} ${styles.Delete}`}>Delete</button>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination />
    </div>
  )
}

export default UsersPage