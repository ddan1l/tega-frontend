import type { definitions } from '../types/api';

type ApiSuccess<T> = {
    success: true;
    data: T;
};

type ApiError<E = definitions['errs.AppError']> = {
    success: false;
    error: E;
    status: number;
};

type ApiResponse<T, E = definitions['errs.AppError']> = ApiSuccess<T> | ApiError<E>;

const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    (process.browser ? `${location.origin}/api` : 'http://backend:8080/api');

async function apiRequest<T, E = definitions['errs.AppError']>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T, E>> {
    const url = `${BASE_URL}${endpoint}`;

    await new Promise((resolve) => setTimeout(resolve, 500));

    options = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    };

    if (!process.browser) {
        const { cookies } = await import('next/headers');
        options.headers = {
            ...options.headers,
            Cookie: (await cookies()).toString(),
        };
    }

    const response = await fetch(url, {
        ...options,
        credentials: 'include',
    });

    const res = await response.json();

    if (!response.ok) {
        throw res.error as E;
    }

    return res;
}

export const api = {
    auth: {
        login: (data: definitions['req.LoginUserRequest']) =>
            apiRequest<
                definitions['res.SuccessResponse'],
                definitions['errs.IncorrectPasswordError'] | definitions['errs.UserNotFoundError']
            >('/auth/login', {
                method: 'POST',
                body: JSON.stringify(data),
            }),

        logout: () =>
            apiRequest<definitions['res.SuccessResponse'], definitions['errs.AuthError']>(
                '/auth/logout',
                {
                    method: 'POST',
                }
            ),

        register: (data: definitions['req.RegisterUserRequest']) =>
            apiRequest<
                definitions['res.SuccessResponse'],
                definitions['errs.AlreadyExistsError'] | definitions['errs.ValidationFailedError']
            >('/auth/register', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
    },
    user: {
        user: () =>
            apiRequest<definitions['res.UserResponse'], definitions['errs.ForbiddenError']>(
                '/user',
                {
                    method: 'GET',
                }
            ),

        projects: () =>
            apiRequest<definitions['res.ProjectsResponse'], definitions['errs.BadRequestError']>(
                '/user/projects',
                {
                    method: 'GET',
                }
            ),
        createProject: (data: definitions['req.CreateProjectRequest']) =>
            apiRequest<
                definitions['res.ProjectResponse'],
                | definitions['errs.BadRequestError']
                | definitions['errs.ForbiddenError']
                | definitions['errs.ValidationFailedError']
            >('/user/project', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
    },
};
