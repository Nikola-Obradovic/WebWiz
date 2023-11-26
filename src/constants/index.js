import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  White_background,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "O nama",
  },
  {
    id: "work",
    title: "Usluge",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Znanje",
    icon: web,
  },
  {
    title: "Saradnja",
    icon: mobile,
  },
  {
    title: "Iskustvo",
    icon: backend,
  },
  {
    title: "Uspjeh",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Vođenje TikTok naloga",

    icon: White_background,
    iconBg: "#fff",
    // date: "March 2020 - April 2021",
    points: ["Short-form content je jedna od najefikasnijih metoda marketinga današnjice. Wincome je u toku sa današnjim trendovima i koristi provjerene strategije rasta. Kreiranjem kratkih videozapisa privlačimo potencijalne kupce i našim klijentima omogućavamo eksplozivan rast."],
  },
  {
    title: "Vođenje Instagram naloga",

    icon: White_background,
    iconBg: "#fff",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Naša usluga vođenja Instagram profila obuhvata sve aspekte ove platforme. Kreiramo visokokvalitetan sadržaj za profil, aktivno sudjelujemo u komunikaciji, privlačimo nove pratioce te potičemo konverzije i ulazak u prodajni kanal.",
    ],
  },
  {
    title: "Oglašavanje",

    icon: White_background,
    iconBg: "#fff",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Plaćeno oglašavanje predstavlja ključni korak prema sigurnim prodajnim rezultatima. Naš tim stručnjaka specijaliziran je za kreiranje kampanja na najvažnijim online platformama poput Facebook-a, Instagram-a, Google-a i Youtube-a.",
    ],
  },
  {
    title: "Kreiranje website-a",

  icon: White_background,
    iconBg: "#fff",
    // date: "Jan 2023 - Present",
    points: ["Uspostavljanje website-a dobar je izbor za profesionalno predstavljanje jedne kompanije. Ova usluga obuhvata web dizajn, pisanje prodajnog teksta i web development."],
  },
  {
    title: "Grafički dizajn",

  icon: White_background,
    iconBg: "#fff",
    // date: "Jan 2023 - Present",
    points: ["Od kreacije jedinstvenog logotipa koji održava identitet vašeg brenda, preko razvoja brend identiteta putem boja, tipografije i stilskog priručnika, do dizajna vizit karti, brošura i flajera koji se ističu. Također, nudimo izradu atraktivnih promotivnih materijala za vaše proizvode i usluge."],
  },
  {
    title: "Kreiranje tekstualnog sadržaja",

  icon: White_background,
    iconBg: "#fff",
    // date: "Jan 2023 - Present",
    points: ["Našim klijentima nudimo pisanje scenarija za TikTok, Reels ili Youtube klipove, te sastavljanje teksta za Instagram objave ili blogove."],
  },
  {
    title: "Branding i rebranding",

  icon: White_background,
    iconBg: "#fff",
    // date: "Jan 2023 - Present",
    points: ["Bilo da novim kompanijama pomažemo u utemeljenju brenda ili već postojećim nudimo novi izgled, Wincome je tu za vas. Kreacijom upečatljivog logotipa i slogana te biranjem odgovarajućih boja i stila komunikacije omogućujemo vam da privučete željenu publiku i prikažete glavne vrijednosti vašeg brenda."],
  },
  {
    title: "Prodajne kampanje",

  icon: White_background,
    iconBg: "#fff",
    // date: "Jan 2023 - Present",
    points: ["Naša stručnost obuhvata raznovrsne kampanje i provjerene pristupe usmjerene na postizanje prodajnih ciljeva. Izdvajamo se u kampanjama poput giveaway, Black Friday, praznične kampanje (Dan Zaljubljenih, Osmi mart, Nova godina...), kampanja povodom rođendana tvrtke i drugih inovativnih pristupa."],
  },
  
];

const testimonials = [
  {
    title: "Mjesečna saradnja",
    testimonial:
      "Mjesečnom saradnjom klijenti dolaze do efikasnih rezultata. Radom na duže staze fokus je na specijalne potrebe klijenta i stalnom napretku. Ovaj tip saradnje traje minimalno 2 mjeseca i namijenjen je kompanijama koje teže konstantnom razvoju biznisa.",
   // name: "Sara Lee",
   // designation: "CFO",
    //company: "Acme Co",
   // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    title: "Jednokratna saradnja",
    testimonial:
      "Jednokratna saradnja predstavlja učinkovit i fokusiran pristup ostvarivanja konkretnih ciljeva. Ovaj paket je namijenjen za postizanje brzih rezultata, čineći ga savršenim za brendove koji traže brzo i efikasno rješenje. Ovaj tip saradnje traje 3-6 mjeseci.",
   // name: "Chris Brown",
   // designation: "COO",
    //company: "DEF Corp",
    //image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
];

const projects = [
  {
    name: "Poslovne Novine",
    description:
      "Wincome je ostvario saradnju sa Poslovnim Novinama kreiranjem short-form videozapisa. Poslovne Novine su firma koja bilježi već 36 godina postojanja, educirajući ljude o najuspješnijim imenima Bosne i Hercegovine i regiona.",
    tags: [
      {
     //   name: "react",
        color: "blue-text-gradient",
        
      },
      {
    //    name: "mongodb",
        color: "green-text-gradient",
      },
      {
      //  name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Gold River Bunica",
    description:
      "Ključni aspekt ovog projekta bilo je stvaranje kratkih videozapisa s ciljem promovisanja restorana te ponuda splavarenja i kampovanja namijenjenim ljubiteljima avanture i prirode.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
   // source_code_link: "https://github.com/",
  },
  {
    name: "Ukrasne Lajsne",
    description:
      "Usluge nudimo i u obliku proizvodnje vizit kartica i letaka, nudeći širok izbor dizajn opcija. Na taj način ostvarili smo kontinuiranu saradnju sa kompanijom Ukrasne Lajsne.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
