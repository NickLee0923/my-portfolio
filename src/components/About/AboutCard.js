import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everybody, my name is <span className="purple"> Kun-Yuan(Nick) Lee </span>
            from <span className="purple"> New Taipei City, Taiwan.</span>
            <br />
            I am currently studying sofeware engineering with a focus on AI at Centennial College Progress campus.
            <br />
            I have previously completed a MSc degree in International Hospitality Management at BHMS in Switzerland.
            <br />
            <br />
            Aside from learning how to write code, there are some other things that I love to do in my  spare time!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching American TV shows and movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't give up, it's not over yet!!!"{" "}
          </p>
          <footer className="blockquote-footer">Kun-Yuan(Nick) Lee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
