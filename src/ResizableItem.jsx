import React, { useState } from "react";
import { Resizable } from "react-resizable";
import { Col, Input, Button, Modal, Slider } from "antd";

const ResizableItem = ({ item, onEdit }) => {
  const [width, setWidth] = useState(Number(item.width));
  const [height, setHeight] = useState(Number(item.height));
  const [isEditing, setIsEditing] = useState(false);

  const onResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSliderChange = (flag, value) => {
    if (flag === "width") {
      setWidth(value);
    } else {
      setHeight(value);
    }
  };

  const handleOk = () => {
    setIsEditing(false);
    onEdit(item, width, height);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Col span={5} style={{ cursor: "pointer", margin: "8px" }}>
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
        open={isEditing}
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

      </Modal>
    </Col>
  );
};

export default ResizableItem;
