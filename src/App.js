import './App.css';
import InputForm from "./components/InputForm/InputForm";
import DataFeed from "./components/DataFeed/DataFeed";
import {useState} from "react";


function App() {
    const INIT_DATA = [
        {name: 'Nick', age: 37},
        {name: 'Bulochka', age: 32}
    ]

    const [users, setUsers] = useState(INIT_DATA);

    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [...prevUsers, user]
        })
    }

    return (
        <div>
            <InputForm onAddUser={addUserHandler}/>
           <DataFeed users={users}/>
        </div>
    );
}

export default App;
