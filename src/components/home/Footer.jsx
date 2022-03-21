import React from "react";
import { Button, Grid, Typography, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Paper className="footer" elevation={4}>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <div className="footer-contact">
            <Typography variant="h5" className="bold-text">
              Let's Talk
            </Typography>
            <Typography variant="body1">
              If you like this project or the idea behind it, you can check my
              GitHub for more projects, or use the given information for
              contacting me.
            </Typography>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/luka_tegeltija/"
                target={`_blank`}
              >
                <img src="https://img.icons8.com/ios/25/000000/instagram-new--v2.png" />
              </a>
              <a href="https://github.com/lukateg" target={`_blank`}>
                <img src="https://img.icons8.com/ios/25/000000/github--v2.png" />
              </a>
              <a
                href="https://www.linkedin.com/in/luka-tegeltija-b302a322a/"
                target={`_blank`}
              >
                <img src="https://img.icons8.com/ios/25/000000/linkedin--v2.png" />
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className="footer-info">
            <span>
              <Typography variant="subtitle1" className="bold-text">
                <MailIcon fontSize="small" className="contact-icon" />
                Email
              </Typography>
              <a
                target={`_blank`}
                href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=new"
                className="footer-link"
              >
                tegeltijaformal@gmail.com
              </a>
            </span>
            <span>
              <Typography variant="subtitle1" className="bold-text">
                <PhoneIcon fontSize="small" className="contact-icon" />
                Phone
              </Typography>
              <a
                href="tel:0652445540"
                className="footer-link"
                target={`_blank`}
              >
                (+381) 65 244 5540
              </a>
            </span>
            <span>
              <Typography variant="subtitle1" className="bold-text">
                <LocationOnIcon fontSize="small" className="contact-icon" />
                Address
              </Typography>
              <a
                href="https://www.google.com/maps/place/%D0%92%D0%B8%D0%B4%D0%BE%D0%B2%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0+2c,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4/@44.7957482,20.4888407,17z/data=!4m5!3m4!1s0x475a70795436ff6d:0x16b896dfcf1437ef!8m2!3d44.7947128!4d20.4887871"
                className="footer-link"
                target={`_blank`}
              >
                Vidovdanska 2c, Vracar, Beograd
              </a>
            </span>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
