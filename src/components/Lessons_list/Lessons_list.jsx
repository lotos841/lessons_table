import React from 'react'
import classes from './Lessons_list.module.css'
import Lesson_block from '../Lesson_block/Lesson_block'


const Lessons_list = (props) => {

    
    let week_day_lessons = props.week_day_lessonss;

    let lesson_elem = week_day_lessons.map( elem => 
            <Lesson_block
                isSplit={elem.isSplit}
                one_group_lesson_name={elem.one_group_name}
                two_group_lesson_name={elem.two_group_name}
                one_group_office={elem.one_group_office}
                two_group_office={elem.two_group_office}
                lesson_name={elem.name} 
                lesson_office={elem.office} 
                lesson_time={elem.time}
            />
        )

    return (
        <>
            <div className={classes.lessons_list}>
                <h2 className={classes.week_day}>{props.week_day}</h2>
                {lesson_elem}
            </div>
        </>
    )
}

export default Lessons_list;