'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { EmailPasswordFields } from '../shared/email-password-fields';

enum FormType {
    Client = 'CLIENT',
    Provider = 'PROVIDER',
}

export const LoginForm = () => {
    const [type, setType] = useState<FormType>(FormType.Client);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            email,
            plain: password,
            role: type,
        };

        console.log('Payload: ', payload);
    };

    return (
        <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md">
            <p className="mb-6 text-center text-sm text-gray-500">
                Sistema de agendamentos
            </p>

            <div className="relative flex w-full rounded-lg bg-gray-100 p-1">
                <motion.div
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className={`absolute top-0 bottom-0 left-0 w-1/2 rounded-md bg-white shadow transition-transform ${
                        type === FormType.Provider
                            ? 'translate-x-full'
                            : 'translate-x-0'
                    }`}
                />
                <button
                    type="button"
                    onClick={() => setType(FormType.Client)}
                    className={`z-10 flex-1 rounded-md py-2 text-sm font-medium transition-all duration-200 ${
                        type === FormType.Client
                            ? 'text-black'
                            : 'text-gray-500'
                    }`}
                >
                    Sou cliente
                </button>
                <button
                    type="button"
                    onClick={() => setType(FormType.Provider)}
                    className={`z-10 flex-1 rounded-md py-2 text-sm font-medium transition-all duration-200 ${
                        type === FormType.Provider
                            ? 'text-black'
                            : 'text-gray-500'
                    }`}
                >
                    Sou prestador
                </button>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <EmailPasswordFields
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
                <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-black py-2 text-white transition hover:bg-gray-900"
                >
                    Entrar
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Esqueci minha senha
            </p>

            <p className="mt-4 text-center text-sm text-gray-500">
                Não tem uma conta?{' '}
                <Link
                    href="/auth/register"
                    className="text-black hover:text-gray-800 hover:underline"
                >
                    Cadastre-se
                </Link>
            </p>
        </div>
    );
};
