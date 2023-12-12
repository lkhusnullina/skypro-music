
import { NavLink } from "react-router-dom";

export const LoginPage = () => {



    return (
        <div>
            <h1>Страница логина</h1>
            <div className="modal__block">
                <form className="modal__form-login" action="#">
                    {/* <a href="../">
                    <div className="modal__logo">
                        <img src="../img/logo_modal.png" alt="logo" />
                    </div>
                    </a>
                    <input
                    className="modal__input login"
                    type="text"
                    name="login"
                    placeholder="Почта"
                    />
                    <input
                    className="modal__input password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    /> */}
                    <button className="modal__btn-enter">
                        <NavLink to="/" onClick={() => {localStorage.setItem('token', 'token12iu183y')}}>Войти</NavLink>
                    </button>
                    <button className="modal__btn-signup">
                        <NavLink to="/registration">Зарегистрироваться</NavLink>
                    </button>
                </form>
            </div> 
        </div>
    )
}