import TodoData from "./TodoData";
import TodoInput from "./TodoInput";
import TodoTittle from "./TodoTittle"

const TodoList = () => {
    return (
        <>
            <div className="main">
                <TodoTittle />
                <TodoInput />
                {/* <TodoData /> */}
            </div>
        </>
    )
}
export default TodoList;