import styled from '@emotion/styled'
import Image from 'next/image';
import LogoImg from '../public/Logo.png'
import UserIcon from '../public/user.png'
import Hamburgericon from '../public/Hamburger-menu.png'

interface Props {
  
}


export const Navbar: React.FC<Props> = (props) => {
    let logoHeight = "80px";
    let logoWidth = "200px"; 
  return (
         <NavContainer>
            <Nav>
                {/* Logo Image*/}
                <a href="/">
                    <Image src={LogoImg} alt="Rario Logo" height={logoHeight} width= {logoWidth}/>
                </a> 

                {/* Navigation menu */}
                <Navigation>
                    {/* Options */}
                    <Options>
                        
                        <div>
                            <a href="https://rario.com/marketplace" target="_blank">MArketplace</a>
                            <span>Sept 2021</span>
                        </div>
                        <div>
                            <a href="https://medium.com/rario" target="_blank">Vault</a>
                            <span>Sept 2021</span>
                        </div>
                        <div>
                            <a href="#">Club</a>
                            <span>Dec 2021</span>
                        </div>
                        
                        
                    </Options>

                    {/* User */}
                    <User>
                        {/* User image */}
                        <Image src={UserIcon} height={30} width={30}/>
                        
                        {/* Hambuger Menu */}
                        <div className="hamburger-menu">

                            <Image src={Hamburgericon} alt="Hamburger-Menu" id="hamburger" />

                            <div className="mobile-menu">
                                <div className="mobile">

                                    <div className="block">
                                        <a href="https://rario.com/marketplace" target="_blank">Marketplace</a>
                                        <span>Sept 2021</span>
                                    </div>

                                    <div className="block">
                                        <a href="https://medium.com/rario" target="_blank">Vault</a>
                                        <span>Sept 2021</span>
                                    </div>

                                    <div className="block">
                                        <a href="#">Club</a>
                                        <span>Dec 2021</span>
                                    </div>

                                </div>
                                
                            </div>
                        </div>


                    </User>

                </Navigation>

            </Nav>
         </NavContainer>
  );
};


/* Styled Components */

const NavContainer = styled.div `
    width: 100%;
    height:10vh;
    background-color: #000341;
    font-weight: 600;
    position: relative;
    z-index: 100;
`

const Nav = styled.div`
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Navigation = styled.div`
    padding: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
`

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
    }

    span {
        background: rgb(16,255,198);
        background: linear-gradient(0deg, rgba(16,255,198,1) 0%, rgba(16,255,255,1) 100%);
        padding: 0px 2px;
        border-radius: 2px;
        font-weight: 600;
        font-size: 10px;
        color: #181818;
        margin-left: 3px;
    }


    @media only screen and (max-width: 850px) {
        span {
            font-size: 9px;
        }
    }  

    @media only screen and (max-width: 768px) {
        div {
            display: none;
        }
    }
     

`
const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
    }

    .hamburger-menu {
        display: none;
        position: relative;
    }
    .mobile-menu {
        display: none;
    }
    .mobile {
        position: absolute;
        height: 150px;
        width: 175px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        top: 27px;
        right: -20px;
        padding: 5px 10px;
    }
    .block {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 33%;
        border-bottom: 1px solid rgb(187, 185, 185);
    }

    a {
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
    }
    span {
        background: rgb(16,255,198);
        background: linear-gradient(0deg, rgba(16,255,198,1) 0%, rgba(16,255,255,1) 100%);
        padding: 0px 2px;
        border-radius: 2px;
        font-weight: 600;
        font-size: 10px;
        color: #181818;
    }
    .hamburger-menu:hover .mobile-menu{
        display: block;
    }

    @media only screen and (max-width: 768px) {
        .hamburger-menu {
            display: block;
            margin-left: 25px;
        }
    }


`
