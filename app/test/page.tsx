"use client";
import React from "react";

import { SmoothScroll } from "../components/horizontal/index";

import "./styles.scss";

const App = () => (
    <SmoothScroll>
        <div className="thumbnails">
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
        </div>
    </SmoothScroll>
);

export default App;
