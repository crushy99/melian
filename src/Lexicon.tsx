import { css } from "@emotion/react";
import { EnglishLexicon } from "../lexicon/EnglishLexicon.ts";
import {Colors} from "./Colors.ts";
import {useInterval} from "./useInterval.ts";
import {useState} from "react";

export const Lexicon = () => {
    const [counter, setCounter] = useState(0);

    useInterval(() => {
        setCounter(counter + 1);
    }, 5000);

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
                    <header
                        css={headerCss}
                    >
                        <h1
                            css={nameCss}
                        >{entry.name}
                        </h1>
                        <span
                            css={synonymCss}
                        >
                            {entry.synonyms ? entry.synonyms[counter % entry.synonyms.length] : null}
                        </span>
                    </header>

                    <div>{entry.entry}</div>
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
  
    padding: 36px;
  
    background-color: ${Colors.background};
`;

const entryOuterCss = css`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const entryInnerCss = css`
    width: 50%;
    max-width: 500px;
    padding: 16px;
    border-radius: 16px;
    background-color: ${Colors.primary};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const headerCss = css`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 8px;
`;

const nameCss = css`
    margin-bottom: 16px;
`;

const synonymCss = css`
    font-size: 12px;
`;
