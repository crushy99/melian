import {Entry} from "./Entry";
import {EntryType} from "./EntryType";
import {Book} from "./Book.ts";

/**
 * A non-alphabetic lexicon of all kinds of people, places and events in Melian (texts in english)
 */
export const EnglishLexicon: Entry[] = [
    {
        name: "Inustaus",
        type: EntryType.Person,
        entry: "One of the four wizards who passed the ancient trial. He is in possession of the white stone of old and rules Inkavas, realm of the north. He is always fully-clad in white robes and uses the disguise of an old man.",
        synonyms: ["Inustaus the White", "Inustaus the Great", "Wizard of the North"],
        isFinished: false,
    },
    {
        name: "Ankaro",
        type: EntryType.Person,
        entry: "One of the four wizards who passed the ancient trial. After gaining the red stone of old, Ankaro split with his brother Oris and ventured into the eastern realms of Melian, where he came to power by terrorizing the lands with his dragon steed, which ultimately swallowed him whole and took the wizard's stone as its price.",
        synonyms: ["Ankaro the Red", "Rider of the Great Dragon", "Western Terror"],
        isFinished: false,
    },
    {
        name: "Oris",
        type: EntryType.Person,
        entry: "One of the four wizards who passed the ancient trial. He was the holder of the blue stone of old and strode the eastern lands of Melian, but after drifting apart from his borther Ankaro, he was outwitted by someone who took his stone and disguised himself as Oris, so in a sense, his spirit still lives on.",
        synonyms: ["Oris the Blue", "Wizard of the East", "Water's Friend"],
        isFinished: false,
    },
    {
        name: "Lonien",
        type: EntryType.Person,
        entry: "The greatest and wisest of the four wizards who passed the ancient trial. He holds the green stone of old and used it to persuade the Wadens to follow him.",
        synonyms: ["Lonien the Green", "Lonien the Wise", "Nature's Friend"],
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Uedinas",
        type: EntryType.People,
        entry: "The first known people to have reached the shores of Melian. Their first leader was Gedaen the Bold and they were renowned for seemingly every aspect of life. Everything they did was of high quality and a work of passion and they were connected to nature like no humans after them. Ultimately, they met their demise in a rather abrupt manner, but that secret is now known only to few and a full account of the Uedinas is hard to be found.",
        synonyms: ["Uedi-Enas", "First People", "Men of the Beginning"],
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Teln",
        type: EntryType.Person,
        entry: "A Waden from the land of Logen, who killed his master and found a way to gain a large amount of Deluen, making him capable of giving out large portions of it to others, which he used to free the Wadens from the human's slavery. He then established a Waden realm in the southern forests, where he came upon Lonien the Wise, who challenged him with ease and killed him, reviving the Ganued tree of his past farm.",
        synonyms: ["First Free Waden", "Rescuer of the Wadens"],
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Ganued",
        type: EntryType.Entity,
        entry: "A huge-grown maple tree on the farm of Mart Ganued, which appears to have stood in its place forever. To the Wadens it was magical, almost religious, before being burnt down by Mart Ganued, which led Teln to massacre his master. In ancient times, this tree was formed by Tirnael, an Ainbuedi who came to massive powers in deep caverns beneath the pointed mountains and in recent days, Teln was ultimately turnt into a new instance of the Great Ganued",
        synonyms: ["Maple Tree", "Ganued the Great", "Great Ganued", "Sunlight from the Past"],
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Pointed Mountains",
        type: EntryType.Place,
        entry: "A far-stretching mountain range, spanning from the eastern shores to the high plains of the west. They lay between the realms of Arlia in the south and Inkavas in the north, strategically splitting Melian into two halfs, as the pointed mountains are high and dangerous to travel.",
        synonyms: ["Melad-Vatemu", "Central Mountains"],
        isFinished: false,
    },
    {
        name: "Mart Ganued",
        type: EntryType.Person,
        entry: "A Waden master with a farmstead in the east of Logen. Shortly before his death, he was engaged to Kela Ludin-Eci, who betrayed him with his brother, Lent, leading him to chain his brother to the Great Ganued tree and setting it on fire. He was the master of Teln, who he struggled to keep under control, setting off the Waden revolution.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Lent Ganued",
        type: EntryType.Person,
        entry: "Mart Ganueds younger brother who was in love with Kela Ludin-Eci, who herself was engaged to his brother. They had a secret affair even before his brother got engaged, so he was split between his love for her beauty and the love for his brother and the loyalty he owed him.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Wadens",
        type: EntryType.People,
        entry: "A people who feel the way of nature in close proximity. They used to be enslaved by humans, who used fire and other trickery to keep them in check, but during the Waden revolution they used Deluen to shut off their nature-feeling senses, setting free their true force. They are tall and have hair of golden color, which in itself has many uses and they can focus their strength precisely, making them perfect killers and hunters, yet they would never kill by themself, as it hurts them deeply. They were first created by Magifan the wizard",
        synonyms: ["Lords of the South", "Woodfolk"],
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Deluen",
        type: EntryType.Entity,
        entry: "A liquid substance brewed in the royal palace of Logen which shuts off Waden senses, making them able to kill and destroy nature. The recipe was kept secret by Logen's royal family, ensuring them to be the only realm able to maintain Wadens and it was given out only in very small portions to farm owners, as little was required for effects to settle in.",
        synonyms: ["Nature's Demise", "Teln's gift"],
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Auma-Geleon",
        type: EntryType.Other,
        entry: "A galaxy of red-shining stars lighting up the night (and seen at day), which hold many secrets. Disappears every couple of weeks and it was long before the pattern in which it does, was uncovered.",
        synonyms: ["Red Snake", "Star Snake", "Snake of the Starts", "Sign of the Uedinas"],
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Gernar",
        type: EntryType.Person,
        entry: "A mysterious man who travels the lands of Melian on his journey to find the ultimate truth about the world. On his journey he comes across Teln and tells him of his knowledge, before departing to his last stop: the holy lake. There he resided until his end.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Benig",
        type: EntryType.Person,
        entry: "A Waden on the Ganued farmstead, who had great influence on Teln, as he taught him much of what he knew. He acted as a hunter for the Ganueds, before he was tragically killed by his beloved friend and pupil, Teln.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Inai",
        type: EntryType.Person,
        entry: "The oldest of the Wadens who lived and worked for the Ganued brothers. She was bought by Gajdo Ganued 60 years after Bock Ganued was born and she served as a berry-picker and mushroom-finder for long years without much resistance.",
        books: [Book.Teln],
        isFinished: true,
    },
    {
        name: "Wale",
        type: EntryType.Person,
        entry: "One of the three Wadens belonging to the Ganued brothers. Sister of Nane. She worked on the farm instead of the forest, but was never really hesitant of the work, as she found it to be a good compromise of work, destruction of nature and freedom. Mostly, these views came from her spiritual mentor Inai.",
        books: [Book.Teln],
        isFinished: true,
    },
    {
        name: "Nane",
        type: EntryType.Person,
        entry: "The sister of Wale, who together were bought 117 years after Bock Ganued was born to replace former Wadens working the fields. Similar to her sister, Nane never had any interest in resistance, but was rather happy with her life and she found warmth of heart in every aspect of the world.",
        books: [Book.Teln],
        isFinished: true,
    },
    {
        name: "Cilai",
        type: EntryType.Person,
        entry: "One of the three Wadens working the fields on the Ganued farm. He always resisted his former masters, but after being transferred to the Ganueds 120 years after Bock Ganued was born, he found peace with the world, as he quickly aged and his strength faded slowly but steadily.",
        books: [Book.Teln],
        isFinished: true,
    },
    {
        name: "Waden Sense",
        type: EntryType.Other,
        entry: "A sense or feeling unique to Wadens, which lets them feel nature's emotions in their close proximity. If something is burnt, it hurts them and if all things grow and live the way they are supposed to, they feel immediate euphoria. Although all Wadens share this sense and it can only be reduced by drinking Deluen, it ocurrs in many different ways. Teln felt it through his skin as a tingling sensation.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Ludin-Ecis",
        type: EntryType.People,
        entry: "A rich family residing all over Logen which has ties to the royal family. The name means 'mountain foot' as they have their main property under the royal palace's famous mountain, showing their wealth and prosperity. Some of the had dealings with the Teln and the Ganueds, the latter of which they plotted to ruin and take over their farm, because of generation-long jealousy of their great Ganued tree.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Lork Ludin-Eci",
        type: EntryType.Person,
        entry: "The father of Kela Ludin-Eci and the main lieutenant of Logen's eastern farmsteads owned by the Ludin-Ecis.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Logen",
        type: EntryType.Place,
        entry: "A smaller country in the south of Melian. It lies south of its' so-called big brother Arlia and to the south east of the melad-meha. Besides the mountainous country side shared with Gominas, which lies west of Logen, it is a relatively flat kingdom between the aforementioned sunny mountains and the imbreachable southern woods. During a time, Logen had a monopoly over the control of the Waden people.",
        books: [Book.Teln],
        isFinished: false,
    },
    {
        name: "Ganliath",
        type: EntryType.Place,
        entry: "A tiny kingdom which lies between Logen and the southern woods. To the north and west its border to Logen is the Fabecas river, which was its primeval defense in former times, before both country's leaders decided it was best to exchange information, goods and live in peace.",
        isFinished: false,
    },
    {
        name: "Fabecas",
        type: EntryType.Place,
        entry: "A great river with its source in the middle of the melad-meha. Its journey leads through Gominas and for the most part it lies very close to the border of the southern woods, leading some people to wonder, if the strange trees and this particular river have something in common.",
        isFinished: false,
    },
    {
        name: "Cesa",
        type: EntryType.Place,
        entry: "A former fortress used by the king of Logen to siege the lands of Ganliath. In more recent times, it is an important stop for travelers to Ganliath, as it lies directly next to the bridge of Cesa, the most important trade route over the Fabecas river.",
        isFinished: false,
    },
    {
        name: "Bailis",
        type: EntryType.Place,
        entry: "Built only a few years after Cesa, Bailis also used to serve as a fortress, of which only the structure now lives on - the spirit has changed a lot and the fortress turned into a sprawling city, blossoming with trade over both road and river.",
        isFinished: false,
    },
    {
        name: "Hiemas",
        type: EntryType.Place,
        entry: "The main city on the route from and to Ganliath. Many travelers make a stop here to rest or to see what news the day may bring. The city only grew to be what it is thanks to its location, being the crossroads of the north-south road from Cesa to Lamoel and the west-east road from Welenia to Bailis.",
        isFinished: false,
    },
    {
        name: "Lamoel",
        synonyms: ["Pearl of Logen"],
        type: EntryType.Place,
        entry: "A great harbor city in the center of Logen. It is the second biggest city in Logen overall and is passed by many ships sailing the Teulenen river. Another advantage this city has is its connection to the old eastern road, which passes right through it.",
        isFinished: false,
    },
    {
        name: "Old Eastern Road",
        type: EntryType.Place,
        entry: "An ancient road connecting the western shores of Melian with the eastern regions. The begins slightly south of the melad-meha, leads through Gominas and through Logen and then ends in the most eastern parts of Arlia, specifically in Enavea, a great port city.",
        isFinished: false,
    },
    {
        name: "Teulenen",
        type: EntryType.Place,
        entry: "A great river with its source in the king's hill in Logen. Shortly after beginning as a small water, three rivers from the melad-meha join the Teulenen, strengthening it and making it capable of carrying ships.",
        isFinished: false,
    },
    {
        name: "Fewele",
        type: EntryType.Place,
        entry: "Logen's most important city in the east. It is passed by the old eastern road and many travellers stop here for rest.",
        isFinished: false,
    },
    {
        name: "Welenia",
        type: EntryType.Place,
        entry: "A relatively large city in Logen close to the capitol. It lies on the main road from the capitol to Ganliath, so many people pass it every day. Whoever was in charge of Welenia always had good relations with the king, growing the city from a peasantly village to one of the kingdom's most important assets.",
        isFinished: false,
    },
    {
        name: "Uemasil",
        type: EntryType.Place,
        entry: "One of the three rivers flowing into the Teulenen. Its source is in the center-south of the melad-meha.",
        isFinished: true,
    },
    {
        name: "Doinol",
        type: EntryType.Place,
        entry: "One of the three rivers flowing into the Teulenen. Its source lies in the eastern melad-meha.",
        isFinished: true,
    },
    {
        name: "Cavonie",
        type: EntryType.Place,
        entry: "The largest of the three rivers flowing into the Teulenen. Beginning in the uppermost north-east of the melad-meha, its water passes the lands of Gominas until it eventually winds into the Teulenen in the norht of Logen.",
        isFinished: true,
    },
    {
        name: "Hayes Brem",
        synonyms: ["Logen's Star", "Glimmer of Hope"],
        type: EntryType.Place,
        entry: "A large fortress city which was reinforced over time, becoming the main stronghold of defense against aggression from the western neighbor Gominas.",
        isFinished: false,
    },
    {
        name: "Lohase",
        type: EntryType.Place,
        entry: "One of the twin fortresses built in the west of Logen to defend itself from Gominas.",
        isFinished: false,
    },
    {
        name: "Vanis",
        type: EntryType.Place,
        entry: "Aside from the capitol and Hayes Brem, this city was the chief defense against Gominas in times of war. After peace was settled, this city, ruined by war, was rebuilt (with another purpose in mind) and it started to blossom in the summer of quietness.",
        isFinished: false,
    }
];
