import React from 'react'
import styles from "../styles/Enterpage.module.css"
import '../index.css'
import videoBg from '../video/video.mp4'
import 'animate.css';
import { Link } from 'react-router-dom'

function Enterpage() {
  return (
    <wrap>


        <div className={styles.wraps}>
            <div className={styles.overlay}>

                <div className={styles.text}>

                    <Link to="/*" style={{ textDecoration: 'none', textDecorationColor: '#000', textUnderlineOffset: '2px'}}><h1 className={styles.h1}>AERIAL SERVICES</h1></Link>
                    <Link to="/*" style={{ textDecoration: 'none' }}><p className={styles.p}>(Click to enter)</p></Link>

                </div>

            </div>
            <div className={styles.darkened}>
              <video src={videoBg} autoPlay loop muted className={styles.div} />
            </div>
        </div>
    </wrap>
  )
}

export default Enterpage
