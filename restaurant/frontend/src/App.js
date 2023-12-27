import React from "react";
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import {Container} from "./container/Container";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
export default function App() {
  return (
        <>
            <body>
                <Header/>
                <Container/>
                <Footer/>
            </body>
        </>
  );
}






