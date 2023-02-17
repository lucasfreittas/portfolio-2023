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
    flex-direction: column  ;
    width: 100%;
    max-width: 1350px;

    > header{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 80px;
        align-items: center;

        a {
            position: relative;
            font-size: 20px;
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
            width: 50px;
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
            font-size: 110px;
            line-height: 158px;
            font-weight: bold;
            margin-top: 74px;
            color: ${({theme}) => theme.COLORS.WHITE};

            > h1 {
                margin-left: -8px;
            };

            > span {
                display: block;
                margin-top: 45px;
                width: 80px;
                background-color: ${({theme}) => theme.COLORS.PURPLE};
                height: 14px;
            };
        };

        > img {
            height: 580px;
            margin-top: -10px;
        }
}
`;

export const About = styled.div`

`;

export const Projects = styled.div`

`;

export const Footer = styled.div`

`;