type deleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

const DeleteButton = ({ id, onDeleteTodo }: deleteButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
