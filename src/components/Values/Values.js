import React from 'react';
import {useSelector} from "react-redux";

import Value from "../Value/Value";

const Values = () => {

    const {formValues} = useSelector(state=>state.form);

    return (
        <div>
            {formValues.map(value=> <Value key={value.id} value={value}/>)}
        </div>
    );
};

export default Values;