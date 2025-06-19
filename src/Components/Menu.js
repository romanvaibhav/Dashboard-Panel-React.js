import React, { useEffect } from "react";
import "./Menu.css"
import Logo from "../img/logo.png";
import { FaDelicious, FaShoppingCart, FaWallet, FaChartLine, FaRegClock, FaCog, FaSignOutAlt } from "react-icons/fa";         //icons we used


function Menu(){

    useEffect(() => {
        const mainMenuLi = document
        .getElementById("mainMenu")
        .querySelectorAll("li");

        // console.log(mainMenuLi);

        function changeActive(){
            mainMenuLi.forEach((n) => n.classList.remove("active"));
            this.classList.add('active');
        }

        mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));

    }, []);

    return <menu>
        <img src={Logo} alt="" />

        <ul id="mainMenu">
            <Icon icon={<FaDelicious/> } />
            <Icon icon={<FaShoppingCart/> } />
            <Icon icon={<FaWallet/> } />
            <Icon icon={<FaChartLine/> } />
            <Icon icon={<FaRegClock/> } />

        </ul>

        <ul className="lastMenu">
            <Icon icon={<FaCog/> } />
            <Icon icon={<FaSignOutAlt/> } />
        </ul>
    </menu>;
}

// Prop - Props in React are inputs that you pass into components
// here Icon is a prop[ child of menu  component ]
const Icon = ({icon}) => (
    <li>       
        <a href="#">{icon}</a> 
        {/* this will take icon as a prop itself               */}
    </li>
);

export default Menu;  