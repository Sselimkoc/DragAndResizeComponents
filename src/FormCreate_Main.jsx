import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "./DraggableItem";
import DroppableForm from "./DroppableForm";
import { useState } from "react";

const FormCreate_Main = () => {
  const [dropItems, setDropItems] = useState([]);

  const addItem = (item) => {
    setDropItems((prevItems) => [
      ...prevItems,
      {
        id: item.id,
        name: item.name,
        type: item.type,
        width: item.width,
        height: item.height,
      },
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableItem
        item={{
          id: "item1",
          name: "Item 1",
          type: "input",
          width: "200",
          height: "50",
        }}
      />
      <DraggableItem
        item={{
          id: "item2",
          name: "Item 2",
          type: "button",
          width: "200",
          height: "50",
        }}
      />

      <DroppableForm onDrop={addItem} items={dropItems} />
    </DndProvider>
  );
};

export default FormCreate_Main;
