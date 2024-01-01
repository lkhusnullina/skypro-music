import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/user";
import { loginUser, registerUser } from "../../api";

export default function AuthPage({ isLoginMode = false }) {
  const {login} = useUserContext();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");
//   const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    if (!email) {
        setError("Укажите почту");
        return;
      }
  
      if (!password) {
        setError("Укажите пароль");
        return;
      }

    loginUser({
        email: email,
        password: password,
    }).then((user) => {
        isLoginMode(true)
        setEmail(user.email)
    }).catch((error) => {
        console.warn(error);
        alert(`Выполняется вход: ${email} ${password}`);
        setError("Неизвестная ошибка входа");
    })
    // api login
    // api.login(fcghfghfhg).then().catch(=>setError)

    login(email)
    
  };

  const handleRegister = async ({ email, password, username }) => {
    setError("");
    
    if (!email) {
        setError("Укажите почту");
        return;
    }

    if (!password) {
        setError("Укажите пароль");
        return;
    }

    if (!repeatPassword) {
        setError("Укажите повторный пароль");
        return;
    }

    if (password !== repeatPassword) {
        setError("Пароли не совпадают");
        return;
    }
    
    registerUser({
        email: email, 
        password: password, 
        username: username,
    })
    .then((user) => {
        console.log(111);
        console.log(user);
        isLoginMode(true)
        setEmail(user.email)
    })
    .catch((error) => {
        console.warn(error);
        // alert(`Выполняется регистрация: ${email} ${password}`);
        setError("Неизвестная ошибка регистрации");
    })
    
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/registration">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
            <S.ModalInput
                type="text"
                name="username"
                placeholder="Имя пользователя"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleRegister({ email, password, username })}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}