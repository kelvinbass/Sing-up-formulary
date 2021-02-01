/* eslint-disable import/no-anonymous-default-export */
import './form.css'
import React from 'react'

export default () =>
    <form className="Form">
        
        <section>
            <label For="Name"><strong>Nome </strong></label>
            <input type="text"/>

            <label For="Lastname"><strong>Sobrenome</strong></label>
            <input type="text"/>
        </section>

        <section ><p></p>
            <label><strong>CPF</strong>
                <input className="Cpf" type="number"/>
            </label>

            <label className="Nascimento"><strong>Nascimento</strong>
                <input className="Birthday" type="date"/>
            </label>
        </section>

        <div><p></p>
            <label className="Sexo"><strong>Sexo</strong>
                <input className="Radio" type="radio"  name="sexo" checked/><strong>Masculino</strong>
            </label>
            <label >
                <input className="Radio" type="radio" name="sexo"/><strong>Feminino</strong>
            </label>
        </div>

        <section className="Endereço"><p></p>
            <label For="Street"><strong>Rua</strong></label>
            <input className="Rua" type="text"/>
    

            <label For="Number"><strong>Número</strong></label>
            <input ClassName="Numero" type="number" />
        </section>

        <section><p></p>
            <label For="City"><strong>Cidade</strong></label>
            <input type="text"/>

            <label For="State"><strong>Estado</strong></label>
            <input className="Estado" type="text"/>
        </section>

        <div><p></p>
            <label  For="Country"><strong>País</strong></label>
            <input className="Pais" type="text"/>
        </div>
        
        <div className="Fone"><p></p>
            <label For="Email"><strong>Email</strong></label>
            <input className="Email" type="email"/>
        </div>

        <div ><p></p>
            <label  For="Fone"><strong>Telefone</strong></label>
            <input  type="tel" placeholder="(xx) xxxxx-xxxx"/>
        </div> 

        <div className="Campo"><p></p>
            <label id="textarea"><strong>Faça um breve resumo sobre você.</strong><p></p>
                <textarea className="Obs" name="areadetexo" id="" cols="76" rows="6"></textarea>
            </label>
        </div>   
    </form>