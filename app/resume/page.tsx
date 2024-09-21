"use client"; // Ensure this component runs on the client side
import React from "react";
import "../../styles/style.css";
import "../../styles/resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import Image from "next/image";
import { useState, useEffect } from "react";

// Set up the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const onButtonClick = () => {
    // Fetching the PDF file
    fetch("/resume.pdf")
        .then((response) => response.blob())
        .then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            const alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "resume.pdf";
            alink.click();
        });
};

const Resume = () => {
    const [PdfViewer, setPdfViewer] = useState<Awaited<
        typeof import("react-pdf")
    > | null>(null);

    useEffect(() => {
        import("react-pdf").then((pdfViewer) => {
            setPdfViewer(pdfViewer);
        });
    }, []);

    if (!PdfViewer) {
        return null;
    }
    return (
        <div className="Page-container bg-white p-10">
            <div className="flex justify-between pr-5">
                <Image
                    width={300}
                    height={300}
                    src="/images/wallburst.png"
                    alt="Grace bursting from the page"
                />
                <div className="button-container">
                    <p className="Heading-text">Resume</p>
                    <button onClick={onButtonClick} className="download-button">
                        Download
                    </button>
                </div>
            </div>
            <div className="pdf-container">
                <PdfViewer.Document file="/resume.pdf">
                    <PdfViewer.Page pageNumber={1} renderTextLayer={false} />
                </PdfViewer.Document>
            </div>
            <button onClick={onButtonClick}>Download</button>
        </div>
    );
};

export default Resume;
