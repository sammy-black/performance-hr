import "./CallToActionOne.css";
import Button from "../../UI/Button/Button";
import AccordionCard from "../../Accordion/Accordion";
import { Grid } from "@mui/material";

const CallToActionOne = () => {
  const accordionTitles = [
    "Competency Management",
    "Objectives and Key Results",
    "Performance Reports",
  ];

  return (
    <div id="call-action-one">
      <Grid container className="left-container">
        <Grid item xs={12} md={6}>
          <h2>Transform your team management process</h2>
          <p className="left-text">
            Keep track of your team’s contribution to your work force from a
            single dashboard.{" "}
          </p>
          <Button title="Get started" />
        </Grid>

        <Grid item xs={12} md={6} className="right-container">
          {accordionTitles.map((title) => {
            return <AccordionCard key={title} title={title} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default CallToActionOne;
