import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice";
import LogForm from "../Forms/LogForm";

interface SignUpProps {
  title?: string;
}

const SingUp: FC<SignUpProps> = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );

        navigate("/account");
      })
      .catch(console.error);
  };

  return (
    <>
      <LogForm handleClick={handleRegister} title="Зарегестрироваться" />
    </>
  );
};

export default SingUp;
