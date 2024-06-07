import { BrushOutline, LeafOutline, RainyOutline, RibbonOutline } from "react-ionicons";
import './Services.css'; 

const Services = () => {
  const services = [
    {
      title: "Modern Design",
      icon: BrushOutline,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
    },
    {
      title: "Outdoor Solutions",
      icon: RainyOutline,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
    },
    {
      title: "Environment Friendly",
      icon: LeafOutline,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
    },
    {
      title: "Top Quality",
      icon: RibbonOutline,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
    },
  ];
  return (
    <> <h2 className="title-main" style={{alignItems : "center" ,
    marginTop : "30px"
    }}>services</h2>
    <div className="services-container">
    
      {services.map((service) => (
        <div
          key={service.title}
          className="service-item"
        >
          <service.icon
            color="black"
            font-weights ={"600"}
            width={"50px"}
            height={"50px"}
          />
          <span className="service-title">{service.title}</span>
          <p className="service-desc">{service.desc}</p>
          <a
            href="#"
            className="read-more-link"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
    </>
  );
};

export default Services;
