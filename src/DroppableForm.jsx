import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Row, Col, Input, Button, Slider } from "antd";
import ResizableItem from "./ResizableItem";

const DroppableForm = ({ onDrop, items }) => {
  const [droppedItems, setDroppedItems] = useState(items || []);

  const [, drop] = useDrop({
    accept: ["input", "button"],
    drop: (item) => {
      setDroppedItems((prevItems) => [...prevItems, item]);
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const onEdit = (editedItem, newWidth) => {
    // Update the dimensions of the edited item
    console.log(
      "first",

      editedItem.width,
      newWidth
    );
    setDroppedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editedItem.id ? { ...item, width: newWidth } : item
      )
    );
  };

  return (
    <>
      <div
        ref={drop}
        style={{
          backgroundColor: "lightblue",
          padding: "16px",
        }}
      >
        <Row gutter={[16, 16]}>
          {droppedItems.map((item) => (
            <ResizableItem
              key={item.id}
              item={item}
              onEdit={(newWidth) => onEdit(item, newWidth)}
              style={({ width: item.width }, { height: item.height })}
            />
          ))}
        </Row>
      </div>
      <div style={{ width: "200px", marginTop: "16px" }}></div>
    </>
  );
};

export default DroppableForm;
