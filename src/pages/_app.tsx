import { useEffect, useState } from "react";

import NavBar from "../components/navigation/NavBar";
import HomeStart from "../components/home/HomeStart";
import ParallaxImage from "../components/UI/images/ParallaxImage";
import HomeAbout from "../components/home/HomeAbout";
import HomeGallery from "../components/home/HomeGallery";
import Footer from "../components/footer/Footer";
import ReviewImageCarousel from "../components/UI/carousels/ReviewImageCarousel";
import HomeTechnologies from "../components/home/HomeTechnologies";
import ContactForm from "../components/forms/ContactForm";

import bg from '../assets/bg_image.png';
import { carouselData } from "../data/reviewCarousel.data";
import '../styles/index.scss';
import HomeQuestions from "../components/home/HomeQuestions";
import HomeSteps from "../components/home/HomeSteps";
import HomeDecoration from "../components/home/HomeDecoration";


export default function App() {
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(window.innerWidth);
      setWidth(window.innerWidth)
    }, 1000);

    return () => { clearInterval(interval) };
  }, []);

  return (
    <div className="app">
      <NavBar />
      <HomeDecoration />
      <ParallaxImage image={bg} />
      <HomeStart />
      <HomeAbout />
      <HomeTechnologies />
      <HomeSteps screenWidth={width} />
      <HomeQuestions />
      <ReviewImageCarousel data={carouselData} screenWidth={width} />
      <HomeGallery />
      <ContactForm />
      <Footer />
    </div>
  );
}