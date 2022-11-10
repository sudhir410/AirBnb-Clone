import React from 'react'
import { topsellers } from '../../data/topsellers'
import PlanATripContainer from '../PlanATrip/PlanATripContainer'
function Topsellers() {
    const btnPrev = () => {
        const box = document.querySelector('.topsellers')
        let width = box.clientWidth;
        box.scrollLeft -= width
    }
    const btnNext = () => {
        const box = document.querySelector('.topsellers')
        let width = box.clientWidth;
        box.scrollLeft += width
    }
    return (
        <div className='PlanATrip_mainContainer' style={{ marginTop: "-2rem" }}>
            <div className='PlanATrip_headTextContainer'>
                <p>Top Sellers</p>
                <div className='plan_crousel'>
                    <button className='lessthen choicebtn' onClick={btnPrev}>&lt;</button>
                    <button className='greaterthan choicebtn' onClick={btnNext}>&gt;</button>
                </div>
            </div>
            <div className='planatrip topsellers'>
                {
                    topsellers.map(data => (

                        <PlanATripContainer data={data} />

                    ))
                }
            </div>
        </div>
    )
}

export default Topsellers