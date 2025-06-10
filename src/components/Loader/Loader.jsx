import s from "./Loader.module.css";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <SyncLoader color="#3f51b5" />
    </div>
  );
};

export default Loader;
