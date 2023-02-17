import { Container, Header, About, Projects, Footer } from './styles';
import  LFLogo  from '../../assets/LFLogo.svg'
import Avatar from '../../assets/Avatar.svg'

export function Home(){
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
            </About>

            <Projects>

            </Projects>

            <Footer>

            </Footer>
        </Container>
    )
}