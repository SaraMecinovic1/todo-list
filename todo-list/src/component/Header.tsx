import Counter from "./Counter";

type HeaderProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};

const Header = ({
  totalNumberOfTodos,
  numberOfCompletedTodos,
}: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.10]">
      <img
        src="https://bytegrad.com/course-assets/react-nextjs/dots.png"
        alt="dots"
      />
      <Counter
        totalNumberOfTodos={totalNumberOfTodos}
        numberOfCompletedTodos={numberOfCompletedTodos}
      />
    </header>
  );
};

export default Header;
