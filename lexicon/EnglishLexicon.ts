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
        type: EntryType.Entity,
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
    }
];
