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

      <div className="row service-items">
        {servicesData.map((service) => {
          return (
            <div  key={service.title} className="col-12 col-sm-5 col-md-4 col-lg-3">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            </div>
          );
        })}
      </div>
   
    </section>
  );
};

export default Services;
