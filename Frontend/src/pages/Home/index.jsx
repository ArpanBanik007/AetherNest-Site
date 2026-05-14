import Hero from '../../sections/Hero';
import Statistics from '../../sections/Statistics';
import PropertyCategories from '../../sections/PropertyCategories';
import FeaturedProperties from '../../sections/FeaturedProperties';
import AIRecommendations from '../../sections/AIRecommendations';
import InvestmentSection from '../../sections/InvestmentSection';
import MortgageCalculator from '../../sections/MortgageCalculator';
import SmartHomeSection from '../../sections/SmartHomeSection';
import LuxuryAgents from '../../sections/LuxuryAgents';
import FAQ from '../../sections/FAQ';
import Testimonials from '../../sections/Testimonials';
import ContactSection from '../../sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero id="home" />
      <Statistics />
      <PropertyCategories id="categories" />
      <FeaturedProperties id="properties" />
      <AIRecommendations />
      <InvestmentSection id="investment" />
      <MortgageCalculator id="calculator" />
      <SmartHomeSection id="smart-home" />
      <LuxuryAgents id="agents" />
      <FAQ id="faq" />
      <Testimonials id="testimonials" />
      <ContactSection id="contact" />
    </>
  );
};

export default Home;
