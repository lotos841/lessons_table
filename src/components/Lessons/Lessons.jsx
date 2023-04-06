import React, { useState } from 'react'
import classes from "./Lessons.module.css"
import Lessons_list from '../Lessons_list/Lessons_list'

const Lessons = (props) => {
    
    let lessons_data = {
        monday_data: [
            {name: "Дискретная математика", office: "204", time: "8:30-9:15"},
            {name: "Дискретная математика", office: "204", time: "9:15-10:05"},
            {name: "Дискретная математика", office: "204", time: "10:10-10:55"},
            {name: "Дискретная математика", office: "204", time: "11:00-11:45"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            {name: "история", office: "204", time: "12:25-13:10"},
            {name: "история", office: "204", time: "13:15-14:00"},
        ]
        ,
        tuesday_data: [
            {isSplit: true, one_group_name: "", two_group_name: "МДК 03",one_group_office:"",two_group_office:"206", time: "8:30-9:15"},
            {isSplit: true, one_group_name: "", two_group_name: "МДК 03",one_group_office:"",two_group_office:"206", time: "9:20-10:05"},
            {isSplit: true, one_group_name: "", two_group_name: "МДК 03",one_group_office:"",two_group_office:"206", time: "10:10-10:55"},
            {isSplit: true, one_group_name: "", two_group_name: "МДК 03",one_group_office:"",two_group_office:"206", time: "11:00-11:45"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            
            {isSplit: true, one_group_name: "МДК 03", two_group_name: "",one_group_office:"10",two_group_office:"", time: "12:25-13:10"},
            {isSplit: true, one_group_name: "МДК 03", two_group_name: "",one_group_office:"10",two_group_office:"", time: "13:15-14:00"},
            {isSplit: true, one_group_name: "МДК 03", two_group_name: "",one_group_office:"10",two_group_office:"", time: "14:05-14:50"},
            {isSplit: true, one_group_name: "МДК 03", two_group_name: "",one_group_office:"10",two_group_office:"", time: "14:55-15:40"},
        ],
        wednesday_data: [
            {name: "Архитектура", office: "10", time: "8:30-9:15"},
            {name: "Архитектура", office: "10", time: "9:15-10:05"},
            {name: "Архитектура", office: "10", time: "10:10-10:55"},
            {name: "Архитектура", office: "10", time: "11:45-12:25"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"10",two_group_office:"214", time: "12:25-13:10"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"10",two_group_office:"214", time: "13:15-14:00"},
            {name: "обж", office: "401", time: "14:05-14:50"},
            {name: "обж", office: "401", time: "14:55-15:40"},
        ],
        Thursday_data: [
            {name: "физ-ра", office: "С/З", time: "8:30-9:15"},
            {name: "физ-ра", office: "С/З", time: "9:15-10:05"},
            {name: "Архитектура", office: "10", time: "10:10-10:55"},
            {name: "Архитектура", office: "10", time: "11:45-12:25"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"10",two_group_office:"206", time: "12:25-13:10"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"10",two_group_office:"206", time: "13:15-14:00"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"10",two_group_office:"206", time: "14:05-14:50"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"10",two_group_office:"206", time: "14:55-15:40"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"10",two_group_office:"206", time: "14:55-15:40"},
        ],
        Friday_data: [
            {name: "Менеджмент", office: "414", time: "8:30-9:15"},
            {name: "Менеджмент", office: "414", time: "9:15-10:05"},
            {name: "Менеджмент", office: "414", time: "10:10-10:55"},
            {name: "Менеджмент", office: "414", time: "11:45-12:25"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"421", time: "12:25-13:10"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"421", time: "13:15-14:00"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"206", time: "14:05-14:50"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"421", time: "14:55-15:40"},
        ],
        Friday_data: [
            {name: "Менеджмент", office: "Дар 1", time: "8:30-9:15"},
            {name: "Менеджмент", office: "Дар 1", time: "9:15-10:05"},
            {name: "Менеджмент", office: "Дар 1", time: "10:10-10:55"},
            {name: "Менеджмент", office: "Дар 1", time: "11:45-12:25"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"421", time: "12:25-13:10"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"421", time: "13:15-14:00"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"206", time: "14:05-14:50"},
            {isSplit: true, one_group_name: "Англ", two_group_name: "Англ",one_group_office:"421",two_group_office:"421", time: "14:55-15:40"},
        ],
        Saturday_data: [
            {name: "Дискретная математика", office: "", time: "8:30-9:15"},
            {name: "Дискретная математика", office: "", time: "9:15-10:05"},
            {name: "Дискретная математика", office: "", time: "10:10-10:55"},
            {name: "Дискретная математика", office: "", time: "11:00-11:45"},
            {name: "обед", office: "хз", time: "11:45-12:25"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"",two_group_office:"", time: "12:25-13:10"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"",two_group_office:"", time: "13:15-14:00"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"",two_group_office:"", time: "14:05-14:50"},
            {isSplit: true, one_group_name: "мдк02", two_group_name: "мдк02",one_group_office:"",two_group_office:"", time: "14:55-15:40"},
        ],
        voscr_data: [
            {name: "а отдыхать кто будет?", office: "😀", time: "😴"},
        ]
    }

    let [week_day_lessons, setWeek_day_lessons] = useState(lessons_data.monday_data)
    let [week_day, setWeek_day] = useState("Понедельник")

    return (
        <div className={classes.lessons}>
            <div className={classes.navbar}>
                <button href="" onClick={() => {setWeek_day_lessons(lessons_data.monday_data); setWeek_day("Понедельник")}}>Пн</button>
                <button href="" onClick={() => {setWeek_day_lessons(lessons_data.tuesday_data); setWeek_day("Вторник")}}>Вт</button>
                <button href="" onClick={() => {setWeek_day_lessons(lessons_data.wednesday_data); setWeek_day("Среда")}}>Ср</button>
                <button href="" onClick={() => {setWeek_day_lessons(lessons_data.Thursday_data); setWeek_day("Четверг")}}>Чт</button>
                <button href="" onClick={() => {setWeek_day_lessons(lessons_data.Friday_data); setWeek_day("Пятница")}}>Пт</button>
                <button href="" onClick={() => {setWeek_day_lessons(lessons_data.Saturday_data); setWeek_day("Суббота")}}>Сб</button>
                <button href="" onClick={() => {setWeek_day_lessons(lessons_data.voscr_data); setWeek_day("Воскресенье")}}>Вс</button>
            </div>
            <Lessons_list week_day_lessonss={week_day_lessons} week_day={week_day}/>
        </div>
    )
}

export default Lessons;