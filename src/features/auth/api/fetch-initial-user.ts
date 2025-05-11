import { api } from '@/lib/api';

export async function fetchInitialUser() {
    try {
        const res = await api.user.user();
        return res.success ? res.data : null;
    } catch (e) {
        console.error(e);
        throw e;
    }
}
