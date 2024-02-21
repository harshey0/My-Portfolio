import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Discord Bot",
    image: projectOne,
    description: (
      <>
        <p>
          A Discord Music Bot with
          Lavalink , wavelink offers Role Assignment and music streaming
          experience.
        </p>
      </>
    ),
    github: "https://github.com/harshey0/music-bot",
    demo: "https://discord.com/oauth2/authorize?client_id=1123608305122676838&permissions=8&scope=bot",
  },
  2: {
    title: "Parking slot detector",
    image: projectTwo,
    description: (
      <>
        <p>
        Detects free parking slot in video.
        </p>
      </>
    ),
    github: "https://github.com/harshey0/parking-Slot",
    demo: "https://drive.google.com/file/d/1LQ6Y5nc2Qnxws6DGKLTtOd7lA-znA0WS/view?usp=sharing",
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