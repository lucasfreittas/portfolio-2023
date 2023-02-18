import { Container } from './styles';

export function TextBox({title, description, link, icon:Icon, ...rest}){
    return(
        <Container>
            <h3>{title}</h3>
            <p>{description}</p>
            <button {...rest}>
                {link}
                {
                    Icon &&
                    Icon.map((Icon, index) => (
                        <Icon key={index} icon={Icon}/>
                    ))
                }
            </button>
        </Container>
    )
};