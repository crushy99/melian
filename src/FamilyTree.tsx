import {Entry} from "../lexicon/Entry.ts";
import {useEffect} from "react";

export interface FamilyTreeProps {
    entries: Entry[];
}

export const FamilyTree = (props: FamilyTreeProps) => {
    const findMax = (entry: Entry): Entry => {
        console.log("Hello, I'm " + entry.name);
        if (!entry.parents) {
            console.log("I don't have parents :(");
            const partner = props.entries.find((e) => e.name === entry.partner);
            if (!partner) return entry;
            else if (!partner.parents) {
                console.log(partner);
                return entry;
            }
            else {
                console.log("I do have a partner, have a look:");
                return findMax(partner);
            }
        } else {
            console.log("I have parents, let's check them: ");
            const firstParentName = entry.parents[0];
            const secondParentName = entry.parents[1];
            const parent = props.entries.find((e) => (e.name === firstParentName || e.name === secondParentName));
            if (!parent) return entry
            else return findMax(parent);
        }
    };

    useEffect(() => {
        const test = props.entries.find((entry) => entry.name === "Mart Ganued");
        if (!test) return;
        console.log(test);
        console.log(findMax(test));
    }, []);

    return "test";
}
