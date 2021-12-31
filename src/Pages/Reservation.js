import React from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Div_Reservation } from "../components/reservation-components/Div_Reservation";

export const Reservation = () => {
    return (
        <>
            <Navbar />
            <Div_Reservation />
            <Footer />
        </>
    )
}