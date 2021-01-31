/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default () =>
    <form className="Form">

        <section className="Name">
            <label For="Name"><strong>Name: </strong></label>
            <input type="text"/>

            <label For="Lastname"><strong>Last Name: </strong></label>
            <input type="text"/>
        </section>

        <section className="Personal">
            <label><strong>Social ID: </strong>
                <input type="number"/>
            </label>

            <label><strong>Birthday: </strong>
                <input type="date"/>
            </label>
        </section>

        <div className="Email">
            <label For="Email"><strong>Email: </strong></label>
            <input type="email"/>
        </div>

        <section className="Endress">
            <label For="Endress"></label>
                <label><strong>Street: </strong>
                    <input type="text"/>
                </label>

                <label><strong>Nº </strong>
                    <input type="number"/>
                </label>

            <section>
                <label><strong>City: </strong>
                    <input type="text"/>
                </label>

                <label><strong>State: </strong>
                    <input type="text"/>
                </label>
            </section>

            <div>
                <label For="Country"><strong>Country: </strong></label>
                <input type="text"/>
            </div>
        </section>

        <div className="Fone">
            <label For="Fone"><strong>Tel: </strong></label>
            <input type="tel" placeholder="(xx) xxxxx-xxxx"/>
        </div>
    </form>