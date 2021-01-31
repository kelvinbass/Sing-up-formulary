/* eslint-disable import/no-anonymous-default-export */
import './app.css'
import React from 'react'

import Card from './layout/card'
import Form from './components/form'

export default (props) => (
    <div className="App">
        <Card>
            <div className="Title">
                <h2>Sing Up</h2>
            </div>
            <Form></Form>
        </Card>
    </div>
)