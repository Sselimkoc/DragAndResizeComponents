import React from "react";
import { useDrag } from "react-dnd";
import { Col, Input, Button } from "antd";

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: item.type,
    item: { id: item.id, ...item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Col
      ref={drag}
      span={8}
      style={{ cursor: "pointer", opacity: isDragging ? 0.5 : 1 }}
    >
      {item.type === "input" ? (
        <Input
          placeholder={item.type}
          style={{ width: 100, height: item.height }}
        />
      ) : (
        <Button style={{ width: 100, height: item.height }}>{item.type}</Button>
      )}
    </Col>
  );
};

export default DraggableItem;
