import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  editTodo,
} from "../../services/redux/slice/todos-slice";
import Loading from "../../components/Loading.component";

import MingcuteAddFill from "../../assets/icons/MingcuteAddFill";
import MingcuteDelete3Line from "../../assets/icons/MingcuteDelete3Line";
import MingcuteEdit2Line from "../../assets/icons/MingcuteEdit2Line";

import styles from "./todos.module.css";

export default function TodosComponent() {
  const loading = false;
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [checkedTodos, setCheckedTodos] = useState({});

  if (loading) {
    return <Loading />;
  }

  const addNewTodo = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(editTodo({ id: editId, title: todo }));
      setEditId(null);
    } else {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const editTodos = (id, title) => {
    setEditId(id);
    setTodo(title);
  };

  const Checkbox = (id) => {
    setCheckedTodos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={styles["todo-app"]}>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">
          {editId ? <MingcuteEdit2Line /> : <MingcuteAddFill />}
        </button>
      </form>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={checkedTodos[todo.id] || false}
              onChange={() => Checkbox(todo.id)}
            />

            <p className={styles[checkedTodos[todo.id] ? "color-text" : ""]}>
              {`${todo.id}- ${todo.title}`}
            </p>

            <span onClick={() => editTodos(todo.id, todo.title)}>
              <MingcuteEdit2Line />
            </span>
            <span onClick={() => deleteTodo(todo.id)}>
              <MingcuteDelete3Line />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
