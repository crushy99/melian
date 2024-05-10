import { EntryType } from "./EntryType";
import { Book } from "./Book.ts";

/**
 * An entry for any dictionary (might need to be done with classes in the future...)
 */
export type Entry = {
    name: string;
    type: EntryType;
    entry: string;
    synonyms?: string[];
    translations?: string[];
    books?: Book[];
    isFinished?: boolean;
    // family tree related things
    partner?: string;
    children?: string[]
    parents?: string[];
};
