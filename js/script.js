



function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

const marqueeText = document.getElementById('newsOfTheWorld');


const who = [
    "a doctor", "an engineer", "a teacher", "an artist", "a baker", 
    "a lawyer", "an athlete", "a writer", "a dancer", "an accountant", 
    "a musician", "a scientist", "a nurse", "a chef", "a librarian", 
    "a farmer", "an actor", "a carpenter", "a singer", "a firefighter", 
    "a mechanic", "a photographer", "a designer", "a coach", "a poet", 
    "a magician", "a sailor", "a zookeeper", "an archaeologist", "a detective", 
    "a philosopher", "an astronaut", "a judge", "a janitor", "a pilot", 
    "a soldier", "a journalist", "a scientist", "a poet", "a plumber", 
    "a bodyguard", "a tailor", "a sculptor", "a builder", "a hairdresser", 
    "an architect", "a programmer", "a researcher", "a shopkeeper", "a clown", 
    "a bus driver", "an inventor", "a dentist", "a tattoo artist", "a bodyguard", 
    "a politician", "a construction worker", "a truck driver", "a therapist", 
    "a fashion designer", "a chemist", "a personal trainer", "a farmer", 
    "a surgeon", "a waiter", "a cleaner", "a librarian"
];


const what = [
    "ran a marathon", "solved a puzzle", "read a book", "baked a cake", 
    "wrote a novel", "won a race", "made a painting", "designed a building", 
    "taught a class", "performed a surgery", "wrote a song", "fixed a car", 
    "climbed a mountain", "taught a lesson", "rescued a kitten", "visited a museum", 
    "built a house", "played a concert", "mended a fence", "organized a charity event", 
    "attended a wedding", "helped a friend", "repaired a computer", "cleaned a room", 
    "started a fire", "bought groceries", "gave a speech", "fought in a war", 
    "became a parent", "caught a fish", "escaped a burning building", "rode a bike", 
    "moved to a new city", "sang a song", "delivered a baby", "skipped school", 
    "taught a dog a trick", "climbed a tree", "rode a horse", "grew a garden", 
    "organized a protest", "completed a marathon", "purchased a house", "started a business", 
    "designed a website", "held a meeting", "traveled to Paris", "ran an experiment", 
    "hosted a party", "adopted a pet", "saved a life", "invented a gadget", 
    "won a trophy", "watched a movie", "played chess", "gave an interview", 
    "painted a mural", "wrote a letter", "watched a sunset",

    "got married",
    "started a war",
    "ended a war",
    "murdered",
    "kicked a child",
    "set up a pyramid scheme",
    "tried to end the world",
    "committed tax fraud",
    "built a nuclear device",
    "accidentally won a hot dog eating contest",
    "invented a perpetual motion machine"
];


const where = [
    "at the park", "in a hospital", "in a studio", "at the beach", 
    "on a mountain", "in the city", "in a library", "on the moon", "in a café", 
    "in a courtroom", "on a farm", "in a zoo", "in the forest", "on a boat", 
    "at a concert", "in a stadium", "in a museum", "at a friend's house", 
    "in a foreign country", "on a bus", "in a plane", "at a wedding", 
    "in the jungle", "in an office", "at a campsite", "in a restaurant", 
    "on a train", "at the zoo", "on an island", "in a car", "on the beach", 
    "in a library", "in a restaurant", "on a road trip", "in a barn", 
    "in a desert", "on a cruise ship", "in a high-rise", "in a basement", 
    "in the mountains", "in a bakery", "at a sports field", "at a gym", 
    "in a treehouse", "in a nightclub", "in an airplane", "in a graveyard", 
    "in a gym", "on a rooftop", "at a festival", "in a small town", 
    "on the street", "in a castle", "at a hospital", "at an airport", 
    "in a shopping mall", "on a farm", "in an alley", "on a pier", 
    "in a tower", "at a railway station", "on a hill", "at a wedding reception", 
    "in an amusement park", "on a riverbank", "at a public square",    
    "in Canada", "in Japan", "in Brazil", "in Germany", "in Australia", 
    "in France", "in Italy", "in India", "in the United States", 
    "in Spain", "in Mexico", "in South Africa", "in Argentina", "in China", 
    "in the United Kingdom", "in Russia", "in Egypt", "in Turkey", 
    "in South Korea", "in Sweden", "in Norway", "in Finland", "in Greece", 
    "in Portugal", "in New Zealand", "in Poland", "in Vietnam", "in Thailand", 
    "in Indonesia", "in Malaysia", "in Singapore", "in Colombia", "in Chile", 
    "in Israel", "in Kenya", "in Morocco", "in Nigeria", "in Peru", 
    "in the Philippines", "in Saudi Arabia", "in the Netherlands", "in Belgium", 
    "in Switzerland", "in Austria", "in Denmark", "in Ireland", "in Hungary", 
    "in the Czech Republic", "in Romania", "in Slovakia", "in Bulgaria", 
    "in Ukraine", "in Qatar", "in Kuwait", "in Egypt", "in Jordan", 
    "in Lebanon", "in Tunisia", "in Sri Lanka", "in Bangladesh", "in Nepal",
    "in Iran"
];

