type deleteButtonProps = {
  id: number;
  deleteTodo: (id: number) => void;
};

const DeleteButton = ({ id, deleteTodo }: deleteButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
