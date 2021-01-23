import React from "react";
import {HeaderDiv, RentomojoLogoContainer} from "../styles";
import RentomojoLogo from "../resources/rentomojo-logo.png"

const Header = () => (
    <HeaderDiv>
        <RentomojoLogoContainer src={RentomojoLogo}/>
    </HeaderDiv>
)

export default Header;
