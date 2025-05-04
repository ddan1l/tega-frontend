import { api } from '@/lib/api';

export async function fetchInitialProjects() {
    try {
        const res = await api.user.projects();
        return res.success ? res.data.projects || [] : null;
    } catch (e) {
        throw e;
    }
}
