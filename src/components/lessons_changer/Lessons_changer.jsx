import React from 'react'
import classes from './Lessons.chage.module.css'
import Lessons_change_lessons from './Lessons_change_lessons/Lessons_change_lessons'

const Lessons_changer = () => {
    return (
        <div className={classes.Lessons_changer}>
            <div className={classes.navbar}>
                <button href="" onClick={() => {}}>Пн</button>
                <button href="" onClick={() => {}}>Вт</button>
                <button href="" onClick={() => {}}>Ср</button>
                <button href="" onClick={() => {}}>Чт</button>
                <button href="" onClick={() => {}}>Пт</button>
                <button href="" onClick={() => {}}>Сб</button>
            </div>
            <Lessons_change_lessons/>
        </div>
    )
}

export default Lessons_changer