'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';
import SEO from 'app/components/SEO';

const About = (props) => {

    return (
        <DefaultLayout>
        <Row type="flex" className="component--Photo">
          <div className="image">
            <a className="image">
              <img src="/images/Photo0372.jpg" className="image"/>
              </a>
              </div>
          </Row>
          <div className="aboutme">
            <Heading
                title="I am Veeral Prajapati"
                subtitle="Trello inspired Productivity Application built using the awesome React, Ant Design, Apollo Client and other fantastic Libraries."
            />
            <Col span={14} offset={5} style={{ marginTop: 0 }}>
                <p>
                This is Me, building a frontend website and learning how to build A frontend Website
                Using React with some SEO implementation, Content writing & putting my CSS Designing
                Skillset Effort to Build a React based Static Web Application for the Web Development
                </p>
            </Col>
            </div>
            <Heading
                subtitle="Education:"
            />
            <Col span={14} offset={5} style={{ marginTop: 40 }}>
                <p>
                SSC: The Bishop's School, Bhayandar West<br></br>
                <p></p>
                Diploma: MSBTE Affiliated Maratha mandir's Babasaheb Gawde Institute Of Technology<br></br>
                <p></p>
                Bachlor's Degree: Btech Computer Science: NMIMS Shirpur Campus<br></br>
                </p>
            </Col>
            <Heading
                subtitle="Personal Background:"
            />
            <Col span={14} offset={5} style={{ marginTop: 40 }}>
                <p>
                Ethnicity : Indian<br></br>
                <p></p>
                From: Maharashtra<br></br>
                Natively From: Gujrat<br></br>
                <p></p>
                Spoken Languages known: Hindi, English, Gujrati, Marathi<br></br>
                </p>
            </Col>

        </DefaultLayout>
    );

}

export default About;
