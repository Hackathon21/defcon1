import React, { useState, useEffect } from 'react'
import styles from "./home.module.scss";
import axios from "axios";
import CardComponent from '../card/Card,';
import { RiVirusLine } from 'react-icons/ri';
import { GiConfirmed } from 'react-icons/gi';
import { FaSkull } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { MdConfirmationNumber } from 'react-icons/md';
import Tilt from 'react-tilt';

export default function Home() {
    const [data, setData] = useState([{}]);

    // const cardData = [
    //     {
    //         heading: 'Global Stats',
    //         icon: 'GiEarthAmerica'

    //     },
    //     {
    //         heading: 'Vaccine',
    //         icon: 'GiLoveInjection'
    //     },
    //     {
    //         heading: 'India Stats',
    //         icon: 'GiIndianPalace'
    //     }

    // ];

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then((response) => {
                console.table(response.data.Countries[76]);
                setData(response.data.Countries[76]);
            })
            .catch((err) => console.log(err));
    }, []);


    return (<div className={styles.mainBody}>
        <div className={styles.banner}>
            <h1 className={styles.headingOne}><span>STOP</span> The Spread</h1>
            <h1 className={styles.headingTwo}>Stay Home Stay <span>SAFE</span></h1>

        </div>
        <div>
            <div className={styles.cardContainer}>
                <div className={styles.cardOne}>
                    <RiVirusLine className={styles.icons} />
                    <h3>COVID-19 DATA</h3>
                    <h4><span>{data.Country}</span></h4>
                </div>
                <div className={styles.cardTwo}>
                    <GiConfirmed className={styles.icons} />
                    <h3>New Confirmed</h3>
                    <h4>{data.NewConfirmed}</h4>
                </div>
                <div className={styles.cardThree}>
                    <FaSkull className={styles.icons} />
                    <h3>New Deaths</h3>
                    <h4>{data.NewDeaths}</h4>
                </div>
                <div className={styles.cardFour}>
                    <MdConfirmationNumber className={styles.icons} />
                    <h3>Total Confirmed</h3>
                    <h4>{data.TotalConfirmed}</h4>
                </div>
                <div className={styles.cardFive}>
                    <FaSkull className={styles.icons} />
                    <h3>Total Deaths</h3>
                    <h4>{data.TotalDeaths}</h4>
                </div>
                <div className={styles.cardSix}>
                    <FaHeartbeat className={styles.icons} />
                    <h3>Total Recovery</h3>
                    <h4>{data.TotalRecovered}</h4>
                </div>
            </div>
            <div className={styles.cardCompCont}>
                <h1>More Stats</h1>
                <div className={styles.cardCompContWithin}>
                    <Tilt>
                        <CardComponent />
                    </Tilt>
                    <Tilt>
                        <CardComponent />
                    </Tilt>
                    <Tilt>
                        <CardComponent />
                    </Tilt>
                </div>
            </div>
        </div>
    </div>)
}



// https://api.covid19api.com/summary