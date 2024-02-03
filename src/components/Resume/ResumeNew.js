import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle/>
        
        <p>Here is the list of services that I can offer :</p>
        <ol>
          <li>general programming</li>
          <img src="https://apps.weber.edu/wsuimages/DOCE/badgeup/BasicProgrammingConceptsBanner-AdobeStock_348397404.jpg" 
          alt="general programming"/>
          <li>web development</li>
          <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*GaBtlHe240ZkwlcBrFczgQ.jpeg" alt="web application"/>
          <li>mobile apps</li>
          <img src="https://helios-i.mashable.com/imagery/articles/036SM7saRgnSGmvT3XNLYXQ/hero-image.fill.size_1200x900.v1623372406.jpg" 
          alt="mobile app"/>
        </ol>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
