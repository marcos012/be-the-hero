import React, { useState } from 'react';
import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import api from '../../services/api'

import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

const Logon = () => {
    const [id, setId] = useState('');
    
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault(); 

        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch {
            alert('Falha no login.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />
        </div> 
    );
}
 
export default Logon;