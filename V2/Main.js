//ho usato il plugin gsap perchè volevo avere animazioni complesse legate allo scrolling
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.fromTo("#background",{//Animazione dello sfondo che cambia in apertura del sito
  background: "radial-gradient(circle at 50% 50%, #E9DECF, #716FE3, #302E87)",
} ,{
  background: "radial-gradient(circle at 100% 75%, #E9DECF, #716FE3, #302E87)",
  ease: "power1.inOut",
  duration: 5,
  delay: 0.1
});

//Funzione ShowText per le scritte che compaiono lettera per lettera
function showText(title, text) {
    const container = document.getElementById(title); // Seleziona l'elemento in cui vuoi inserire il testo
    const letters = text.split("");// Crea un array con ogni singola lettera del testo
    container.innerHTML = "";// Rimuovi il contenuto esistente nel container
    letters.forEach((letter, index) => {// Per ogni lettera, crea un elemento HTML <span> e aggiungilo al container
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0;
        container.appendChild(span);
        
    gsap.to(span, {
    opacity: 1,
    duration: 0.5,
    delay: index * 0.05,
    ease: "power2.out",
    });
});
}


//Apertura del sito compaiono le scritte e il logo
setTimeout(function(){
    showText("title", "Ciao!");
},500);

setTimeout(function(){
    showText("title1", "io sono BenSai");
},700);

gsap.fromTo("#logo", {
  opacity:0,
  rotation:180,
  scale:0.2,
},{
  rotation: 0,
  opacity: 1,
  duration: 1,
  scale: 0.5,
  ease: "power1.inOut",
});

//logo che gira mentre si scende
gsap.to("#logo", {
    scrollTrigger: { //funziona attraverso un trigger che definisce i punti di fine e inizio animazione
        trigger: ".apertura",
        scrub: true, //animazione che procede solo scrollando
      },
    rotation: 360,
    ease: "power1.inOut",
});


//versione velocizzata dell'animazione della comparsa lettera per lettera
function showTextRapid(title, text) {
    const container = document.getElementById(title);
    const letters = text.split("");
    container.innerHTML = "";
    letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0;
        container.appendChild(span);
        
        gsap.to(span, {
        opacity: 1,
        duration: 1,
        delay: index * 0.01,
        ease: "power2.out",
        });
    });
    }


//Qui inizia la comparsa delle gif e dei video ordinate come da html
//testo anziano 1
ScrollTrigger.create({
    trigger: "#digitazione1",
    start:"top 70%", // Punto di start rispetto alla finestra
    once:"true", //Si deve riprodurre una volta sola
    onEnter: function () {  //Esegui queste funzioni
      showTextRapid("title2", "Quando si parla di piante c’è");
      setTimeout(function(){showTextRapid("title3", "chi ha il pollice verde!");},200);
    },
  });
//video anziano 1
gsap.from("#video1", {
  scrollTrigger: {
    trigger: "#digitazione1",
    start:"top 70%",
  },
  opacity:0,
  delay:0.2,
  ease: "slow(0.7, 0.7, false)",
});

//testo giovane 1
ScrollTrigger.create({
    trigger: "#digitazione2",
    start:"top 70%",
    once:"true",
    onEnter: function () { 
      showTextRapid("title4", "E chi non sa");
      setTimeout(function(){showTextRapid("title5", "far crescere un cactus...");},200);
    },
  });
//video giovane 1
gsap.from("#video2", {
    scrollTrigger: {
      trigger: "#digitazione2",
      start:"top 70%",
    },
    opacity:0,
    delay:0.2,
    ease: "slow(0.7, 0.7, false)",
  });
//testo anziano 2
ScrollTrigger.create({
    trigger: "#digitazione3",
    start:"top 70%",
    once:"true",
    onEnter: function () { 
      showTextRapid("title6", "Ma non c'è dubbio,");
      setTimeout(function(){showTextRapid("title7", "veder crescere le proprie piante ");},200);
      setTimeout(function(){showTextRapid("title8", " è una soddisfazione assicurata!");},400);
    },
  });
//video anziano 2
gsap.from("#video3", {
    scrollTrigger: {
      trigger: "#digitazione3",
      start:"top 70%",
    },
    opacity:0,
    delay:0.2,
    ease: "slow(0.7, 0.7, false)",
  });
//testo giovane 2
ScrollTrigger.create({
    trigger: "#digitazione4",
    start:"top 70%",
    once:"true",
    onEnter: function () { 
      showTextRapid("title9", "O almeno non vederle morire");
      setTimeout(function(){showTextRapid("title10", "dopo pochi giorni...");},200);
    },
  });
//video giovane 2
gsap.from("#video4", {
    scrollTrigger: {
      trigger: "#digitazione4",
      start:"top 70%",
    },
    opacity:0,
    delay:0.2,
    ease: "slow(0.7, 0.7, false)",
  });
//testo giovane 3
ScrollTrigger.create({
    trigger: "#digitazione5",
    start:"top 70%",
    once:"true",
    onEnter: function () { 
      showTextRapid("title11", "C'è chi ha solo bisogno");
      setTimeout(function(){showTextRapid("title12", "di qualche consiglio");},200);
    },
  });
