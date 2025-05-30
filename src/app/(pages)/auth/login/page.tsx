'use client';

import { LoginForm } from '@/modules/auth/components/login-form';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <LoginForm />
        </div>
    );
}
