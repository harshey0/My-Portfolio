import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Dekho",
    image: projectOne,
    description: (
      <>
        <p>
        A movie app that displays various movie lists like top-rated, upcoming, etc., along with information about every
        movie
        </p>
      </>
    ),
    github: "https://github.com/harshey0/dekhomovie",
    demo: "https://dekhoo.netlify.app/",
  },
  2: {
    title: "Weather Application",
    image: projectTwo,
    description: (
      <>
        <p>
        A simple weather web app that fetches and displays the current temperature, weather, humidity, and wind speed
details of any given city
        </p>
      </>
    ),
    github: "https://github.com/harshey0/weather",
    demo: "https://harshey0.github.io/weather/",
  },
  3: {
    title: "Discord clone",
    image: projectThree,
    description: (
      <>
        <p>
        discord clone using pure HTML and CSS
        </p>
      </>
    ),
    github: "https://github.com/harshey0/clone-discord",
    demo: "https://earnest-froyo-c4e8ec.netlify.app/",
  },
};

export default projects;