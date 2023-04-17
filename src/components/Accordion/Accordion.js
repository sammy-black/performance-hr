import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.css";

const AccordionCard = ({title}) => {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordion-title">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-desc">
            RendaHR can be used for monitoring on-site employees, remote
            employees, WFH employees, field teams, sales teams and marketing
            teams.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionCard;
