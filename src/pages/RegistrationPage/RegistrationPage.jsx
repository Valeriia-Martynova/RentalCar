import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { MdAppRegistration } from "react-icons/md";
import c from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div>
      <MdAppRegistration className={c.iconRegistration} />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
