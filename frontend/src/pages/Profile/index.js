import React from 'react';
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

const Profile = () => {
    const ongName = localStorage.getItem('ongName');
    return ( 
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>            
                <button>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p></p>
                        <strong>VALOR:</strong>
                        <p></p>

                        <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p></p>
                        <strong>VALOR:</strong>
                        <p></p>

                        <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p></p>
                        <strong>VALOR:</strong>
                        <p></p>

                        <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p></p>
                        <strong>VALOR:</strong>
                        <p></p>

                        <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p></p>
                        <strong>VALOR:</strong>
                        <p></p>

                        <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                </ul>
        </div>
    );
}
 
export default Profile;