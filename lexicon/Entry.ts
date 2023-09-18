import { EntryType } from "./EntryType";

/**
 * An entry for any dictionary
 */
export type Entry = {
    name: string;
    type: EntryType;
    entry: string;
    secondaryNames?: string[];
    translations?: string[];
    isFinished?: boolean;
};
