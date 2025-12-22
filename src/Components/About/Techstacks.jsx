import React from "react"
import "./Techstacks.css"
import { FaReact, FaNodeJs, FaAws, FaVuejs, FaAngular  } from "react-icons/fa";
import {
    SiHtml5,
    SiMui,
    SiExpress,
    SiRedis,
    SiVuetify,
    SiNetlify,
    SiNestjs
  } from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
    return (
        <>
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">Skills</h2>
                <div className="techsection">
                    <div>
                        <SiJavascript />
                        <h5>Javascript</h5>
                    </div>
                    <div>
                        <SiHtml5 />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <DiCss3 />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <FaVuejs />
                        <h5>Vue</h5>
                    </div>
                    <div>
                        <FaReact />
                        <h5>Reacts</h5>
                    </div>
                    <div>
                        <FaAngular />
                        <h5>Angular</h5>
                    </div>
                    <div>
                        <FaNodeJs />
                        <h5>Nodejs</h5>
                    </div>
                    <div>
                        <SiNestjs />
                        <h5>Nestjs</h5>
                    </div>
                    <div>
                        <DiMongodb />
                        <h5>MongoDb</h5>
                    </div>
                    <div>
                        <SiExpress />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <FaAws />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <BsBootstrap />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <SiVuetify />
                        <h5>Vuetify</h5>
                    </div>
                    <div>
                        <SiMui />
                        <h5>Material UI</h5>
                    </div>
                    <div>
                        <SiRedis />
                        <h5>Redis</h5>
                    </div>
                    <div>
                        <SiNetlify />
                        <h5>Netlify</h5>
                    </div>
                    <div>
                        <VscGithub />
                        <h5>Github</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
