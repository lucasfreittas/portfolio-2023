import { Container, Header, About, Projects, Footer } from './styles';
import  LFLogo  from '../../assets/LFLogo.svg'
import Avatar from '../../assets/Avatar.svg'
import { FiArrowRight } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa'

import { TextBox } from '../../Components/TextBox';

export function Home(){
    const socialIcons = [AiFillGithub, FaLinkedinIn]
    const arrowIcon = [FiArrowRight]

    return(
        <Container>
            <Header>   
                <header>
                    <img src={LFLogo} alt="Logo Lucas Freitas" />
                    <nav>
                        <a href="#">About me</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </nav>
                </header>
                <section className='hero'>
                    <div className='title'>
                        <h1>Lucas Freitas.</h1>
                        <span></span>
                    </div>
                    <img src={Avatar} alt="" />
                </section>

            </Header>

            <About>
                <p>/ THIS IS ME</p>
                <div className='textWraper'>
                    <TextBox 
                        title='Hi, my name is Lucas and i’m an experienced
                        developer and designer based in São Paulo.'

                        description='Having come from a design background, 
                        I feel comfortable working in all stages of application 
                        development, from discovery to implementation.'

                        link='Download CV' 

                        icon={arrowIcon}
                        
                        
                    />
                      <TextBox 
                        title='I work with technologies such as React, 
                        Node, Html, CSS, JavaScript, Figma among others.'
                        
                        description='I enjoy tacking new challenges and always seek 
                        opportunities for growth in my career. If you need someone 
                        reliable and creative, I am the right person for the job!'

                        icon={socialIcons}
                    />
                </div>
            </About>
        
            <Projects>

            </Projects>

            <Footer>

            </Footer>
        </Container>
    )
}