import React from 'react'
import styles from "./home.module.scss";


export default function Home() {
    return (<div className={styles.mainBody}>
        <div className={styles.banner}>
            <h1 className={styles.headingOne}><span>STOP</span> The Spread</h1>
            <h1 className={styles.headingTwo}>Stay Home Stay <span>SAFE</span></h1>
        </div>
    </div>)
}