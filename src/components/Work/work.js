/* eslint-disable react/prop-types */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

/**
 * A functional component in charge of generating a "Work" section for the Profile page.
 * @param {*} props: Variables that the function receives and uses.
 * @returns: A functional component.
 */
export default function Work(props) {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { work_factory } = props;
  // const imageSkillClasses = classNames(classes.imgRaised, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <>
      <GridContainer justify="center">
        {work_factory.map((work, index) => (
          <GridItem xs={12} sm={12} md={4} key={index}>
            <h3>{work.title}</h3>
            <p>{work.desc}</p>
            <a href={work.img_href} target="_blank" rel="noreferrer">
              <img
                alt={work.img_alt}
                src={work.img}
                className={navImageClasses}
                style={{ border: "2px", borderColor: "black" }}
              />
            </a>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
}
