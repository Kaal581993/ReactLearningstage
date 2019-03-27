'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Carousel } from 'antd';
import SEO from 'app/components/SEO';

const Home = (props) => {



    return (
        <DefaultLayout>

            <Heading
                title="Welcome to My Portfolio: I am Viral Prajapati"
            />

            <Col span={24} className="component--slider">
                <Carousel autoplay autoplaySpeed={5000}>
                <div>
                    <div className="image">
                        <img src="/images/slider/2.png" />
                    </div>
                    <div className="title">Creative People Look for examples to Make Something Elegant Designs</div>
                </div>
                    <div>
                        <div className="image">
                            <img src="/images/slider/1.png" />
                        </div>
                        <div className="title">Lets see How elegant we can start our day with a Beautiful UI</div>
                    </div>
                    <div>
                        <div className="image">
                            <img src="/images/slider/3.png" />
                        </div>
                        <div className="title">Lets see How elegant we can start our day with a Beautiful UI</div>
                    </div>
                </Carousel>
            </Col>


        </DefaultLayout>
    );

}

export default Home;
