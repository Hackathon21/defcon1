import React, { useState, useEffect } from 'react'
import styles from "./home.module.scss";
import axios from "axios";
import CardComponent from '../card/Card,';
import { RiVirusLine } from 'react-icons/ri';
import { GiConfirmed } from 'react-icons/gi';
import { FaSkull } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { MdConfirmationNumber } from 'react-icons/md';
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';

export default function Home() {
    const [data, setData] = useState([{}]);

    const cardData = [
        {
            heading: 'Global Stats',
            icon: 'https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-globeworldinternethotel--flat-color-icon--vector-icon-bann-png-image_1488225.jpg'

        },
        {
            heading: 'Vaccine',
            icon: 'https://freepngimg.com/download/syringe/58558-medicine-vector-graphics-syringe-injection-anesthesia.png'
        },
        {
            heading: 'India Stats',
            icon: 'http://www.clipartbest.com/cliparts/niB/MGB/niBMGBdXT.png'
        },
        {
            heading: 'Oxygen',
            icon: 'https://img.flaticon.com/icons/png/512/421/421358.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
        },
        {
            heading: 'Covid Beds',
            icon: 'https://img.icons8.com/officel/2x/hospital-bed.png'
        }

    ];

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
                <h1><span>More Stats</span></h1>
                <div className={styles.cardCompContWithin}>
                    <Link to="/global">
                        <Tilt>
                            <CardComponent title={cardData[0].heading} icon={cardData[0].icon} />
                        </Tilt>
                    </Link>
                    <Link to="/vaccine" >
                        <Tilt>
                            <CardComponent title={cardData[1].heading} icon={cardData[1].icon} />
                        </Tilt>
                    </Link>
                    <Link to="/states" >
                        <Tilt>
                            <CardComponent title={cardData[2].heading} icon={cardData[2].icon} />
                        </Tilt>
                    </Link>
                    <Tilt>
                        <CardComponent title={cardData[3].heading} icon={cardData[3].icon} />
                    </Tilt>
                    <Link to="/beds">
                        <Tilt>
                            <CardComponent title={cardData[4].heading} icon={cardData[4].icon} />
                        </Tilt>
                    </Link>
                </div>

            </div>
        </div>

    </div>)
}



// https://api.covid19api.com/summary