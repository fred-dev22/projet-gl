import React from "react"
import styled from "@emotion/styled"

const DivContainer = styled.div`
width:100% ;
.column{
    display: flex;
    flex-direction:column;
}
.texte{
    font-size:3.6em;
    font-weight:700px;
    text-align:center;
    font-family:"zara";
}
.monButton{
    padding:10px 20px 10px 20px;
    font-size:20px;
    font-weight:bold;
    text-transform:uppercase;
    border-radius:10px;
    background-color:#6c63ff;
    color:white;
    border:none;
    :hover{
       background-color:green;
    }
}
.divButton{
    text-align:center;
}
.divButton1{
    display:none;
}
@media (min-width: 768px) {
    .divButton{
        display:none;
    }
    .column{
        display :flex;
        flex-direction:row;
    }
    .divButton1{
    display:block;
}
.div1{
    width:50%;
    text-align:center;
    padding-top:8%;

    
}
.div2{
    width:50%;
}

}

`
export const Slogan = () => {
    const monButton = (
        <button className="monButton">Faire une reservation</button>
    );
    return (
        <DivContainer >
            <div className="column">
                <div className="div1">
                    <div className="texte">
                        Voyagez partous  à travers le Cameroun.
                    </div>
                    <div className="divButton1">
                        {monButton}

                    </div>

                </div>
                <img className="div2" src="/images/voyage.png" />
                <div className="divButton">
                    {monButton}
                </div>
            </div>
        </DivContainer>
    )

}