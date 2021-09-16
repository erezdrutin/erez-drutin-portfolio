/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MemoryIcon from "@material-ui/icons/Memory";
import Palette from "@material-ui/icons/Palette";
import SchoolIcon from "@material-ui/icons/School";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Skills from "components/Skills/skills.js";
import Work from "components/Work/work.js";
import Education from "components/Education/education.js";

// Importing a dictionary of images from a consts file:
import skills_images from "./SkillsConsts.js";

// Importing a dictionary of Work consts:
import work_factory from "./WorkConsts.js";

// Importing a dictionary of Education consts:
import education_factory from "./EducationConsts.js";

import profile from "assets/img/faces/profile.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header
        color="transparent"
        brand="Erez Drutin"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Erez Drutin</h3>
                    <h6>
                      Software Engineer / DevOps Engineer / FullStack Engineer
                    </h6>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://apps.apple.com/us/developer/erez-drutin/id912961642"
                      target="_blank"
                    >
                      <i className={"fab fa-app-store"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://github.com/erezdrutin"
                      target="_blank"
                    >
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.linkedin.com/in/erez-drutin-0099701aa/"
                      target="_blank"
                    >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="mailto:drutinerez3@gmail.com"
                      target="_blank"
                    >
                      <i className={"fas fa-envelope"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                A passionate developer with a demonstrated history in the
                DevOps, FullStack and Software Engineering industry. Currently
                serving in IDF as a DevOps Engineer, a position that allows me
                to explore a variety of new fields and technologies, while also
                working in Wediggit ltd as a Software Engineer, a position that
                allows me to develop myself and expand my skills.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Skills",
                      tabIcon: MemoryIcon,
                      tabContent: (
                        <Skills
                          skills={Object.keys(skills_images)}
                          images={skills_images}
                        />
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: <Work work_factory={work_factory} />,
                    },
                    {
                      tabButton: "Education",
                      tabIcon: SchoolIcon,
                      tabContent: (
                        <Education education_factory={education_factory} />
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
