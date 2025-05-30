'use client';

import { RegisterForm } from '@/modules/auth/components/register-form';

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <RegisterForm />
        </div>
    );
}
