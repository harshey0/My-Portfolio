import projectOne from "../assets/project-2.png";
import projectTwo from "../assets/project-1.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
  1: {
    title: "Reyy's Shoes",
    image: projectOne,
    description: (
      <>
        <p>A robust e-commerce platform built with React.js, Express.js, Node.js, MongoDB, and other modern technologies. Features include user-friendly browsing, OAuth 2.0 authentication for secure logins, Nodemailer for automated emails, JWT for session management, and Stripe integration for payments & an Admin role for full control over users, products, and orders.</p>
     
        </>
    ),
    github: "https://github.com/harshey0/Reyy-s-Shoes",
    demo: "https://reyy-s-shoes.vercel.app/",
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