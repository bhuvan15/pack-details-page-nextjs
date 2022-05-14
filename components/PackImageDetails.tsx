import styled from '@emotion/styled'
import Image from 'next/image';
import PackImage from '../public/pink-pack.png'
import ArrowBtn from "../public/Arrow.png"

interface Props {
  
}

export const PackImageDetails: React.FC<Props> = (props) => { 
    return (
        <Container>
            {/* Pack Image */}
            <ImageContainer>
                <Image src={PackImage} objectFit="contain"/>
            </ImageContainer>

            {/* Pack details and order details */}
            <PackOrder>

                {/* UpperPortion */}
                <UpperPortion>
                    {/* PackName */}
                    <PackName>
                        <h1>CPL Trail Blazers</h1>
                    </PackName>

                    {/* PackContent */}
                    <PackContent>
                        <ul>
                            <li>4 Assured Silver</li>
                            <li>Chance to win a Gold</li>
                            <li>Etc.</li>
                        </ul>
                    </PackContent>

                </UpperPortion>


                {/* LowerPortion */}
                <LowerPortion>
                    <Price>
                        <h1>$50.00</h1>

                        <Quantity>
                            <p>Qty</p>
                            <Select name='quantity'>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                            </Select>
                        </Quantity>

                    </Price>

                    {/* Buttons */}
                    <Buttons>
                        <OrderButton>
                            Pre-order Now
                        </OrderButton>

                        <ArrowButton>
                            <Image src={ArrowBtn}/>
                        </ArrowButton>
                    </Buttons>


                </LowerPortion>
            
            </PackOrder>

        </Container>
    )
}

// Styled Components
const Container = styled.div`
    width: 100%;
    height: 80%;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 1250px) {
        & {
            justify-content: center;
            width: 90vw;
        }
    }
`

const ImageContainer = styled.div`
    margin-left: 15px;
    margin-top: 25px;
    height: 100%;
    width: 350px;

    @media only screen and (max-width: 1250px) {
        height: 35%;
        width: 200px;
    }

    @media only screen and (max-width: 600px) {
        height: 20%;
        width: 150px;
    }


`
const PackOrder = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column; 
    padding: 20px 0;

    @media only screen and (max-width: 1250px) {
        height: 50%;
        width: 100%;
    }
`

const UpperPortion = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    @media only screen and (max-width: 400px) {
        & {
            flex-direction: column;
            margin-top: 20px;
        }
    }

    @media only screen and (max-width: 1250px) {
        & {
            width: 100vw;
            height: 30%;
            flex-direction: row;
            align-center: flex-start;
            justify-content: space-evenly;
        }
    }

    @media only screen and (max-width: 768px) {
        & {
            margin-top: 20px;
        }
    }
`

const PackName = styled.div`
    color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
    height: 50%;
    width: 100%;
    margin-bottom: 25px;
    padding: 10px 0px;

    h1 {
        font-weight: 700;
    }

    @media only screen and (max-width: 850px) {
        h1 {
            font-size: 30px;
            padding: 10px;
        }
    }

    @media only screen and (max-width: 400px) {
        h1 {
            font-size: 22px;
            padding: 10px;
        }
    }

    @media only screen and (max-width: 1250px) {
       & {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 10px;

       } 
    }
`

const PackContent = styled.div`
    height: 75%;
    width: 100%;

    ul {
        color: #fff;
        
        font-size: 16px;
        padding: 10px 20px;
        font-style: italic;
        margin-top: 35px;
    }

    @media only screen and (max-width: 768px) {
        ul {
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 400px) {
        ul {
            font-size: 16px;
            padding: 5px;
        }
    }

    @media only screen and (max-width: 1250px) {
        & {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            width: 50%;
            height: 100%;
            opacity: 0.7;
        }

        ul {
            font-size: 12px;
        }
    }
`

const LowerPortion = styled.div`
    height: 55%;
    width: 100%;

    @media only screen and (max-width: 1250px) {
        & {
            width: 100vw;
            height: 70%;
            margin-top: 15px;
        }
    }
`

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 145px 0 0;
    flex-wrap: wrap;

    h1 {
        color: #fff;
        font-size: 44px;
    }

    @media only screen and (max-width: 850px) {
        padding: 0 100px 0 0;
    }

    @media only screen and (max-width: 768px) {
        & {
            margin: 15px;
            justify-content: center;
            padding: 0;
        }
        h1 {
            font-size: 30px;
            margin-right: 5px;
        }

    }

    @media only screen and (max-width: 1250px) {
        & {
            justify-content: space-evenly;
            padding: 0;
        }
        h1 {
            font-size: 38px;
        }
    } 

`

const Quantity = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    padding: 0;
    border-bottom: 1px solid rgba(255,255,255, 0.4);
    
    
    @media only screen and (max-width: 768px) {
        & {
            font-size: 16px;
        }
    }

`
const Select = styled.select`
    margin: 10px;
    font-size: 20px;
    padding: 0px 10px;
    font-weight: 800;
    background-color: transparent;
    border: none;
    color: #fff;

    &:focus {
        outline: none;
    }

    @media only screen and (max-width: 768px) {
        & {
            font-size: 16px;
        }
    }

    @media only screen and (max-width: 400px) {
        font-size: 12px;
    }


`
const Option = styled.option`
`

const Buttons = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;

    @media only screen and (max-width: 1250px) {
        & {
            justify-content: center;
        }
    }

`
const OrderButton = styled.div`
    background: rgb(16,255,198);
    background: linear-gradient(0deg, rgba(16,255,198,1) 0%, rgba(16,255,255,1) 100%);
    font-weight: 600;
    text-transform: uppercase;
    height: 60px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-radius: 4px;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        & {
            font-size: 10px;
            height: 40px;
            width: 300px;
            margin-right: 10px;
            padding: 0;
        }
    }

    @media only screen and (max-width: 400px) {
        & {
            width: 350px;
            font-size: 8px;
        }
    }
`
const ArrowButton = styled.div`
    background-color: #003380;
    height: 65px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }


    @media only screen and (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`