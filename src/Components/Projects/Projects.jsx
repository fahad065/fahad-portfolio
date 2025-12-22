import React, {useState} from "react";
import "./Projects.css"
import { FaReact, FaVuejs } from "react-icons/fa";
import {
    SiBootstrap,
    SiVuetify,
    SiExpress,
    SiRedis,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiAngular,
    SiNextdotjs
  } from "react-icons/si";
import NetFlixDashboard from "../../assets/Netflix/netflix_dashboard.png";
import AmazonDashboard from "../../assets/Amazon/Amzon_Dashboard.png";
import Covid19Dashboard from "../../assets/Covid19/covid19_dashboard.png";
import InsuranceDashboard from "../../assets/Insurance/insurance_dashboard.png"
import InsuranceFinance from "../../assets/Insurance/insurance_finance.png"
import InsuranceRequests from "../../assets/Insurance/insurance_requests.png"
import InsuranceCycles from "../../assets/Insurance/insurance_cycles.png"
import InsuranceCategories from "../../assets/Insurance/insurance_categories.png"
import InsuranceProviders from "../../assets/Insurance/insurance_providers.png"
import WeatherForecastDashboard from "../../assets/Weather Forecast/weather_forecast_dashboard.png"
import GoldnLadies1 from "../../assets/GoldnLadies/Goldn-Ladies-1.png"
import GoldnLadies2 from "../../assets/GoldnLadies/Goldn-Ladies-2.png"
import GoldnLadies3 from "../../assets/GoldnLadies/Goldn-Ladies-3.png"
import GoldnLadies4 from "../../assets/GoldnLadies/Goldn-Ladies-4.png"
import GoldnLadies5 from "../../assets/GoldnLadies/Goldn-Ladies-5.png"
import GoldnLadies6 from "../../assets/GoldnLadies/Goldn-Ladies-6.png"
import Breadth1 from "../../assets/Breadth/breadth-1.png"
import Breadth2 from "../../assets/Breadth/breadth-2.png"
import Breadth3 from "../../assets/Breadth/breadth-3.png"
import Breadth4 from "../../assets/Breadth/breadth-4.png"
import Breadth5 from "../../assets/Breadth/breadth-5.png"
import Breadth6 from "../../assets/Breadth/breadth-6.png"
import AlAbrar1 from "../../assets/AlAbrar/al-abrar-1.png"
import AlAbrar2 from "../../assets/AlAbrar/al-abrar-2.png"
import AlAbrar3 from "../../assets/AlAbrar/al-abrar-3.png"
import AlAbrar4 from "../../assets/AlAbrar/al-abrar-4.png"
import AlAbrar5 from "../../assets/AlAbrar/al-abrar-5.png"
import AlAbrar6 from "../../assets/AlAbrar/al-abrar-6.png"
import AlAbrar7 from "../../assets/AlAbrar/al-abrar-7.png"
import AlAbrar8 from "../../assets/AlAbrar/al-abrar-8.png"
import AlAbrar9 from "../../assets/AlAbrar/al-abrar-9.png"
import AlAbrar10 from "../../assets/AlAbrar/al-abrar-10.png"



