import React from 'react'
import classes from './Lesson_block.module.css'

const Lesson_block = (props) => {
    if (props.isSplit == true) {
        return (
            <div className={classes.lesson_block_split}>
                <h3 className={classes.lesson_time_split}>{props.lesson_time}</h3>
                <div className={classes.lesson_groups_blocks}>
                    <div className={classes.group_block}>
                        <h2 className={classes.lesson_name}>{props.one_group_lesson_name} </h2>
                        <h2 className={classes.lesson_office}>{props.one_group_office}</h2>
                    </div>
                    <h3 className={classes.group_title1}>1</h3>
                    <h3 className={classes.group_title2}>2</h3>
                    <div className={classes.group_block}>
                        <h2 className={classes.lesson_name}>{props.two_group_lesson_name}</h2>
                        <h2 className={classes.lesson_office}>{props.two_group_office}</h2>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className={classes.lesson_block}>
                <h3 className={classes.lesson_time}>{props.lesson_time}</h3>
                <div className={classes.lesson_info}>
                    <h2 className={classes.lesson_name}>{props.lesson_name}</h2>
                    <h2 className={classes.lesson_office}>{props.lesson_office}</h2>
                </div>   
            </div>
        )
    }
}

export default Lesson_block