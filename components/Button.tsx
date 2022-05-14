import styled from '@emotion/styled'
interface Props {
    text: string,
}

export const Button: React.FC<Props> = ({text}) => {
    return (
        <Container>
            <ButtonContainer>
                {text}
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 60px;
    width: 400px;
    margin: 20px auto;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        & {
            height: 40px;
            width: 250px;
            margin-top: -10px;
            
        }
    }

    @media only screen and (max-width: 400px) {
        & {
            height: 30px;
            width: 200px;
        }
    }
`
const ButtonContainer = styled.button`
    height: 100%;
    width: 100%;
    text-transform: uppercase;
    background-color: #fff;
    font-weight: 800;
    font-size: 12px;
    border-radius: 5px;
    border: none;
    outline: none;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        & {
            font-size: 10px;
        }
    } 
`