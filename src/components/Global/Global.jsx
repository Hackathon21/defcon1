import React, { useState, useEffect } from 'react'
import axios from "axios";
import styles from "./global.module.scss";

export default function Global() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then((response) => {
                console.table(response.data.Countries);
                setData(response.data.Countries);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className={styles.containerMain}>
            <div className={styles.country}>
                <h3>COUNTRY NAME</h3>
                {data.map((items, index) => (
                    <h6 key={index}>{items.Country}</h6>
                ))}
            </div>
            <div className={styles.country}>
                <h3>New Confirmed</h3>
                <div className={styles.Center}>
                    {data.map((items, index) => (
                        <h6 key={index}>{items.NewConfirmed}</h6>
                    ))}
                </div>
            </div>
            <div className={styles.country}>
                <h3>New Deaths</h3>
                <div className={styles.Center}>
                    {data.map((items, index) => (
                        <h6 key={index}>{items.NewDeaths}</h6>
                    ))}
                </div>
            </div>
            <div className={styles.country}>
                <h3>Total Confirmed</h3>
                <div className={styles.Center}>
                    {data.map((items, index) => (
                        <h6 key={index}>{items.TotalConfirmed}</h6>
                    ))}
                </div>
            </div>
            <div className={styles.country}>
                <h3>Total Deaths</h3>
                <div className={styles.Center}>
                    {data.map((items, index) => (
                        <h6 key={index}>{items.TotalDeaths}</h6>
                    ))}
                </div>
            </div>
            <div className={styles.country}>
                <h3>Total Recovered</h3>
                <div className={styles.Center}>
                    {data.map((items, index) => (
                        <h6 key={index}>{items.TotalRecovered}</h6>
                    ))}
                </div>
            </div>
        </div>
    )
}