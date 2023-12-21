import React, { useState } from "react";
import { Resizable } from "react-resizable";
import { Input, Button, Modal, Slider } from "antd";

// ... (import statements)

const ResizableItem = ({ item }) => {
  const [width, setWidth] = useState(Number(item.width));
  const [height, setHeight] = useState(Number(item.height));
  const [left, setLeft] = useState(item.left);
  const [top, setTop] = useState(item.top);
  const [isEditing, setIsEditing] = useState(false);

  const onResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
    setLeft(size.left);
    setTop(size.top);
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSliderChange = (flag, value) => {
    if (flag === "width") {
      setWidth(value);
    } else if (flag === "height") {
      setHeight(value);
    } else if (flag === "top") {
      setTop(value);
    } else {
      setLeft(value);
    }
  };

  const handleOk = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setWidth(Number(item.width));
    setHeight(Number(item.height));
    setLeft(Number(item.left));
    setTop(Number(item.top));
  };

  return (
    <div style={{ cursor: "pointer", margin: "8px" }}>
      <Resizable width={width} height={height} onResize={onResize}>
        <div
          style={{
            width,
            height,
            border: "1px solid #ddd",
            boxSizing: "border-box",
          }}
          onClick={handleClick}
        >
          {item.type === "input" ? (
            <Input
              placeholder={item.name}
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #ddd",
                boxSizing: "border-box",
              }}
            />
          ) : (
            <Button
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #ddd",
                boxSizing: "border-box",
              }}
            >
              {item.type}
            </Button>
          )}
        </div>
      </Resizable>
      <Modal
        title="Resize"
        visible={isEditing}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ marginTop: 50 }}
      >
        <Slider
          min={20}
          max={850}
          value={width}
          onChange={(value) => handleSliderChange("width", value)}
          style={{ marginBottom: 16 }}
        />
        <Slider
          min={20}
          max={850}
          value={height}
          onChange={(value) => handleSliderChange("height", value)}
          style={{ marginBottom: 16 }}
        />
        <Slider
          min={20}
          max={850}
          value={top}
          onChange={(value) => handleSliderChange("top", value)}
          style={{ marginBottom: 16 }}
        />
        <Slider
          min={20}
          max={850}
          value={left}
          onChange={(value) => handleSliderChange("left", value)}
          style={{ marginBottom: 16 }}
        />
      </Modal>
    </div>
  );
};

export default ResizableItem;
