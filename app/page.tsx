import AboutSection from "../components/home/AboutSection";
import CTASection from "../components/home/CTASection";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import PracticeAreasSection from "../components/home/PracticeAreasSection";
// import TestimonialSection from "../components/home/TestimonialSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <PracticeAreasSection />
      <AboutSection />
      {/* <TestimonialSection /> */}
      <CTASection />
    </Layout>
  );
};
export default Home;
