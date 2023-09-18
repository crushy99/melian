import { css } from "@emotion/react";
import { EnglishLexicon } from "../lexicon/EnglishLexicon.ts";

export const Lexicon = () => {

    return <div
        id={"lexicon-main"}
        css={mainCss}
    >
        {EnglishLexicon.map((entry) => {
            return <div
                css={entryOuterCss}
            >
                <div
                    css={entryInnerCss}
                >
                    <h1>{entry.name}</h1>
                    <h4>{entry.secondaryNames}</h4>
                    <text>{entry.entry}</text>
                </div>
            </div>;
        })}
    </div>
}

const mainCss = css`
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-family: 'Lexend', sans-serif;
  
    display: flex;
    flex-direction: column;
    gap: 48px;
  
    background-color: #595959;
`;

const entryOuterCss = css`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const entryInnerCss = css`
    width: 50%;
    padding: 24px;
    border-radius: 24px;
    background-color: #cccccc;
`;