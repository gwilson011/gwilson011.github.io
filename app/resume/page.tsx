"use client";
import React from "react";
import "../../styles/style.css";
import "../../styles/resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("/resume.pdf").then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "resume.pdf";
            alink.click();
        });
    });
};

const Resume = () => {
    return (
        <div className="Page-container bg-white p-10">
            <div className="flex justify-between pr-5">
                <img className="w-[300px]" src="/images/wallburst.png"></img>
                <div className="button-container">
                    <p className="Heading-text">resume</p>
                    <button onClick={onButtonClick} className="download-button">
                        download
                    </button>
                </div>
            </div>
            <div className="pdf-container">
                <Document file="/resume.pdf">
                    <Page pageNumber={1} renderTextLayer={false} />
                </Document>
            </div>
            <button onClick={onButtonClick}>download</button>
        </div>
    );
};

export default Resume;
