import React from 'react'
import classes from './ViewBlock.module.css'

const ViewBlock = (props) => {

    const new_color = React.createRef();

    const root = document.querySelector(':root')
    const root_variable = props.root_variable;

    function change_color() {
        let color_value = new_color;
        root.style.setProperty(root_variable, color_value.current.value);
    }

    return (
        <div className={classes.setting_block}>
            <h3 className={classes.setting_title}>{props.setting_title}</h3>
            <div className={classes.change_inner}>
                <input className={classes.settings_input} type="color" ref={new_color} />
                <button className={classes.add_change_button} id="bg_color" onClick={change_color}>✓</button>
            </div>
        </div>
    )
}

export default ViewBlock