import React from "react";
import styles from "./Scroll.module.css";

const Scroll = () => {

  // Array of Objects each obj is Alumini of Geekster
  let arr = [
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg",
      company: "Amazon",
    },
    {
      employ:
        "https://t3.ftcdn.net/jpg/05/47/05/56/360_F_547055652_UTp7QLnRuiVl7GVOqLvtZOyOwBDi8hBB.jpg",
      company: "Amazon",
    },
  ];


  return (

    // box for the image and company of Alumini
      <div className={styles.square}>
        <div className={styles.sq}>
          {arr.map((ele, i) => (
            <div key={i} className={styles.box}>
              <img src={ele.employ} alt="jb"/>
              <p>{ele.company}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Scroll;
