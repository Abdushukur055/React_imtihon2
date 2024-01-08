import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalApp = ({ modal, setModal, tasks, setTasks, title }) => {
  const [name, setName] = useState("");
  const [selects, setSelects] = useState("");

  const moveItems = () => {
    let payload = {
      name: name,
    };
    tasks.forEach((item1, index1) => {
      let num = selects - 1;
      if (index1 === num) {
        item1.title.push({ ...payload });
        setTasks([...tasks]);
      }
    });
    setModal(false);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader>
          <form>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="Title"
            />
          </form>
        </ModalHeader>
        <ModalBody>
          <form>
            <select
              onChange={(e) => setSelects(e.target.value)}
              className="form-control"
            >
              <option value="" hidden>
                Select
              </option>
              {tasks.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.items}
                  </option>
                );
              })}
            </select>
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={moveItems} className="btn btn-success">
            add
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalApp;
