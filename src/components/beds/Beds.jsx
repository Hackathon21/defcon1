import React from 'react'
import styles from './beds.module.scss';

export default function Beds() {
    return (<div className={styles.main}>

        <h1>FIND Centers Near you</h1>
        <iframe width="100%" height="500px" src="https://maps.mapmyindia.com/covid-places/embed?category=HSPVCC" allow="geolocation" title="map" >
        </iframe>
    </div>)
}