'use client';

import { Mail, Key, Eye, EyeOff } from 'lucide-react';

type Props = {
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    showPassword: boolean;
    setShowPassword: (value: boolean) => void;
};

export const EmailPasswordFields = ({
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
}: Props) => (
    <>
        <div className="relative">
            <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-md border border-gray-300 bg-white px-10 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
            />
        </div>
        <div className="relative">
            <Key className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-300 bg-white px-10 py-2 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
            >
                {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                ) : (
                    <Eye className="h-5 w-5" />
                )}
            </button>
        </div>
    </>
);
