import React, { Component } from 'react';

// dependencies
import AsyncSearchBar from './AsyncSearchBar/AsyncSearchBar';

const searchWrapper = {
    margin: '10px 0 0'
}
export default class PanelForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={searchWrapper}>
                <AsyncSearchBar />
            </div>
        )
    }
}

/* <form>
<fieldset>
    <div className="input-wrapper radio-btn">
        <label htmlFor="input-city-name">Ciudad de Resistencia</label>
        <input type="radio" id="input-city-name" value="" />
    </div>
</fieldset>
</form> */