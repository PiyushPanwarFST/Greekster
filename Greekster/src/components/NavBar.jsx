import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
    <nav>
        <div className={styles.Name}>
            <h2>Geekster</h2>
        </div>

        {/* Navigation bar items */}
        <div className={styles.Courses}>
            <p>Full Stack - MERN</p>
            <p>Data Science & Gen-AI</p>
            <p>Level Up</p>
            <p>Masterclass</p>
        </div>

        {/* Both buttons for signIn and Callback */}
        <div className={styles.button}>
        <button className={styles.btn1}>Sign In</button>
        <button className={styles.btn2}>Request a Callback <i className={styles.icon}class="fa-solid fa-phone"></i></button>
        </div>
    </nav>   
    </>
  )
}

export default NavBar;
