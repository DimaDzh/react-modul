import { useAppSelector } from "./redux-hooks";

export function useAuth() {
  const { email, token, id, userName, phone } = useAppSelector(
    (state) => state.user
  );

  return {
    isAuth: !!email,
    email,
    userName,
    token,
    id,
    phone,
  };
}