//testo anziano 3
ScrollTrigger.create({
    trigger: "#digitazione6",
    start:"top 70%",
    once:"true",
    onEnter: function () { 
      showTextRapid("title13", "E chi pianta da una vita,");
      setTimeout(function(){showTextRapid("title14", "non aspetta altro che essere d’aiuto");},200);
    },
  });
  //video insieme
gsap.from("#video5", {
    scrollTrigger: {
      trigger: "#video5",
      start:"top 70%",
    },
    opacity:0,
    delay:0.2,
    ease: "slow(0.7, 0.7, false)",
  });

 


  //animazione per snappare lo scrolling alla sezione
  const scrolling = {//variabile scrolling con due valori enabled e disabled
    enabled: true,
    events: "scroll,wheel,touchmove,pointermove".split(","),
    prevent: (e) => e.preventDefault(),
    disable() {//funzione per disabilitare lo scrolling
      if (scrolling.enabled) {
        scrolling.enabled = false;
        window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
        scrolling.events.forEach((e, i) =>
          (i ? document : window).addEventListener(e, scrolling.prevent, { passive: false })
        );
      }
    },
    enable() {//funzione per abilitare lo scrolling
      if (!scrolling.enabled) {
        scrolling.enabled = true;
        window.removeEventListener("scroll", gsap.ticker.tick);
        scrolling.events.forEach((e, i) =>
          (i ? document : window).removeEventListener(e, scrolling.prevent)
        );
      }
    },
  };
  
  function goToSection(section) {
    if (scrolling.enabled) {
      scrolling.disable();
      gsap.to(window, { //snap window
        scrollTo: { y: section, autoKill: false },
        onComplete: scrolling.enable,
        duration: 1,
      });
    }
  }
  ScrollTrigger.create({ //quando attivare la funzione
  trigger: ".parteBianca",
  start: "top 65%",
  onEnter: () => goToSection(document.querySelector(".parteBianca").offsetTop),
});
//fine animazione di gsap

//Comparsa della scritta con il logo accanto
ScrollTrigger.create({
  trigger: ".parteBianca",
  start:"top 65%",
  once:"true",
  onEnter: function () { 
    showTextRapid("title20", "Chiedi pure!");
    setTimeout(function(){showTextRapid("title21", "Bensai sarà sempre qui");},200);
    gsap.to("#fiore", {
      rotation: 360,
      opacity: 1,
      duration:1,
      ease: Back.easeInOut.config(1.7),
    }); 
  },
});


// intelligenza artificiale su bianco
ScrollTrigger.create({
  trigger: "#digitazione7",
  start:"top 70%",
  once:"true",
  onEnter: function () { 
    showTextRapid("title15", "Ciao! ");
    setTimeout(function(){showTextRapid("title16", "Raccontami: come sta andando la cura della monstera?");},2000);
    setTimeout(function(){showText("title17", "Davvero bene! ho rinvasato la pianta e non poteva funzionare meglio di così!");},3000);
    gsap.to(".ai", {
      duration: 1, 
      delay:1,
      background: "radial-gradient(140% 140% at 100% 75%, #E9DECF, #716FE3, #302E87)" 
     });
    gsap.from("#logoviola", { 
      opacity: 0,
      rotation:180,});
    gsap.to("#logoviola", { 
      duration: 1, 
      delay: 1,
      rotation:180,
      margin: "2% 0",
      width: "2em"});
    gsap.to("#coloreSVG", { 
      duration: 1, 
      delay: 1,
      fill:"#ffffff"});
    gsap.to("#margine", { 
      duration: 1, 
      delay: 1,
      padding: "10%% 10%",
      ease: "power2.inOut",});
    gsap.to("#title15", { 
      duration: 1, 
      delay: 1, 
      scale:0.7,
      color:"#ffffff",});
    gsap.to("#title16", { 
      duration: 1, 
      scale:0.7,
      color:"#ffffff",});
    gsap.to("#title17", { 
      duration: 1, 
      scale:0.7,});
  },
});




// sezione le mie piante
gsap.fromTo("#scheda1", {scale: 1}, {
    scrollTrigger: {
        trigger: "#scheda1",
        start: "top 80%",
        },
    scale: 0.9,
    duration: 0.1, 
    repeat: 1, 
    yoyo: true});

gsap.from(".altreschede", {
    scrollTrigger: {
        trigger: "#scheda1",
        start: "top 80%",
        },
    x: "-100%", 
    opacity: 0, 
    stagger: 0.2, 
    duration: 0.5, 
    delay: 0.3});



//sezione riscontri
gsap.from(".riscontri img", {
  scrollTrigger: {
    trigger: ".riscontri",
    start: "top 80%",
    },
  scale: 0,
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "back.out(1.7)"
});

//sezione Home
gsap.from(".item", {
  scrollTrigger: {
    trigger: ".tabella",
    start: "top 80%",
    },
  opacity: 0,
  y: -100,
  stagger: 0.05,
  duration: 1,
  ease: "power4.inOut"
});
