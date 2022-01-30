import {useState} from "react";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {

    const [cars, setCars] = useState([]);

const getFormData = (data) => {
  setCars([...cars,{id:new Date().getTime(), ...data}])
}

const getCarId = (id) => {
setCars(cars.filter(car=>car.id!==id))
}
    
    return (
        <>
            <Form getFormData={getFormData}/>
            <Cars cars={cars} getCarId={getCarId}/>

        </>
    );
}

export default App;
