/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-pascal-case */
import Navbar from "../components/Navbar";
import Titel from "../components/About/Titel";
import Text from "../components/About/Text";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="pt"></div>
      <Titel />
      <Text />
      <Footer />
    </div>
  );
};

export default About;
