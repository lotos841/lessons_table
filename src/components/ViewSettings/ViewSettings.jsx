import React from 'react'
import classes from './ViewSettings.module.css'
import ViewBlock from './ViewBlock/ViewBlock'


const Settings = () => {

    return (
        <div className={classes.ViewSettings}>
            <h2 className={classes.title}>настройки вида</h2>
            <div>
                <ViewBlock setting_title="задний фон" root_variable="--main-bg-color"/>
                <ViewBlock setting_title="цвет блоков" root_variable="--block-bg-color"/>
                <ViewBlock setting_title="цвет текста" root_variable="--text-color"/>
                <ViewBlock setting_title="цвет рамок" root_variable="--border-color"/>
                <ViewBlock setting_title="цвет hover(наведение)" root_variable="--hover-color"/>
                <p>ps. Пока нет куки файлов для запоминания</p>
            </div>
        </div>
    )
}

export default Settings