import { css } from "@emotion/react";

export const App = () => {
    return <div
        css={testCss}
    >
        test
    </div>
}

const testCss = css`
    background-color: indianred;
`;