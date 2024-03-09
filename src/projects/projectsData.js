import projectOne from "../assets/project-2.png";
import projectTwo from "../assets/project-1.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
  1: {
    title: "reyyTech",
    image: projectOne,
    description: (
      <>
        <p>
        MERN-based e-commerce tech website offering seamless browsing, secure transactions, and dynamic product man-
agement for streamlined online shopping experiences.
        </p>
      </>
    ),
    github: "https://github.com/harshey0/reyyTech",
    demo: "https://reyytech.onrender.com/",
  },
  2: {
    title: "Dekho",
    image: projectTwo,
    description: (
      <>
        <p>
        A movie app that displays various movie lists like top-rated, upcoming, etc., along with information about every
movie.
        </p>
      </>
    ),
    github: "https://github.com/harshey0/dekhomovie",
    demo: "https://dekhoo.netlify.app/",
  },
  3: {
    title: "Discord clone",
    image: projectThree,
    description: (
      <>
        <p>
        Discord clone using pure HTML and CSS.
        </p>
      </>
    ),
    github: "https://github.com/harshey0/clone-discord",
    demo: "https://harshey0.github.io/clone-discord/",
  },
  4: {
    title: "Weather App",
    image: projectFour,
    description: (
      <>
        <p>
        A simple weather web app that fetches and displays the current temperature, weather, humidity, and wind speed details of any given city.
        </p>
      </>
    ),
    github: "https://github.com/harshey0/weather",
    demo: "https://harshey0.github.io/weather/",
  },
};

export default projects;