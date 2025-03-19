"use client";
import React from "react";
import styles from "./transections.module.css";
import Image from "next/image";

const Transections = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                <span>Roshan Sharma</span>
              </td>
              <td><span className={styles.pending}>Pending</span></td>
              <td>25/03/2025</td>
              <td>$250</td>
            </tr>
            <tr>
              <td className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                <span>Roshan Sharma</span>
              </td>
              <td><span className={styles.success}>Success</span></td>
              <td>02/03/2025</td>
              <td>$290</td>
            </tr>
            <tr>
              <td className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                <span>Rush Sharma</span>
              </td>
              <td><span className={styles.cancelled}>Cancelled</span></td>
              <td>25/03/2025</td>
              <td>$250</td>
            </tr>
            <tr>
              <td className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                <span>Rakesh Sharma</span>
              </td>
              <td><span className={styles.done}>Done</span></td>
              <td>25/02/2025</td>
              <td>$250</td>
            </tr>
            <tr>
              <td className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                <span>Roshan Sharma</span>
              </td>
              <td><span className={styles.pending}>Pending</span></td>
              <td>25/03/2025</td>
              <td>$250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transections;
