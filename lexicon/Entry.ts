import { EntryType } from "./EntryType";
import { Book } from "./Book.ts";

/**
 * An entry for any dictionary
 */
export type Entry = {
    name: string;
    type: EntryType;
    entry: string;
    synonyms?: string[];
    translations?: string[];
    books?: Book[];
    isFinished?: boolean;
};
