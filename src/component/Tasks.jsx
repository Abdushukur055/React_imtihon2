import React from "react";
import { useState } from "react";
import ModalApp from "./ModalApp";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, items: "Open", title: [{ name: "task1" }] },
    { id: 2, items: "Pending", title: [{ name: "task2" }] },
    { id: 3, items: "Inproge", title: [{ name: "task3" }] },
    { id: 4, items: "Progress", title: [{ name: "task4" }] },
  ]);
  const [modal, setModal] = useState(false);

  const addUser = (id) => {
    tasks.forEach((item, index) => {
      if (item.id === id) {
        setModal(true);
      }
    });
  };

  const DeleteTasks = (item2, index2) => {
    item2.title.splice(index2, 1);
    setTasks([...tasks]);
  };

  return (
    <div className="box3">
      <ModalApp
        modal={modal}
        setModal={setModal}
        tasks={tasks}
        setTasks={setTasks}
      ></ModalApp>

      {tasks.map((item2, index1) => {
        return (
          <div className="box2 border">
            <h1>{item2.items}</h1>
            <div className="box">
              {item2.title.map((item, index2) => {
                return (
                  <div className="box5">
                    <h3>{item.name}</h3>
                    <button
                      className="btn btn-info"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => DeleteTasks(item2, index2, index1)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
            <button
              className="btn btn-success my-3"
              onClick={() => addUser(item2.id)}
            >
              Add user
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
