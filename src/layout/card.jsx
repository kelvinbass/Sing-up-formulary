/* eslint-disable import/no-anonymous-default-export */
import './card.css'
import React from 'react'

export default props =>
    <div className="Card">
        <div className="Content">
            {props.children}
        </div>
    </div>