export default function AddTask({ taskList, setTaskList, task, setTask }) {
    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date();

        if (!task.name || task.name.trim() === "") return;

        if (task.id) {
            const updatedTaskList = taskList.map((todo) =>
                todo.id === task.id
                    ? { ...todo, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
                    : todo
            );
            setTaskList(updatedTaskList);
            setTask({});
        } else {
            const newTask = {
                id: date.getTime(),
                name: task.name,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };
            setTaskList([...taskList, newTask]);
            setTask({});
        }
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="task"
                    maxLength={25}
                    placeholder="Add Task"
                    value={task.name || ""}
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    );
}