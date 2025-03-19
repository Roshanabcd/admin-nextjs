import React from 'react'
import styles from "../../ui/dashboard/products/products.module.css"
import Search from "../../ui/dashboard/search/search"
import Link from 'next/link'
import Image from 'next/image'
import Pagination from "../../ui/dashboard/pagination/pagination"

const Products = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <Search placeholder="Search for product..." />
            <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
            </Link>
            </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>Stock</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.product}>
                            <Image src="/noproduct.jpg " alt="User" width={50} height={50} className={styles.productImage}/>
                            <div className={styles.productInfo}>
                                <div className={styles.productName}>Samsung M31</div>
                            </div>
                        </div>
                    </td>
                    <td>Description</td>
                    <td>NRP 200000</td>
                    <td>2023-01-01</td>
                    <td>20</td>
                    <td>Active</td>
                    <td>
                        <Link href="/dashboard/products/add">
                            <button className={`${styles.button} ${styles.View}`}>Add</button>
                        </Link>
                        <Link href="/dashboard/products/edit">
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

export default Products