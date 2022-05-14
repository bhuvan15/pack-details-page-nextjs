import styled from '@emotion/styled'

interface Props {

}

export const LeftFooter: React.FC<Props> = (props) => {
    return(
        <Container>
            <UList>
                <ListItem>
                    ©️ 2021 Rario Inc
                </ListItem>
                <ListItem>
                    ©️ 2021 ICC Properties Inc. All Rights Reserved.
                </ListItem>
                <ListItem>
                    Officially Licensed product of the International Cricket Council Players.
                </ListItem>
                <ListItem>
                    This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
                </ListItem>
            </UList>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;


    @media only screen and (max-width: 768px)  {
        & {
            display: none;
        }
    }
`
const UList = styled.ul`
    list-style-type: none;
    font-size: 10px;
    opacity: 0.5;

    @media only screen and (max-width: 1300px) {
        & {
            font-size: 8px;
        }
    }
`

const ListItem = styled.li`
    margin: 5px;
    
    a {
        color: #000;
    }
`