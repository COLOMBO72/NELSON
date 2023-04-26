import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]) //[] - у эффекта нет зависимости, отрисуйся один раз, если есть то если есть статус то отрисуйся

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || ' '}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;