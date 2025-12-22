import React from 'react';
import "./Timeline.css"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
    const [{ themename }] = React.useContext(ThemeContext);
    const [linecolor, setlinecolor] = React.useState(
        themename === "light" ? "#23283e" : "#fcfcfc"
    );

    React.useEffect(() => {
        if (themename === "dark") {
          setlinecolor("#fcfcfc");
        } else {
          setlinecolor("#23283e");
        }
    }, [themename]);

    return (
        <>
            <div className="section mainsection">
                <h2 className="section__title" data-aos="fade-right">My <span className="different">Timeline 💫</span></h2>
                <VerticalTimeline lineColor={linecolor}>
                    <VerticalTimelineElement date={"2025 - Present"} contentStyle={{ boxShadow: `var(--shadow)`, border: "3px solid var(--clr-primary)", backgroundColor: `var(--clr-bg)`, textAlign: "center", color: `var(--clr-fg-alt)` }} contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }} iconStyle={{ border: ` 3px solid var(--clr-primary)`, backgroundColor: `var(--clr-bg)`, color: `var(--clr-primary)` }} icon={<WorkIcon />} >
                        <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                            Elite Click Corporate Service Leaders
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                            Full Stack Developer
                        </h4>
                        <p data-aos="fade-right">
                            Designed and developed scalable web platforms across B2B inventory, social networking, wellness, and project management domains. Built secure backend architectures, real-time systems, and high-performance user interfaces using modern JavaScript frameworks. Integrated payment gateways, caching strategies, and automation workflows to enhance system reliability, performance, and user experience while maintaining clean, reusable code.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement date={"2022 - 2025"} contentStyle={{ boxShadow: `var(--shadow)`, border: "3px solid var(--clr-primary)", backgroundColor: `var(--clr-bg)`, textAlign: "center", color: `var(--clr-fg-alt)` }} contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }} iconStyle={{ border: ` 3px solid var(--clr-primary)`, backgroundColor: `var(--clr-bg)`, color: `var(--clr-primary)` }} icon={<WorkIcon />} >
                        <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                            Nathan Digital
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                            Full Stack Developer
                        </h4>
                        <p data-aos="fade-right">
                            Customizing HRMS software to precisely match with client's requirements. 
                            Seamlessly Integrating automation tools and security protocols without disrupting at all.
                            Connecting multiple databases using LRU-Cache redis technique to avoid connectivity issues and minimizing code redundancy.
                            Identifying and looking for new techniques to improve performance.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement date={"2020 - 2022"} contentStyle={{ boxShadow: `var(--shadow)`, border: "3px solid var(--clr-primary)", backgroundColor: `var(--clr-bg)`, textAlign: "center", color: `var(--clr-fg-alt)` }} contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }} iconStyle={{ border: ` 3px solid var(--clr-primary)`, backgroundColor: `var(--clr-bg)`, color: `var(--clr-primary)` }} icon={<WorkIcon />} >
                        <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                            Instacks Pvt. Ltd.
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                            Full Stack Developer
                        </h4>
                        <p data-aos="fade-right">
                            Created different types of modules for a PaaS and E-learning platform.
                            Provided responsive UI and deliver fresh experience to the end user.
                            Focused and Integrated redis in multiple modules.
                            HandsOn experience on RestAPI integration.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement date={"2017 - 2021"} contentStyle={{ boxShadow: `var(--shadow)`, border: "3px solid var(--clr-primary)", backgroundColor: `var(--clr-bg)`, textAlign: "center", color: `var(--clr-fg-alt)` }} contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }} iconStyle={{ border: ` 3px solid var(--clr-primary)`, backgroundColor: `var(--clr-bg)`, color: `var(--clr-primary)` }} icon={<SchoolIcon />} >
                        <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                            Bachelor of Technology - B.Tech(Graduate)
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                            Jawaharlal Nehru Technological University, Hyderabad
                        </h4>
                        {/* <p data-aos="fade-right">
                        Joined the Military coding school to learn Full Stack Development
                        and DSA. Also get to learn lot more other skills as well.
                        </p> */}
                    </VerticalTimelineElement>

                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Feb 2020 - Present"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<WorkIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Co-founder
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        Agricultural Training institute, Ahmednagar
                        </h4>
                        <p data-aos="fade-right">
                        Started in Feb 2020 with 3 other co-founders and provided training
                        to 20,000+ farmers and 3000+ students till now. Also honored by
                        Agri-Education Award 2021 By Agriculture Today Group.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Dec 2019 - Aug 2021"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<WorkIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Founder & Director (Part Time)
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        Sitocrats Pvt. Ltd., Parbhani (MH)
                        </h4>
                        <p data-aos="fade-right">
                        Started in Dec 2019 and delivered 15+ Projects on wordpress,
                        Angular, Nodejs and Flutter till Aug 2021.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Jul 2017 - Aug 2021"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Student [BTech. (Agril. Engineering)]
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        CAET, VNMKV University, Parbhani (MH)
                        </h4>
                        <p data-aos="fade-right">
                        Studied Agricultural Engineering which consists of all the
                        subjects accross all engineering and agricultural streams. Passed
                        with 8.32 CGPA
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"March 2017"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Student [HSC (Science)]
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        Janata Jr. College, Ruichhattishi, Ahmednagar
                        </h4>
                        <p data-aos="fade-right">
                        Studied 12th Science and Passed with 85.69 Percentage.
                        </p>
                    </VerticalTimelineElement> */}

                    <VerticalTimelineElement icon={<StarRateIcon />} iconStyle={{ border: ` 3px solid var(--clr-primary)`, backgroundColor: `var(--clr-bg)`, color: `var(--clr-primary)` }}></VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}