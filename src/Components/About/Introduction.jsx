import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/fahad_profile.jpg";

export const Introduction = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    return (
        <>
            <section id="#about">
                <div className="section" data-aos="fade-right">
                    <h2 className="section__title">About <span className="different">Me</span></h2>
                    <div className={"introduction " + themename}>
                        <div className="introduction_logocontainer">
                            <img src={profilePic} alt="Images" />
                        </div>
                        <div className="introduction_datacontainer">
                            <h4>
                                Hi Everyone, My name is{" "} <span className="different">Fahad Abdul Faheem </span> and I am based in {" "} <span className="different">{" "} Dubai, United Arab Emirates.</span>
                                . I have more than {" "}<span className="different"> 5 years </span> years of Experience as a Full Stack Developer
                                . I am proficient in a variety of technologies including populer front-end frameworks like {" "} <span className="different">Vue.Js, Angular.Js and React.Js</span>, and along side with {" "} <span className="different">NodeJs, NestJs</span> for server-side development and {" "} <span className="different">MongoDb</span> for database management
                                . My Experience extends beyond care development to {" "} <span className="different">GIT- Version Control, TCP protocols and front-end optimization techniques</span>
                                . I am also proficient in essential web development languages like {" "} <span className="different">HTML5, CSS3, JavaScript</span> and modern tools like {" "} <span className="different">ES65 and Webpack</span>.
                            </h4>
                            <h4>Terms That can describe me apart form Coding :</h4>
                            <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Blogger{" "}
                            </h4>
                            <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Chess Enthusiast{" "}
                            </h4>
                            <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Swimming{" "}
                            </h4>
                            {/* <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Content Writer{" "}
                            </h4> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}