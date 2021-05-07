import React from "react"

export default function CloseOrder(props) {
    
    return (
        <footer>
            <button className={props.class}>
                <div>{props.message}</div>
            </button>
        </footer>
    )
}