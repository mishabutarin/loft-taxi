import React from 'react';
import logo1 from '../icons/logo1.png'
import logo2 from '../icons/logo2.png'
import './loginItem.css' 
export const Login = () => {
    return (
        <div className='wrapper__login'>
            <div className='lefside'>
                <ul className='leftside__list'>
                    <li className='leftside__item'><img src={ logo1 } alt="logo1" /></li>
                    <li className='leftside__item'><img src={ logo2 } alt="logo2" /></li>
                </ul>
            </div>
            <section className='form__section'>
            <div className='container'>
        <form className='Login'>
            <div className='login__text'>
            <h1>Войти</h1></div>
            <div className='form__col'>
                <div className='form__row'>
            <label className='email__lable lable' htmlFor='email'>Email </label>
            <input name='email' id='email' type='email' size='28' placeholder="Email"></input>
            </div>
            <div className='form__row'>
            <label className='password__lable lable' htmlFor='password'>Пароль</label>
            <input name='password' id='password' type='password' size='28' placeholder="*****"></input>
            </div>
            <button className='Forget__password'>Забыли пароль?</button>
            </div>
            <button type='submit' className='submit'>Войти</button>
            <div className='newUser'>
                <p>Новый пользователь?Регестрация</p>
            </div>
        </form>
        </div>
        </section>
        </div>
        
    );
};