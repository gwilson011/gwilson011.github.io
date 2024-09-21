"use client"; // Ensure this component runs on the client side
import React from "react";
import "../../styles/style.css";
import "../../styles/resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import Image from "next/image";
import { useState, useEffect } from "react";

// Set up the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;

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
        console.log(PdfViewer);
    }, []);

    if (!PdfViewer) {
        console.log(PdfViewer);
        return null;
    }
    return (
        <div className="flex flex-col ml-[30%] w-[60%] justify-start bg-white h-[1450px] p-10">
            <div className="flex justify-between pr-5">
                <Image
                    width={300}
                    height={300}
                    src="/images/wallburst.png"
                    alt="Grace bursting from the page"
                />
                <div className="button-container">
                    <p className="Heading-text">resume</p>
                    <button onClick={onButtonClick} className="download-button">
                        download
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
