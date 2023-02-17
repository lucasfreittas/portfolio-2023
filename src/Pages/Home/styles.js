import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 11.6%;

    > header{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 89px;
        align-items: center;

        a {
            position: relative;
            font-size: 22px;
            font-weight: bold;
            color: ${({theme}) => theme.COLORS.GRAY_500};
            gap: 32px;
            margin-left: 40px;
            

            &:hover {
                color: ${({theme}) => theme.COLORS.WHITE};
                transition: all 0.3s ease-in-out;
            }

            &::after{
                content: '';
                position: absolute;
                bottom: -8px;
                left: 16%;
                width: 70%;
                height: 5px;
                background-color: ${({theme}) => theme.COLORS.PURPLE};
                transform: scaleX(0);
                transform-origin: center;
                transition: transform 0.3s ease-in-out
            };

            &:hover::after{
                transform: scaleX(1);
            }

        };


        > img {
            width: 53px;
        };
    };

    > .hero{
        display: flex;
        width: 100%;
        justify-content: space-between;

        > .title{
            width: 550px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            font-size: 120px;
            line-height: 170px;
            font-weight: bold;
            margin-top: 90px;
            color: ${({theme}) => theme.COLORS.WHITE};

            > h1 {
                margin-left: -8px;
            };

            > span {
                display: block;
                margin-top: 50px;
                width: 87px;
                background-color: ${({theme}) => theme.COLORS.PURPLE};
                height: 16px;
            };
        };

        > img {
            height: 630px;
            margin-top: -10px;
        }
}
`;

export const About = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: 100%;
    padding: 0 11.6%;
    margin-top: -35px;
    z-index: -1;

    > p {
        margin-top: 120px;
        font-size: 22px;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.GRAY_500};
    }
`;

export const Projects = styled.div`

`;

export const Footer = styled.div`

`;