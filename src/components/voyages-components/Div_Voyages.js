import styled from "@emotion/styled"
import React from "react"

let voyagesData = [
    { id: '1', vile_depart: 'Baffoussam', vile_arrive: 'Bamenda', Heure_depart: '2h', duree: '4h' },
    { id: '2', vile_depart: 'Yaounde', vile_arrive: 'Douala', Heure_depart: '20h', duree: '4h' },
    { id: '3', vile_depart: 'Douala', vile_arrive: 'Mbouda', Heure_depart: '6h', duree: '4h' },
    { id: '4', vile_depart: 'Limbe', vile_arrive: 'Maroua', Heure_depart: '4h', duree: '4h' },
    { id: '5', vile_depart: 'Kreibi', vile_arrive: 'Adamaoua', Heure_depart: '19h', duree: '4h' },
    { id: '6', vile_depart: 'Dschang', vile_arrive: 'Yaounde', Heure_depart: '22h', duree: '4h' },
    { id: '7', vile_depart: 'Edea', vile_arrive: 'Kribi', Heure_depart: '5h', duree: '4h' },
    { id: '8', vile_depart: 'Bertoua', vile_arrive: 'Yaounde', Heure_depart: '1h', duree: '4h' }
]

const Div_css=styled.div`

`

const Div_Voyages = () => {
    return (
        <Div_css>
            <div>
                <div className="photo">
                    <img src='images/reserver.png' className="image" />
                </div>
                <div className="droite">

                </div>
            </div>

        </Div_css>
    )
}

export default Div_Voyages