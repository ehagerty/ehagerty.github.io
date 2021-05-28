particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hello World!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Ed Hagerty.')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('an aspiring<br>master of the universe.')
    .pauseFor(1000)
    .deleteChars(29)
    .typeString('currently learning<br>your bank account details.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('see how smart I am at <br>github.com/ehagerty')
    .pauseFor(1000)
    .deleteAll()
    .start();
