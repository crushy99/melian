import ReactDOM from 'react-dom/client'
import { Lexicon } from './Lexicon.tsx'

// just started this project and this is already fucked up somehow...
document.body.style.margin = "-22px 0px 0px 0px";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Lexicon />
)
