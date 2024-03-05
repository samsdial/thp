import CarouselOne from "../assets/carrosel/01.png";
import BgDepartments from "../assets/gallery/bg-departments.png";
import BgEyeCare from "../assets/gallery/bg-eye-care.png"; //
import Corrector from "../assets/gallery/corrector.png"; //imgSrc: "",
import EyeCare from "../assets/gallery/eye-care.png"; //
import Fisioterapia from "../assets/gallery/fisioterapia.png"; // imgSrc: "",
import Ortesis from "../assets/gallery/ortesis.png"; // imgSrc: "",
import Pgeneral from "../assets/gallery/pgeneral.png"; //imgSrc: "",
import Plantillas from "../assets/gallery/plantillas.png"; //imgSrc: "",
import Pterapeutico from "../assets/gallery/pterapeutico.png"; // assets/gallery/pterapeutico.png

const NavbarData = {
  contact: {
    phone: {
      number: "57+ 350 650 3396",
      link: "https://api.whatsapp.com/send/?phone=573506503396&text=%C2%A1Recupera+la+salud+de+tus+pies%21+Pregunta+ya+c%C3%B3mo+agendar+tu+cita+hoy+mismo.+Quiero+agendar+mi+cita.&type=phone_number&app_absent=0",
    },
    address: {
      barrio: "Bogotá,",
      text: "Trans 60 #115-58 CL 116 con Av Suba CC Ilarco, Torre: A - Consultorio: 504",
      link: "https://goo.gl/maps/wV154JB3mfVPjPKs9",
    },
    email: {
      text: "therapiesbog@gmail.com",
      link: "mailto:therapiesbog@gmail.com?subject=Contacto%20desde%20ProEspecies%20web&body=%0AMensaje%20para%20el%20mailto%20de%20una%20empresa%20de%20molienda%20de%20alimentos%20secos%20y%20deshidratados%3A%0A%0AAsunto%3A%20Informaci%C3%B3n%20sobre%20servicios%20de%20molienda%20de%20alimentos%0A%0ACuerpo%20del%20mensaje%3A%0AMe%20pongo%20en%20contacto%20con%20usted%20para%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20molienda%20de%20alimentos%20que%20ofrece%20su%20empresa.%0A%0AEstoy%20interesado%2Fa%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20siguientes%20servicios%3A%0A%0APicado%0APulverizado%0AMicropulverizado%0A%C2%BFPodr%C3%ADa%20facilitarme%20informaci%C3%B3n%20sobre%20los%20siguientes%20aspectos%3F%0A%0APrecios%0ATiempos%20de%20entrega%0ACapacidad%20de%20producci%C3%B3n%0AAgradecer%C3%ADa%20mucho%20su%20atenci%C3%B3n%20a%20esta%20solicitud.",
    },
    attention: {
      week: "7:00 am a 7:00 pm.",
      sat: "7:00 am a 2:00 pm",
    },
  },
  brand: {
    text: "therapies",
    link: "index.html",
  },
  copy: {
    text: "Design by dialstudios @ 2021",
    link: "/",
  },
  links: [
    { id: "home", text: "Inicio", href: "#home" },
    { id: "service", text: "Servicios", href: "#service" },
    { id: "especilist", text: "Especialistas", href: "#especilist" },
    { id: "testimony", text: "Testimonios", href: "#testimony" },
    { id: "contact", text: "Contacto", href: "#contact" },
  ],
  social: [
    {
      id: "instagram",
      text: "Instagram",
      href: "https://www.instagram.com/proespecias?utm_source=qr&igsh=MXhrbm52cW0zc3U5NA==",
    },
  ],
  contactButton: {
    text: "¡AGENDA AHORA!",
    href: "https://wa.me/573506503396?text=¡Recupera%20la%20salud%20de%20tus%20pies!%20Pregunta%20ya%20cómo%20agendar%20tu%20cita%20hoy%20mismo.%20Quiero%20agendar%20mi%20cita.",
    className:
      "btn btn-lg btn-primary rounded-pill rounded-pill order-1 order-lg-0 ms-lg-4",
  },
};

const CarouselData = [
  {
    image: CarouselOne, // Reemplaza con la ruta de la imagen correspondiente si es necesario
    title:
      "Especialistas en <strong>podología</strong> para la <strong>rehabilitación</strong> de tus Pies.",
    description:
      "Nuestros podólogos están altamente capacitados y tienen años de experiencia en la prevención, diagnóstico y tratamiento de las patologías de los pies.",
    button1: {
      text: "AGENDA TU CITA AHORA !",
      className:
        "btn btn-lg btn-primary rounded-pill rounded-pill order-1 order-lg-0 ms-lg-4",
      href: "#contact",
    },
  },
];

const ServiceData = [
  {
    serviceSection: {
      style: {
        backgroundImage: `url(${BgDepartments})`,
        backgroundPosition: "top center",
        backgroundSize: "contain",
      },
      title: "SERVICIOS",
    },
    services: [
      {
        imgSrc: Pterapeutico,
        title: "Pedicure terapéutico",
      },
      {
        imgSrc: Plantillas,
        title: "Plantillas personalizadas",
      },
      {
        imgSrc: Pgeneral,
        title: "Podología general",
      },
      {
        imgSrc: Corrector,
        title: "Corrector de uñas",
      },
      {
        imgSrc: Fisioterapia,
        title: "Fisioterapia",
      },
      {
        imgSrc: Ortesis,
        title: "Órtesis digitales",
      },
    ],
  },
];

const EyeCareData = [
  {
    section: {
      style: {
        backgroundImage: `url(${BgEyeCare})`,
        backgroundPosition: "top center",
        backgroundSize: "contain",
      },
    },
    content: {
      image: EyeCare,
      title: "Tu bienestar empieza desde la raiz",
      paragraph:
        "En nuestro centro especializado en el cuidado del pie, estamos listos para brindarte soluciones efectivas para cualquier problema o patología que puedas tener.",
      paragraphTwo:
        "Desde uñas encarnadas y hongos en las uñas, hasta talagias, juanetes, dedos en garra y dedos en martillo, nuestro equipo de especialistas en podología está altamente capacitado para diagnosticar y tratar cualquier problema en tus pies. Además, ofrecemos servicios de pedicure terapéutico y asesoría personalizada para garantizar el mejor cuidado de tus pies. Puedes confiar en nosotros para brindarte el cuidado y la atención que necesitas para mantener tus pies sanos y felices.",
      call: "¡Contáctanos para programar tu consulta y empezar a cuidar de tus pies hoy mismo!",
      button: "¡AGENDE SU CITA AHORA!",
    },
  },
];

export { CarouselData, EyeCareData, NavbarData, ServiceData };
