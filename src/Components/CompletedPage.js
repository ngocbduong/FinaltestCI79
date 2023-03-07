import { storageJobs } from './AllPage';
import { useState } from 'react';

const CompletedPage = () => {
    const items = storageJobs;
    const [checked, setChecked] = useState('text-decoration-none');
    const [changeItems, setChangedItems] = useState(items ?? []);
    const handleChange = () => {
        setChecked((prev) =>
            prev === 'text-decoration-none' ? 'text-decoration-line-through' : 'text-decoration-none',
        );
    };

    const handleDelete = (i) => {
        setChangedItems(() => {
            const changeItems1 = changeItems.slice(0, i);
            const changeItems2 = changeItems.slice(i + 1, changeItems.length);
            const newChangeItems = changeItems1.concat(changeItems2);
            localStorage.setItem('jobs', JSON.stringify(newChangeItems));
            return newChangeItems;
        });
    };

    const DeleteAll = (index) => {
        changeItems.splice(index,changeItems.length);
        let ItemsDelete=[...changeItems];
        localStorage.setItem("jobs", JSON.stringify(ItemsDelete));
        return setChangedItems(ItemsDelete);
    };


    const todoItemsLi = changeItems.map((item, i) => {
        return (
            <div key={i} className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    value={changeItems}
                    onChange={() => handleChange(i)}
                />
                <label  className="form-check-label " htmlFor="flexCheckDefault">
                    <p
                        className={
                            checked === 'text-decoration-none' ? 'text-decoration-none' : 'text-decoration-line-through'
                        }
                    >
                        {item}
                        <button style={{marginLeft: "100px"}} type="button" className="close" aria-label="Close" onClick={() => handleDelete(i)}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </p>
                </label>
            </div>
        );
    });

    return (
        <div className="container mt-4">
            {todoItemsLi}
            <button className="btn btn-danger" onClick={DeleteAll}>
                &times;Delete all
            </button>
        </div>
    );
};

export default CompletedPage;
