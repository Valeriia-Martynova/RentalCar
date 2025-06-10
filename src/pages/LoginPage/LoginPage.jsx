import LoginForm from "../../components/LoginForm/LoginForm";
import { TbLogin2 } from "react-icons/tb";
import c from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <TbLogin2 className={c.iconLogin} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
