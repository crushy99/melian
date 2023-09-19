import {Entry} from "./Entry";
import {EntryType} from "./EntryType";

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
        isFinished: false,
    }
];
