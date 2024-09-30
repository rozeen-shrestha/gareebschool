import CNAV from "@/components/navbar/page";
import CFOOTER from "@/components/footer/page";
import CONTACT from "@/components/contact/page";
import Faculty from "@/components/faculty/page";
import FEATURES from "@/components/features/page";
import VISION from "@/components/vision/page";

const About = () => {
  return (
    <>
      <CNAV />
      <FEATURES/>
    <VISION/>
      
<Faculty/>
      <CONTACT/>

      <CFOOTER/>
    </>
  );
};

export default About;
