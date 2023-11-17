import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    /* eslint-disable */
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div className="text-3xl" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
