import { api } from '@/lib/api';
import { definitions } from '@/types/api';

export async function fetchInitialApp(): Promise<{
    projectUser?: definitions['project_dto.ProjectUserDto'];
    projects?: definitions['project_dto.ProjectDto'][];
} | null> {
    try {
        const res = await api.user.userApp();
        return res.success ? res.data : null;
    } catch (e) {
        throw e;
    }
}
