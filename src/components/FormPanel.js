import React from 'react';


export default class PanelForm extends React.Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <form>
                <div>
                    <label htmlFor="input-city">Ciudades</label>
                    <input type="text" id="input-city" value="" />
                </div>
                <fieldset>
                    <div className="input-wrapper radio-btn">
                        <label htmlFor="input-city-name">Ciudad de Resistencia</label>
                        <input type="radio" id="input-city-name" value="" />
                    </div>
                </fieldset>
            </form>
        )
    }
}