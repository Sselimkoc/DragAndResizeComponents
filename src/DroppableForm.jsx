// DroppableForm.js
import React, { useState, useRef } from "react";
import { useDrop } from "react-dnd";
import ResizableItem from "./ResizableItem";

const DroppableForm = ({ onDrop, items }) => {
  const [droppedItems, setDroppedItems] = useState(items || []);
  const dropRef = useRef(null);

  const [, drop] = useDrop({
    accept: ["input", "button"],
    drop: (item, monitor) => {
      if (!dropRef.current) {
        return;
      }

      const offset = monitor.getSourceClientOffset();
      const left = offset.x - dropRef.current.getBoundingClientRect().left;
      const top = offset.y - dropRef.current.getBoundingClientRect().top;

      const newItem = { ...item, left, top };
      setDroppedItems((prevItems) => [...prevItems, newItem]);
      onDrop(newItem);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => {
        dropRef.current = node;
        drop(node);
      }}
      style={{
        backgroundColor: "lightblue",
        padding: "16px",
        position: "relative",
        height: 500,
        width: 500,
      }}
    >
      {droppedItems.map((item) => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            left: item.left,
            top: item.top,
          }}
        >
          <ResizableItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default DroppableForm;
