import { Grid } from "@mui/material";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      content: [
        "Technical Hiring",
        "CoreHR Software",
        "Payroll Management",
        "People Management",
      ],
    },

    {
      title: "Company",
      content: ["About us", "FAQs", "Talk to an expert"],
    },

    {
      title: "Legal",
      content: ["Terms & Conditions", "Privacy"],
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <footer>
        <Grid container className="footer-menu-container">
          <Grid item xs={12} sm={12} md={4} className="footer-logo">
            <Logo height="50px" />
            <p className="logo-text">The AI-backed tech resourcing platform</p>
          </Grid>

          <Grid item xs={12} sm={12} md={7}>
            <div className="footer-sections">
              {footerSections.map((section) => {
                return (
                  <div key={section.title}>
                    <h6>{section.title}</h6>
                    <ul>
                      {section.content.map((content) => {
                        return <li key={content}>{content}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>

        <hr />
        <div className="copyright">
          <p>Copyright RendaHR. {year} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
