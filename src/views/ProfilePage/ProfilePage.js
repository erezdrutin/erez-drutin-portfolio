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

// Skills images:
import js from "assets/img/technologies/js.png";
import python from "assets/img/technologies/python.png";
import mssql from "assets/img/technologies/mssql.png";
import swift from "assets/img/technologies/swift.png";
import c_sharp from "assets/img/technologies/c#.png";
import c from "assets/img/technologies/c.png";
import react from "assets/img/technologies/react.png";
import elasticsearch from "assets/img/technologies/elasticsearch.png";
import mongodb from "assets/img/technologies/mongodb.png";
import redis from "assets/img/technologies/redis.png";
import docker from "assets/img/technologies/docker.png";
import openshift from "assets/img/technologies/openshift.png";
import jenkins from "assets/img/technologies/jenkins.png";
import rabbitmq from "assets/img/technologies/rabbitmq.png";
import automic from "assets/img/technologies/automic.png";
import bash from "assets/img/technologies/bash.png";
import batch from "assets/img/technologies/batch.png";
import powershell from "assets/img/technologies/powershell.png";
import css3 from "assets/img/technologies/css3.png";
import html5 from "assets/img/technologies/html5.png";
import wordpress from "assets/img/technologies/wordpress.png";
import git from "assets/img/technologies/git.png";

import profile from "assets/img/faces/profile.png";

import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

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
  // const imageSkillClasses = classNames(classes.imgRaised, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const skills_images = {
    Python: python,
    JavaScript: js,
    React: react,
    "C#": c_sharp,
    C: c,
    Swift: swift,
    Automic: automic,
    Bash: bash,
    Batch: batch,
    PowerShell: powershell,
    MSSQL: mssql,
    "Elastic Stack": elasticsearch,
    Mongo: mongodb,
    Redis: redis,
    Docker: docker,
    OpenShift: openshift,
    Jenkins: jenkins,
    RabbitMQ: rabbitmq,
    HTML: html5,
    CSS: css3,
    Git: git,
    WordPress: wordpress,
  };

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
                      DevOps Engineer / Software Engineer / FullStack Engineer
                    </h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-app-store"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fas fa-envelope"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                A passionate developer with a demonstrated history in the
                `DevOps` and Software Engineering industry. Currently serving in
                IDF as a DevOps Engineer, a position that allows me to explore a
                variety of new fields and technologies, while also working in
                Wediggit ltd as a Software Engineer, a position that allows me
                to develop myself and expand my skills.
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
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Education",
                      tabIcon: SchoolIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
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
