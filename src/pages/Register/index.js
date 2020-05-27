import React, { useState } from 'react';
import './styles.css';
import logo from '../../images/logo.svg';
import { FiArrowLeft }  from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
    
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try {
            const response = await api.post('ongs', data);

            alert(`SEU ID DE ACESSO: ${response.data.id}`);

            history.push('/');
        } catch(err) {
            alert('Erro no cadastro')
        }
        
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="logo" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadasdtro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="nome da ONG" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade" 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder="UF" style={{ width: 80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}