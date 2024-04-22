import React from 'react'
import styles from './Main.module.css';

const Main = () => {
  return (
    <>
    <main>
        <div className={styles.hero}>
            <section className={styles.secton1}>
                <p className={styles.para1}>India's Tech  School  for  the</p>
                <p className={styles.para2}>Future  World !</p>
                <p>Become a top 1% professional in Full Stack Development and Data Science</p>
                <div className={styles.box}>
                    <div className={styles.box1}>
                    <p className={styles.num}>1000 +</p>
                    <span className={styles.text}>Students Placed</span>
                </div>
                    <div className={styles.box2}>
                        <p className={styles.num}>8.2 LPA</p>
                        <span className={styles.text}>Average CTC</span>
                    </div>
                    <div className={styles.box3}>
                        <p className={styles.num}>33 LPA</p>
                        <span className={styles.text}>Highest CTC Job Offer</span>
                    </div>
                    <div className={styles.box4}>
                        <p className={styles.num}>800+</p>
                        <span className={styles.text}>Hiring Partners</span>
                    </div>
                </div>
            </section>
            <section className={styles.secton2}>
                <img src="https://images.geekster.in/meta/header.png" alt="image" className={styles.image}></img>
            </section>   
        </div>
    <button className={styles.btn2}>Request a Callback <i className={styles.icon} class= "fa-solid fa-phone"></i></button>
    </main>    
    </>
  )
}

export default Main;
