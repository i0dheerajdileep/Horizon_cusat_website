import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
// import cusat from '../assets/img/cus/

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>Welcome to Team Horizon CUSAT! We are a dynamic and ambitious club at Cochin University, focused on robotics and technology. Our mission is to design cutting-edge rovers for real-world challenges and excel in national and international competitions. Through workshops, training, and hands-on projects, we develop skills in mechanical design, electronics, programming, and autonomy. We foster collaboration and a culture of innovation, inspiring our members to push boundaries and constantly learn. Join Team Horizon CUSAT to be part of a passionate community, exploring the exciting world of robotics and making significant contributions to the field. Together, we reach new horizons in technology</p>                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
