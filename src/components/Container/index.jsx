/* eslint-disable react/prop-types */
import ContainerStyled from "./Container.styled";

function Container(props) {
    return(
        <ContainerStyled>
            {props.children}
        </ContainerStyled>
    )
}

export default Container;