import styled from "@emotion/styled";
import React from "react";


const Style = styled.div`
    img{
        height: 100px;
        width: 100%;
    }
    .droite{
        height: auto;
        margin: 0px;
    }
`

export const Image = () => {
    return (
        <Style>
            <div id="droite">
                <img src="/images/image3.jpg" alt="logo" className="img" />
            </div>
        </Style>
    )
}

