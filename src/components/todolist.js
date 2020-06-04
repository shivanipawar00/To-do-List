import React, { Component } from "react";
import Item from "./todoitem";
export default class todolist extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <section>
        <div>
          <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">todo list</h3>
            {items.map((item) => {
              return (
                <Item
                  key={item.id}
                  title={item.title}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                />
              );
            })}
            <button
              type="button"
              className="btn btn-danger"
              onClick={clearList}
            >
              Clear List
            </button>
          </ul>
        </div>
      </section>
    );
  }
}
