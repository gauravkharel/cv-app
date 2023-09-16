import {useDraggable} from '@dnd-kit/core';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
/* eslint-disable */
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <label className='text-2xl' ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </label>
  );
}