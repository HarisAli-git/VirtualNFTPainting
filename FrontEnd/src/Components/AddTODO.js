import { useState } from "react"

const AddTODO = ({AddTodo}) => {
    const [task, setTask] = useState('');

    const handleChange = (e) =>
    {
        setTask(e.target.value);
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        AddTODO(e.target.value);
    }

    return (  
        <div>
            <form onSubmit={()=> {handleSubmit()}}>
                <label>Enter new TODO task: </label>
                <input onChange={()=> {handleChange()}} type="text"></input>
            </form>
        </div>
    );
}

export default AddTODO;