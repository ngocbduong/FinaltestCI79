import { useState } from 'react';

export const storageJobs = JSON.parse(localStorage.getItem('jobs'));

const AllPage = () => {
    
    const [input, setInput] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        setInput('');
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const [todoItems, setTodoItems] = useState(storageJobs ?? []);
    const addItems = () => {
        setTodoItems((prev) => {
            const newjobs = [...prev, input];
            const jsonJobs = JSON.stringify(newjobs);
            localStorage.setItem('jobs', jsonJobs);
            return newjobs;
        });
    };

    const [checked, setChecked] = useState();

    const todoItemsLi = todoItems.map((item, index) => {
        return (
            <div key={index} className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={checked === index}
                    onChange={() => setChecked(index)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {item}
                </label>
            </div>
        );
    })
        

    return (
        <div className="container mt-4">
            <form className="row g-4 " onSubmit={handleSubmit}>
                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                        add details
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPassword2"
                        placeholder="add details"
                        value={input}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={addItems}>
                        Add
                    </button>
                </div>
            </form>
            <div>
                {todoItemsLi}
            </div>
        </div>
    );
};

export default AllPage;



