particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
const instance = new Typewriter("#typewriter", {
  loop: true,
});

instance
  .typeString("wake up Neo...")
  .pauseFor(1000)
  .deleteAll()
  .typeString("You like Kung Fu?")
  .pauseFor(1000)
  .deleteAll()
  .typeString("what if what goes around actually just keeps on going?")
  .pauseFor(1000)
  .deleteAll()
  .typeString("what if what goes up started going sideways?")
  .pauseFor(1000)
  .deleteAll()
  .typeString("what would Kirk do?")
  .pauseFor(1000)
  .deleteAll()
  .typeString("when everything is urgent, nothing is")
  .pauseFor(1000)
  .deleteAll()
  .typeString("when anything is optional, everything is")
  .pauseFor(1000)
  .deleteAll()
  .typeString("pizza, with a side order of justice")
  .pauseFor(1000)
  .deleteAll()
  .typeString("find one in every car. You'll see")
  .pauseFor(1000)
  .deleteAll()
  .typeString("there's one about an enormous fish which you haven't heard")
  .pauseFor(1000)
  .deleteAll()
  .typeString("it's like being jealous of a bag of sand")
  .pauseFor(1000)
  .deleteAll()
  .start();
