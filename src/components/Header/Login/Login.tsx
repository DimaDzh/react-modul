import LogForm from "../Forms/LogForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice";
import "./login.scss";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import LogInForm from "../Forms/LogInForm";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  };
  return <LogInForm handleClick={handleLogin} title="Войти" />;
};

export default Login;
