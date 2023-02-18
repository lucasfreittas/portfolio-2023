import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > h3 {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        margin: 50px 0;
    };

    > p {
        font-size: 22px;
        font-weight: normal;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.GRAY_500};
    }

    > button {
        display: flex;
        gap: 16px;
        margin-top: 50px;
        color: ${({theme}) => theme.COLORS.PURPLE};
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        border: none;
        background-color: transparent;
        align-items: center;
    }
`