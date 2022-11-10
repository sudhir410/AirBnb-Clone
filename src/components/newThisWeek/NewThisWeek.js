import React from 'react'
import WeekComponent from './WeekComponent'
import './NewThisWeek.css'
import { ThisWeek, choices } from '../../data/week_mock-data'
import SingleWordComponent from './SingleWordComponent'

function NewThisWeek() {
    const btnPrev = () => {
        const box = document.querySelector('.weekcomponent')

        let width = box.clientWidth;
        box.scrollLeft -= width
    }
    const btnNext = () => {
        const box = document.querySelector('.weekcomponent')
        let width = box.clientWidth;
        box.scrollLeft += width
    }
    const choicePrev = () => {
        const box = document.querySelector('.bottom_choices')
        let width = box.clientWidth;
        box.scrollLeft -= width
    }
    const choiceNext = () => {
        const box = document.querySelector('.bottom_choices')
        let width = box.clientWidth;
        box.scrollLeft += width
    }
    return (
        <div className='NewThisWeek'>
            <div className='NewThisWeek_headerText'>
                <h2>New this week</h2>
                <div className='crousel'>
                    <button className='lessthen' onClick={btnPrev}>&lt;</button>
                    <button className='greaterthan' onClick={btnNext}>&gt;</button>
                </div>
            </div>
            <div className='weekcomponent'>
                {
                    ThisWeek.map(data => (
                    
                            <WeekComponent  data={data} />
                   
                    ))

                }
            </div>

            <div className='bottom'>
                <div className='bottom_filters'>
                    <SingleWordComponent data={{ id: 1, choice: "Dates" }} />
                    <SingleWordComponent data={{ id: 2, choice: "Group size" }} />
                    <SingleWordComponent data={{ id: 3, choice: "More filters" }} />
                </div>
                <button className='choicePrev' onClick={choicePrev}>&lt;</button>
                <div className='bottom_choices'>

                    {

                        choices.map(data => (
                            <div key={data.id} >
                                <SingleWordComponent data={data} sty={"#edebeb"} />
                            </div>

                        ))

                    }


                </div>
                <button className='choiceNext' onClick={choiceNext}>&gt;</button>
            </div>
        </div>
    )
}


export default NewThisWeek