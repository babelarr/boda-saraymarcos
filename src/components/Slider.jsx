import React, {Component} from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme => ({
  media: {
    height: 400
  }
});

class AutoPlay extends Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };

    return (
      <Slider {...settings}>
        <CardMedia
          className={classes.media}
          image= "../images/img_slider_01.png"
        />
        <CardMedia
          className={classes.media}
          image= "../images/img_slider02.JPG"
        />
        <CardMedia
          className={classes.media}
          image= "../images/img_slider_03.png"
        />
        <CardMedia
          className={classes.media}
          image= "../images/img_slider04.JPG"
        />
        <CardMedia
          className={classes.media}
          image= "../images/img_slider05.JPG"
        />
        <CardMedia
          className={classes.media}
          image= "../images/img_slider06.JPG"
        />
      </Slider>
    );
  }
}

AutoPlay.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AutoPlay);
