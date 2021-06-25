import React from 'react'
import "./preloader.scss";

export default function Preloader() {
    return (<div className="mainBody">
        <section class="preloader">
            <div class="preloader__wrapper">
                <div class="preloader__circle">
                    <div class="preloader__circle-line preloader__circle-line--1"></div>
                    <div class="preloader__circle-line preloader__circle-line--2"></div>
                    <div class="preloader__circle-line preloader__circle-line--3"></div>
                    <div class="preloader__circle-line preloader__circle-line--4"></div>
                    <div class="preloader__circle-line preloader__circle-line--5"></div>
                    <div class="preloader__circle-line preloader__circle-line--6"></div>
                    <div class="preloader__circle-line preloader__circle-line--7"></div>
                    <div class="preloader__circle-line preloader__circle-line--8"></div>
                    <div class="preloader__circle-line preloader__circle-line--9"></div>
                </div>
            </div>
        </section>
    </div>)
}