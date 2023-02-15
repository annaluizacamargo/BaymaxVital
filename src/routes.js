import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import PainScaleMain from "./components/PainScale/PainScaleMain";
import GoodScale from "./components/VoiceRecording/GoodScale";
import BadScale from "./components/VoiceRecording/BadScale";
import BaymaxVitalEnd from "./components/BaymaxVitalEnd/BaymaxVitalEnd";
import Footer from "./components/Footer";

const RoutesProject = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/" />
                <Route element={<PainScaleMain />} path="/pain-scale-assessment" />
                <Route element={<GoodScale />} path="/good-scale" />
                <Route element={<BadScale />} path="/bad-scale" />
                <Route element={<BaymaxVitalEnd />} path="/baymax-vital-end" />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesProject;
