import {css} from "@emotion/react";
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
        {EnglishLexicon.map((entry, index) => {
            const styles = getStyles(index);
            return <div
                css={styles.entryOuter}
            >
                <div
                    css={styles.entryInner}
                >
                    <header
                        css={styles.header}
                    >
                        <h1
                            css={styles.name}
                        >
                            {entry.name}
                        </h1>
                        <span
                            css={styles.synonym}
                        >
                            {entry.synonyms ? entry.synonyms[counter % entry.synonyms.length] : null}
                        </span>
                    </header>

                    <div
                        css={styles.entry}
                    >{entry.entry}</div>
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
  
    background-color: ${Colors.background};
`;

const getStyles = (index: number) => {
    return {
        entryOuter: css`
            display: flex;
            justify-content: center;
            width: 100%;
            min-height: 100vh;
        `,
        entryInner: css`
            display: flex;
            width: 100%;
        `,
        header: css`
            width: 50%;
            padding: 32px;
            color: ${index % 2 ? Colors.primary : "black"};
            background-color: ${index % 2 ? "transparent" : Colors.primary};
        `,
        name: css`
            margin: 0;
            font-size: 7.5em;
        `,
        synonym: css`
            color: ${index % 2 ? Colors.primary : "black"};
            font-size: 2em;
        `,
        entry: css`
            background-color: ${index % 2 ? Colors.primary : "transparent"};
            width: 50%;
            font-size: 2.5em;
            padding: 32px;
            color: ${index % 2 ? "black" : Colors.primary};
        `,
    }
};
