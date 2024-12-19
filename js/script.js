



function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

const marqueeText = document.getElementById('newsOfTheWorld');


const who = [
    "A doctor", "An engineer", "A teacher", "An artist", "A baker", 
    "A lawyer", "An athlete", "A writer", "A dancer", "An accountant", 
    "A musician", "A scientist", "A nurse", "A chef", "A librarian", 
    "A farmer", "An actor", "A carpenter", "A singer", "A firefighter", 
    "A mechanic", "A photographer", "A designer", "A coach", "A poet", 
    "A magician", "A sailor", "A zookeeper", "An archaeologist", "A detective", 
    "A philosopher", "An astronaut", "A judge", "A janitor", "A pilot", 
    "A soldier", "A journalist", "A scientist", "A poet", "A plumber", 
    "A bodyguard", "A tailor", "A sculptor", "A builder", "A hairdresser", 
    "An architect", "A programmer", "A researcher", "A shopkeeper", "A clown", 
    "A bus driver", "An inventor", "A dentist", "A tattoo artist", "A bodyguard", 
    "A politician", "A construction worker", "A truck driver", "A therapist", 
    "A fashion designer", "A chemist", "A personal trainer", "A farmer", 
    "A surgeon", "A waiter", "A cleaner", "A librarian"
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
    "tried to end the world"
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

  

function generateRandomMessage() {
    const randomWho = who[getRandomInt(who.length)];
    const randomWhat = what[getRandomInt(what.length)];
    const randomWhere = where[getRandomInt(where.length)];
    msg = getDate() + `, ${randomWho} ${randomWhat} ${randomWhere}.`;

    return msg; /*+ ", " + messages[Math.floor(Math.random() * messages.length)]*/;
}

const locale = navigator.language;

const options = {
    weekday: "long",
    day: "numeric",
    month: "long", 
    year: "numeric",
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: false      
};

function getDate(){
    const now = new Date();
    return now.toLocaleString(locale, options);
}


function updateMarqueeText() {
    marqueeText.textContent = generateRandomMessage();
}

updateMarqueeText();

marqueeText.addEventListener('animationiteration', updateMarqueeText);