// Carousel component to encapsulate state for each carousel
const Carousel = ({ images, altPrefix }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const moveCarousel = (direction) => {
        setCurrentSlide(prevSlide => {
            const newSlide = (prevSlide + direction + images.length) % images.length;
            return newSlide;
        });
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                    >
                        <a href={image} target="_blank" rel="noopener noreferrer">
                            <img src={image} alt={`${altPrefix} ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={() => moveCarousel(-1)}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={() => moveCarousel(1)}>
                &#10095;
            </button>
        </div>
    );
};

export const Projects = () => {

    // Define image arrays for each project
    const goldnLadiesImages = [
        GoldnLadies1, GoldnLadies2, GoldnLadies3, 
        GoldnLadies4, GoldnLadies5, GoldnLadies6
    ];

    const insuranceImages = [
        InsuranceDashboard, InsuranceProviders, InsuranceCategories,
        InsuranceCycles, InsuranceRequests, InsuranceFinance
    ];

    const breadthImages = [
        Breadth1, Breadth2, Breadth3,
        Breadth4, Breadth5, Breadth6
    ]

    const alabrarImage = [
        AlAbrar1, AlAbrar2, AlAbrar3, AlAbrar4, AlAbrar5,
        AlAbrar6, AlAbrar7, AlAbrar8, AlAbrar9, AlAbrar10
    ]

    return (
        <>
            <div className="section">
                <h2 className="section__title different">Projects</h2>
                <div className="allProjects">
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <Carousel images={goldnLadiesImages} altPrefix="Goldn Ladies" />
                            </div>
                            <div className="project_information">
                                <h2>GOLDN Socialista Application</h2>
                                <p>
                                    The GOLDN Socialista App is designed to connect, inspire, and empower women entrepreneurs. This comprehensive digital platform includes a mobile app for 
                                    members and a centralized admin portal for the GOLDN team, bringing the entrepreneurial community
                                    right to users’ fingertips. Through interactive events, dynamic group chats, curated content, and exclusive partner collaborations,
                                    the app fosters meaningful connections, idea sharing, and professional growth. 
                                    The admin portal enables the GOLDN team to efficiently manage members, events, and partnerships, ensuring a seamless experience across the platform.
                                </p>
                                <div>
                                    <FaVuejs />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiVuetify />
                                    <SiRedis />
                                </div>
                                <div>
                                    <a href="https://goldnsocialista.com" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt onbt">See this Live</span>
                                    </a>
                                    {/* <a href="https://github.com/fahad065/Netflix-Clone-Using-React-JS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <Carousel images={alabrarImage} altPrefix="Goldn Ladies" />
                            </div>
                            <div className="project_information">
                                <h2>Al Abrar Application</h2>
                                <p>
                                    Developed a guided Islamic meditation platform that promotes spiritual well-being through structured exercises, 
                                    personalized suggestions, and gamified rewards. Built a comprehensive system featuring user portals with 
                                    unique content, a reward system for unlocking spiritual paths, daily Islamic quotes, AI-powered 
                                    recommendations, and an integrated store with Stripe payments. Created a centralized admin portal for 
                                    content management, making it a secure digital sanctuary for spiritual reflection and growth.
                                </p>
                                <div>
                                    <FaVuejs />
                                    <FaReact />
                                    <SiNextdotjs />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiVuetify />
                                    <SiRedis />
                                </div>
                                <div>
                                    {/* <a href="https://breadth.ae/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt onbt">See this Live</span>
                                    </a> */}
                                    {/* <a href="https://github.com/fahad065/Netflix-Clone-Using-React-JS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <Carousel images={breadthImages} altPrefix="Goldn Ladies" />
                            </div>
                            <div className="project_information">
                                <h2>Breadth Inventory System & E-commerce Website</h2>
                                <p>
                                    Developed an integrated B2B platform combining a comprehensive inventory management system with an e-commerce portal. Built complete inventory workflows (products, suppliers, warehouses) and dual portals: a client-facing portal for browsing products and submitting RFQs, and an admin portal for managing inventory, orders, and analytics. Enabled seamless B2B communication with real-time stock updates and automated quotation generation.
                                </p>
                                <div>
                                    <FaVuejs />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiVuetify />
                                    <SiRedis />
                                </div>
                                <div>
                                    <a href="https://breadth.ae/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt onbt">See this Live</span>
                                    </a>
                                    {/* <a href="https://github.com/fahad065/Netflix-Clone-Using-React-JS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <Carousel images={insuranceImages} altPrefix="Insurance" />
                            </div>
                            <div className="project_information">
                                <h2>Insurance Portal - MEVN Stack</h2>
                                <p>
                                    Providing comprehensive insurance coverage to all employees, including principal members and their dependents, across various departments. 
                                    Effectively managing diverse insurance requests such as enrollment, cancellation, and upgrade requests. 
                                    Handling invoice calculations for both suppliers and clients. 
                                    Integrating configurable features such as request process flows, notification triggers, and bulk insurance card uploads to streamline operations.<br />
                                    {" "} <span className="different">Note:</span> Due to company policy, I am unable to share the GitHub repository or live URL. However, I have attached sample screenshots that demonstrate the Portal's appearance and functionality for your reference.
                                </p>
                                <div>
                                    <FaVuejs />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiVuetify />
                                    <SiRedis />
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={NetFlixDashboard} alt="Netflix Dashboard" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Netflix Clone - MERN Stack</h2>
                                <p>This project "Netflix Clone" is created using MERN(ReactJs,ExpressJs,NodeJs,MongoDB) stack technology and currently I am displaying all the movie content using Netflix API. Whenever user clicks on any movie/series thumbnail, I am playing respective trailer.</p>
                                <div>
                                    <FaReact />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiBootstrap />
                                </div>
                                <div>
                                    <a href="https://netflix-clone-f870e.web.app/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt onbt">See this Live</span>
                                    </a>
                                    <a href="https://github.com/fahad065/Netflix-Clone-Using-React-JS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={WeatherForecastDashboard} alt="Weather Forecast Dashboard" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Weather Forecast - ReactJs</h2>
                                <p>
                                    This project "Weather Forecast" is created using ReactJs technology and currently I am getting response based on country wise from open source OpenWeather API and it will show data for upto next 6 days.
                                </p>
                                <div>
                                    <FaReact />
                                    <SiBootstrap />
                                </div>
                                <div>
                                    <a href="https://fahad065-weather-app-react.netlify.app/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">See this Live</span>
                                    </a>
                                    <a href="https://github.com/fahad065/weather-forecast-app-reactjs" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={AmazonDashboard} alt="Amazon Dashboard" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Amazon Clone - MEAN Stack</h2>
                                <p>
                                    This project "Amazon Clone" is created using MEAN(AngularJs,ExpressJs,NodeJs,MongoDB) stack technology and currently I am displaying some of the items and user can "Add to Cart" those items. Payment integration will be live very soon.
                                </p>
                                <div>
                                    <SiAngular />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiBootstrap />
                                </div>
                                <div>
                                    <a href="https://amazon-clone-angular-js.netlify.app/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">See this Live</span>
                                    </a>
                                    <a href="https://github.com/fahad065/Amazon-Clone-Using-AngularJS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={Covid19Dashboard} alt="Covid19 Dashboard" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Covid-19 Tracker - AngularJs</h2>
                                <p>
                                    This project "Covid-19 Tracker" is created using Angular Js framework. In this, I am using external global api which will return some of the data like confirmed, active, deaths records as per globally and country wise. 
                                </p>
                                <div>
                                    <SiAngular />
                                    <SiBootstrap />
                                    <SiJavascript />
                                </div>
                                <div>
                                    <a href="https://covid19-tracker-angular-js.netlify.app/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">See this Live</span>
                                    </a>
                                    <a href="https://github.com/fahad065/Covid-19-Tracker-Using-AngularJS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
