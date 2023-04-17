import { Grid } from "@mui/material";
import "./Hero.css";
import Button from "../UI/Button/Button";
import hero from "../../assets/images/hero.png"

const Hero = () => {
  return (
    <section id="hero">
      <Grid container >
        <Grid item xs={12} md={6}  className="desc-container">
          <h1 className="hero-title">Challenge your people for Improved performance.</h1>
          <p className="hero-desc">Create a culture and work environment that attracts demanding and hungry young talents.</p>
          <Button title="Get Started"/>
        </Grid>

        <Grid item xs={12} md={6}>
            <div className="hero-img-container">
                <img className="hero-img" src={hero} alt="renda hr" />
            </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
