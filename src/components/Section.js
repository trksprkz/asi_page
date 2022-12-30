import React from 'react';
import styles from "../styles/Section.module.css";
import '../index.css';
import 'animate.css';

function Section(props) {
  return (
    <wrap>


    <div className={styles.wrap}>
            <div className={styles.overlay}>

                <div className={styles.text2}>
                    <h1 className={styles.h1_enter}>{props.title}</h1>
                    <a href="https://www.tesla.com/drive"><p className={styles.p_enter}>{props.tag}</p></a>
                </div>
            </div>


      <div className={styles.buttonGroup}>
        <div className={styles.leftButton}>
            <a href='https://www.com' className={styles.leftText}>{props.leftBtnText}</a>
        </div>

        <div className={styles.rightButton}>
            <a href='https://www.com' className={styles.rightText}>{props.rightBtnText}</a>
        </div>

      </div>

      <div>
      <img src={require('../icons/image-svg.svg').default} alt='down arrow' className={styles.downArrow} />
      </div>
    </div>
    </wrap>
  )
}

export default Section
