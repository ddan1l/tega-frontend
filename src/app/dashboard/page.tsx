import { useAuth } from '@/providers/auth-context';
import { cookies } from 'next/headers';

export default async function AppPage() {
    const { user } = useAuth();

    return (
        <div className="p-50">
            <p className="mt-10 text-2xl">{JSON.stringify(user)}</p>
        </div>
    );
}
