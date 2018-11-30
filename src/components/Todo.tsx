import { useStore } from "easy-peasy";
import React from "react";
import { IModel } from "../store/model";

export const Todo = () => {
  const todos = useStore<IModel, string[]>((state) => state.todos.items);

  return (
    <div>
      {todos.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  );
};
