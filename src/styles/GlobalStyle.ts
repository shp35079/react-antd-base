import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
    ${reset};
    
    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }

    span {
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
