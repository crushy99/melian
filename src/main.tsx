import ReactDOM from 'react-dom/client'
import { FamilyTree } from "./FamilyTree.tsx";
import {EnglishLexicon} from "../lexicon/EnglishLexicon.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <FamilyTree entries={EnglishLexicon}/>
)
