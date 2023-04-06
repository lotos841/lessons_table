import React from 'react'
import classes from './Lesson_block_split.module.css'

const Lesson_block_split = (props) => {
    return (
        <div className={classes.lesson_block_split}>
            <h3 className={classes.lesson_time}>{props.lesson_time ?? "15:00-16:00"}</h3>
            <div className={classes.lesson_names_blocks}>
                <div className={classes.lesson_block}>
                    <h2 className={classes.lesson_name}>{props.one_group_lesson_name ?? "англ"} </h2>
                    <h2 className={classes.lesson_office}>{props.one_group_lesson_office ?? "202"}</h2>
                </div>
                <div className={classes.lesson_block}>
                    <h2 className={classes.lesson_name}>{props.two_group_lesson_name ?? "англ"}</h2>
                    <h2 className={classes.lesson_office}>{props.two_group_lesson_office ?? "101"}</h2>
                </div>
            </div>
        </div>
    )
}

export default Lesson_block_split