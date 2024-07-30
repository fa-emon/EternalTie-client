import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection";
import PremiumSection from "../PremiumSection/PremiumMember/PremiumMember";
import SuccessCounterSection from "../SuccessCounterSection/SuccessCounterSection";
import SuccessStorySection from "../SuccessStorySection/SuccessStorySection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EternalTie | Home</title>
      </Helmet>
      <Banner></Banner>
      <PremiumSection></PremiumSection>
      <HowItWorksSection></HowItWorksSection>
      <SuccessCounterSection></SuccessCounterSection>
      <SuccessStorySection></SuccessStorySection>
    </div>
  );
};

export default Home;
