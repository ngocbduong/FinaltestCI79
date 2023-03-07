
// import { useState, useEffect } from 'react';
// import { v4 as uuidv4} from 'uuid';

// const Homepage = () => {
//     const [input, setInput] = useState("");
//     const [tasks, setTasks] = useState([]);
   
//     const handleUpdateTask = (task, event) => {
//         console.info(task)
//     }

//     const handleAddTask = (event) => {
//         event.preventDefault()
//         setTasks((prev) => {
//             return [...prev, {id: uuidv4(), description: input, status: 0}]
//         });
//         setInput("")
//     }

//     const handleInputChange = (event) => {
//         setInput(event.target.value)
//     }

//     useEffect(() => {
//         console.log(tasks);
//     }, [tasks])

//     const allTodoItemLi = []
    
//     tasks.forEach(item => {
// 		allTodoItemLi.push(<li key={item.id}><input type="checkbox" onClick={(event) => this.handleUpdateTask(item, event)} />{item.description}</li>)
// 	})

//     const inProgressTodoItemLi = []
//     tasks.forEach(item => {
//         if(item.status === 0)
// 		    inProgressTodoItemLi.push(<li>{item.description}</li>)
// 	})

//     const completedTodoItemLi = []
//     tasks.forEach(item => {
//         if(item.status === 1)
//         completedTodoItemLi.push(<li>{item.description}</li>)
// 	})

//     return (
//        <div>
//             <form onSubmit={handleAddTask}>
//                 <input type="text" value={input} onChange={handleInputChange}/>
//                 <button type="submit">Submit</button>
//             </form>
            
//             <ul>
//                {allTodoItemLi}
//             </ul>


            
//        </div>
//     );
// };

// export default Homepage;
