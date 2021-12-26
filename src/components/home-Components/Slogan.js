import React from "react"
import styled from "@emotion/styled"


export const Slogan = () => {
    const monButton = (
        <button className="monButton">Faire une reservation</button>
    );
    return (
        <DivContainer >
            <div className="column">
                <div className="div1">
                    <div className="texte">
                        Voyagez partous  à travers le <span className="green">Cam</span><span className="red">er</span><span className="yellow">oun</span>.
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
    font-family:  Verdana,"Arial Black", Arial,Impact,  sans-serif;
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
    box-shadow:0 0 0 0 #6c63ff;
    animation: pulse 1.3s infinite;
    :hover{
       background-color:#551a8b ;
    }
}
@keyframes pulse{
    to{
        box-shadow: 0 0 0 10px ;
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
    display:inline-block;
    }
    .divButton1{
    display:block;
    margin-top:50px;
    animation: apparit 0.8s ease-out;
   @keyframes apparit{
    from{
        opacity:0;
        transform:translateY(100px);
    }
    to{
        opacity:1;
        transform:translateY(0px);
    }
   }
}

.div1{
    width:50%;
    display:inline-block;
    vertical-align:middle;
    text-align:center;

    
}
.div2{
    width:50%;
}
.texte{
    animation: apparition 0.8s ease-out;
}
@keyframes apparition{
    from{
        opacity:0;
        transform:translateY(-100px);
    }
    to{
        opacity:1;
        transform:translateY(0px);
    }
}

}
.green {
    color:green;
}
.red{
color:red;
}
.yellow{
    color:gold;
}

`