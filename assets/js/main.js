particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
/*
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    life: {
      duration: {
        sync: false,
        value: 3,
      },
      count: 0,
      delay: {
        random: {
          enable: true,
          minimumValue: 0.5,
        },
        value: 1,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
});
*/
var myArr = [
  "test",
	"Wake up, Neo...",
	"you like Kung Fu?",
	"what if what goes around actually didn't?",
	"what if what goes up didn't actually come down?",
	"what would Kirk do?",
	"when everything is urgent, nothing is",
	"when anything is optional, everything is",
	"pizza, with a side order of justice",
	"find one in every car. You'll see",
	"there's one about an enormous fish which you haven't heard",
	"it's like being jealous of a bag of sand",
	"Why is it that when I read 'It supports both C and C++ development' all I can think is 'we play both kinds of music, country and western'",
	"like my grandma used to say, 'f*ck me, no f*ck you!'",
];

const instance = new Typewriter("#typewriter", {
	loop: true,
	autostart: true,
	delay: "natural",
	deleteSpeed: "natural",
	strings: [
		"test",
		"Wake up, Neo...",
		"you like Kung Fu?",
		"what if what goes around actually didn't?",
		"what if what goes up didn't actually come down?",
		"what would Kirk do?",
		"when everything is urgent, nothing is",
		"when anything is optional, everything is",
		"pizza, with a side order of justice",
		"find one in every car. You'll see",
		"there's one about an enormous fish which you haven't heard",
		"it's like being jealous of a bag of sand",
		"Why is it that when I read 'It supports both C and C++ development' all I can think is 'we play both kinds of music, country and western'",
		"like my grandma used to say, 'f*ck me, no f*ck you!'",
	],
});
