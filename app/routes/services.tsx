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
      <div
        className={`relative px-6 h-110 md:h-80 lg:h-100 xl:h-120 flex justify-center items-center text-white bg-[url('/images/vertical_backgrounds/services_page.jpg')]  md:bg-[url('/images/panaromic_backgrounds/services_page.jpg')] bg-cover bg-center    `}
      >
        <div className={`absolute inset-0 bg-black/70 md:bg-black/70`}></div>
        <div className="relative text-center z-10">
          <h1 className=" text-4xl md:text-4xl font-Times-New-Roman font-semibold ">
            Services
          </h1>
        </div>
      </div>
      {/* <Header_Img
        title="Services"
        img_src={{
          sm: "/images/vertical_backgrounds/services_page.jpg",
          md: "/images/panaromic_backgrounds/about_us.jpg",
        }}
        inset={{ sm: 0, md: 0 }}
      /> */}
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
