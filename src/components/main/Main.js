import React from 'react';
import cover from "../../img/main-block.jpg";
import MainBlock from "./components-main/main-block/Main-block";
import Services from "./components-main/services/Services";
import Advantages from "./components-main/advantages/Advantages";
import Practice from "./components-main/practice/Practice";
import Whoweare from "./components-main/who-we-are/Whoweare";
import Clients from "./components-main/clients/Clients";
import Subscribe from "./components-main/subscribe/Subscribe";
import Getintouch from "./components-main/get-in-touch/Getintouch";
import Contact from "./components-main/contact/Contact";

const Main = () => {
    return (
            <main className="page">
                <MainBlock/>
                <Services/>
                <Advantages/>
                <Practice/>
                <Whoweare/>
                <Clients/>
                <Subscribe/>
                {/*<Getintouch/>*/}
                {/*<Contact/>*/}
            </main>
    );
};

export default Main;