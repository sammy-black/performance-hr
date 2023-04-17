import "./ServiceCard.css";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="service-card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>

      <div className="card-title">
        <h3>{title}</h3>
      </div>

      <div className="card-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
