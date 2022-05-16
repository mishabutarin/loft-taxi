import React from 'react';
import logo1 from '../../icons/logo1.png'
import logo2 from '../../icons/logo2.png'
export const SignUp = ( ) => {
    return (
    <div className='wrapper'>
    <div className='lefside'>
        <ul className='leftside__list'>
            <li className='leftside__item'><img src={ logo1 } alt="logo1" /></li>
            <li className='leftside__item'><img src={ logo2 } alt="logo2" /></li>
        </ul>
        <section className='form__section'>
                <div className='container'>
                    <form className='Login'>
                        <div className='login__text'>
                            <h1>Регистрация</h1>
                        </div>
                        <div>
                            <div className='input__block'>
                                <label className='email__lable lable' htmlFor='email'>Email* </label>
                                <input name='email' id='email' type='email' size='28' placeholder="Email"></input>
                            </div>
                            <div className='input__block'>
                                <label className='email__lable lable' htmlFor='email'>Как вас зовут? </label>
                                <input name='email' id='email' type='email' size='28' placeholder="Петр Александрович"></input>
                            </div>
                            <div className='input__block'>
                                <label className='password__lable lable' htmlFor='password'>Придумайте пароль</label>
                                <input name='password' id='password' type='password' size='28' placeholder="**********"></input>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='submit'>Зарегистрироваться</button>
                        </div>
                        <div className='newUser'>
                            <p>Уже зарегестрированны?<button className='yellow__word' onClick={() => {this.navigateTo("login");}}>Войти</button></p>
                        </div>
                    </form>
                </div>
            </section>
    </div>
    </div>
    )
}