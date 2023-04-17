import { Grid } from "@mui/material";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";
import agile from "../../assets/images/agile.png";
import autonomous from "../../assets/images/Autonomous.png";
import continuous from "../../assets/images/Continuous.png";
import productive from "../../assets/images/Productive.png";

const Services = () => {
  const servicesData = [
    {
      icon: agile,
      title: "Agile Collaboration",
      desc: "RendaHR employee payroll system is accessed online, making it easy to calculate salaries with various benefit components.",
    },

    {
      icon: autonomous,
      title: "Autonomous Teams",
      desc: "Optimized employee information and attendance recording and easy to calculate online attendance directly from the app.",
    },

    {
      icon: continuous,
      title: "Continuous Engagement",
      desc: "Companies can implement various working hour regulations. With RendaHR,  managing working hours becomes easier.",
    },

    {
      icon: productive,
      title: "Productive Remote Working",
      desc: "There is a real-time employee performance analysis feature in one place. Such as productivity data on the app.",
    },
  ];

  return (
    <section id="services">
      <h2 className="service-title">
        Align individual, team and company goals for success.
      </h2>
      <p className="service-desc">
        Whatever your organization strategy is, you can create an inventory of
        all competencies needed to get the job done.
      </p>

      <Grid container gap={2} columns={{xs: 12, sm: 12, md: 16 }} className="service-items">
        {servicesData.map((service) => {
          return (
            <Grid key={service.title} item  xs={12} sm={5} md>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default Services;
