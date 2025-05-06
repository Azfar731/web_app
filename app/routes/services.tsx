import Header_Img from "~/components/Header_img";
import servicesData from "~/data/services.json";
import Service_Card from "~/components/Service_card";
import Intro_Line from "~/components/Intro_Line";
import { FaScaleBalanced } from "react-icons/fa6";
export default function Services() {
  const serviceCards = servicesData.map((service, index) => (
    <Service_Card
      key={index}
      title={service.title}
      imgSrc={service.img_src}
      description={service.description}
      direction={index % 2 === 0 ? "left" : "right"}
    />
  ));

  return (
    <div>
      <Header_Img
        title="Services"
        img_src="team-page.jpg"
        inset={{ sm: 50, md: 80 }}
      />
      <div className="bg-gray-100 pt-20 pb-12 md:pb-24 px-6 md:px-18 lg:px-24 xl:px-30 flex flex-col gap-8 text-gray-900 font-EBGaramond">
        <Intro_Line
          text="Khalil & Khalil provides results-driven legal services for individuals, businesses, and institutions, grounded in deep expertise in Pakistani law and judicial processes"
          Icon={FaScaleBalanced}
        />
        {serviceCards}
      </div>
    </div>
  );
}
