import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const SideBar = () => {
  const { login, register, isAuthenticated, user, isLoading, logout } =
    useKindeAuth();
  console.log("User:", user); // Dodaj ovo da vidiš šta se nalazi u user objektu
  console.log("Is Authenticated:", isAuthenticated); // Dodaj ov

  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.10] px-[25px] pt-[18px] pb-[28px] flex flex-col h-full">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as: {user?.given_name}</p>
            <Button onClick={logout} buttonType="secondary">
              {" "}
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Login
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default SideBar;
