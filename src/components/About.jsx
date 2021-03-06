import React from 'react'
import sanityClient from '../client'
import '../components/css/About.css'
import Auther from '../assets/myImage.JPG'
export default function About() {
    return (
        <div className="container">
            <div className="upper">
                <div className="left">
                    <div className="image"></div>
                </div>
                <div className="right">
                    <h1>Hello! This is me satish kandel</h1>
                    <h1>About me</h1>
                    <p>
                        I have been working as a React and React native developer since 2019. This exciting opportunity appears to be a wonderful fit for my passion and field of studies.  I'm a beginner and I want to learn everything possible.
                        <br />
                        <br />
                        Talking about my experience, I worked as a Technical Support Representative at IMS Himalayan Shangrila Pvt. Ltd-one of the leading software companies in Nepal. I gained Solid Technical Skills and working habits from there. I worked there for more than a year. My job was to set up database servers, software setups, provide clients training, and provide technical support in case they needed it.
                        <br /><br />
                        I also worked in AIESEC, a non-profitable, one of the largest youth lead organizations in the world as a volunteer. I was the product manager there and lead a team of four members. I improved my communication skills and learned leadership.
                    </p>
                </div>
            </div>
        </div>
    )
}
