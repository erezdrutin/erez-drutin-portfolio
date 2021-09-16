/* eslint-disable react/prop-types */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const { skills, images } = props;
  console.log("AYOOO SKILL INNER: ", skills);
  console.log("AYOOO IMAGES: ", images);
  const classes = useStyles();
  const imageSkillClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <>
      <GridContainer justify="center">
        {skills.map((skill, index) => (
          // eslint-disable-next-line react/jsx-key
          <GridItem xs={2} sm={2} md={2} key={index}>
            <img
              src={images[skill]}
              alt={skill}
              className={imageSkillClasses}
            />
            <p style={{ marginTop: "5px" }}>{skill}</p>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
}