const options = {
    weekday: "long",
    day: "numeric",
    month: "long", 
    year: "numeric",
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: false      
};

function generateRandomMessage() {
    const randomWho = who[getRandomInt(who.length)];
    const randomWhat = what[getRandomInt(what.length)];
    const randomWhere = where[getRandomInt(where.length)];
    return (new Date().toLocaleString(navigator.language, options)) + `, ${randomWho} ${randomWhat} ${randomWhere}.`;
}

const animateMarquee = () => {
    marqueeText.classList.remove("animate");
    // Force reflow to restart the animation
    void marqueeText.offsetWidth;
    marqueeText.classList.add("animate");
    marqueeText.textContent = generateRandomMessage();
};

const scheduleNextAnimation = () => {
    const delay = Math.random() * 60000;
    setTimeout(animateMarquee, delay);
};

marqueeText.addEventListener("animationend", scheduleNextAnimation);

animateMarquee();

//DELTARUNE timer
/*
const countdownElement = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};
  
let targetTime = new Date("2025-06-05T00:00:00-04:00");

function startCountdown() {
    const update = () => {
        const diff = targetTime - new Date();

        if (diff <= 0) {         
            clearInterval(interval);

            const dayInMilliseconds = 86400000;
            
            if(diff < -dayInMilliseconds)
                document.getElementById("countdown").textContent = "DELTARUNE YESTERDAY!!!";
            else if(diff < -(dayInMilliseconds * 2))
                document.getElementById("countdown").textContent = "DELTARUNE HOWEVER MANY DAYS AGO!!!";
            else 
                document.getElementById("countdown").textContent = "DELTARUNE TODAY!!!";

            return;
        }

        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);

        countdownElement.days.textContent = days;
        countdownElement.hours.textContent = String(hours).padStart(2, "0");
        countdownElement.minutes.textContent = String(minutes).padStart(2, "0");
        countdownElement.seconds.textContent = String(seconds).padStart(2, "0");
    };

    const interval = setInterval(update, 1000);
    update(); // run immediately so you don’t wait a full second  
}

startCountdown();

if(getRandomInt(1000) == 0){
    let goAway = false;

    const img = document.createElement("img");
    img.src = "./img/gaster.gif";
    const deltarune = document.getElementById("DELTARUNE");
    deltarune.insertBefore(img, deltarune.getElementsByClassName("cr")[0]);
    img.onclick = () => {
        if(!goAway){
            const audio = document.createElement("audio");
            audio.src = "./snd/snd_mysterygo.wav";
            audio.volume = 0.25;
            audio.play();
            img.classList.add("fade-out");
            setTimeout(() => {
                img.style.display = 'none';
                deltarune.removeChild(img);
            }, 1000);
            goAway = true;
        }
    };
}
*/