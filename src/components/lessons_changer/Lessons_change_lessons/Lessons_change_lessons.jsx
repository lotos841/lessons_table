import React from 'react'
import classes from '../../Lesson_block/Lesson_block.module.css'

const Lessons_change_lessons = (props) => {
    return (
        <div>
            <div className={classes.lesson_block}>
                <h3 className={classes.lesson_time}>{props.lesson_time}</h3>
                <div className={classes.lesson_info}>
                    <h2 className={classes.lesson_name}>{props.lesson_name}</h2>
                    <h2 className={classes.lesson_office}>{props.lesson_office}</h2>
                </div>   
            </div>
            <input type="text" />
        </div>
    )
}

export default Lessons_change_lessons