import React from 'react';
import styles from "./footer.module.scss";

export default function Footer() {
    return (<div className={styles.footerContainerMain}>
        <div className={styles.footerTextMain}>
            <span className={styles.footerTextTeam}>Collection Of efforts by Team <span className={styles.defcon}>DEFCON1</span></span>
            <span className={styles.heart}>
                &nbsp; &nbsp;
                <i className="fa fa-heart" />
            </span>
        </div>

        {/* <div className="footer-bottom">
      Copyright &copy; 2021 CSI student chapter IPEC . All rights reserved
      Rahul kumar.
    </div> */}
    </div>)
}