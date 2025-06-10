import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import c from "./UserMenu.module.css";
import { TbLogin2 } from "react-icons/tb";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={c.userMenu}>
      <p className={c.name}>{user.name}</p>
      <button
        className={c.btnExit}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <TbLogin2 className={c.iconLogOut} />
      </button>
    </div>
  );
};

export default UserMenu;
