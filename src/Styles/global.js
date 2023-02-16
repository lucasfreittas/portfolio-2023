import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    };

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        -webkit-font-smoothing: antialiased;
    };

    body, input, button, textarea{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    };

    a{
        text-decoration: none;
    };

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    };
    
    button:hover, a:hover{
        filter: brightness(0.9)
    }
`