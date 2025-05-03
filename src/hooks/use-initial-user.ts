import { api } from '@/lib/api';
import { redirect } from 'next/navigation';

export async function getInitialUser() {
    try {
        const res = await api.user.user();

        if (res.success) {
            return res.data;
        }

        redirect(`/auth/login`);
    } catch (e) {
        console.error(e);
        //redirect(`/auth/login`);
    }
}
