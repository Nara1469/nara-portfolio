import React from 'react';
import Icons from './Icons';
import ResumePDF from "../images/nararesume.pdf"

export default function Resume() {
  return (
    <div>
      <h3 className="text-center text-color">Resume</h3>
      <p>Download my <a download href={ResumePDF}>Resume</a></p>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm- row-cols-md-2 row-cols-lg-2">
          <div className="col">
            <div className="mycard skill">
              <p>Front-end Proficiencies</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Media and Responsive Design</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="mycard skill">
              <p>Back-end Proficiencies</p>
              <ul>
                <li>AWS</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL and Sequelize</li>
                <li>MongoDB and Mongoose</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Icons />
    </div>
  );
}