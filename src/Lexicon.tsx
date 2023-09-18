import { css } from "@emotion/react";
import { EnglishLexicon } from "../lexicon/EnglishLexicon.ts";

export const Lexicon = () => {

    return <div
        id={"lexicon-main"}
        css={testCss}
    >
        {EnglishLexicon.map((entry) => {
            return <div>
                <h1>{entry.name}</h1>
                <h2>{entry.secondaryNames}</h2>
                <text>{entry.entry}</text>
            </div>;
        })}
    </div>
}

const testCss = css`
    background-color: indianred;
`;