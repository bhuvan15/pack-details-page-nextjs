import styled from '@emotion/styled'

interface Props {
    mainHeading: string,
    subHeading: string,
}

export const Heading: React.FC<Props> = ({mainHeading, subHeading}) => {
    return(
    <HeadingContainer>
        <H1>
            {mainHeading}
        </H1>
        <Para>
            {subHeading}
        </Para>
    </HeadingContainer>
    )
}

const HeadingContainer = styled.div`
    color: #fff;
    padding: 30px 0;
    margin-bottom: -15px;

    @media only screen and (max-width: 1300px) {
        & {
            text-align: center;
        }
    }
`

const H1 = styled.h1`
    font-size: 38px;
    text-transform: uppercase;


    @media only screen and (max-width: 768px) {
        & {
            font-size: 32px;
        }
    }
`

const Para = styled.p`
    margin-top: 15px;
    opacity: 0.9;

    @media only screen and (max-width: 768px) {
        & {
            font-size: 14px;
        }
    }
`