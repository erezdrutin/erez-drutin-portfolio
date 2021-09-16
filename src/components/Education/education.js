/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

/**
 * A functional component in charge of generating a "Educations" section for the Profile page.
 * @param {*} props: Variables that the function receives and uses.
 * @returns: A functional component.
 */
export default function Education(props) {
  const { education_factory } = props;

  return (
    <>
      <GridContainer justify="center">
        {education_factory.map((education, index) => (
          // eslint-disable-next-line react/jsx-key
          <GridItem xs={12} sm={12} md={4} key={index}>
            <h2>{education.title}</h2>
            <h4>Institution: {education.institution}</h4>
            <h4>Years: {education.years}</h4>
            <h4>Subject(s): {education.subject}</h4>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
}
