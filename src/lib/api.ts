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

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

async function apiRequest<T, E = definitions['errs.AppError']>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T, E>> {
    const url = `${BASE_URL}${endpoint}`;

    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
        throw data.error as E;
    }

    return {
        success: true,
        data,
    };
}

export const api = {
    auth: {
        login: (credentials: definitions['req.LoginUserRequest']) =>
            apiRequest<
                definitions['res.SuccessResponse'],
                definitions['errs.IncorrectPasswordError'] | definitions['errs.UserNotFoundError']
            >('/auth/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
            }),

        logout: () =>
            apiRequest<definitions['res.SuccessResponse'], definitions['errs.AuthError']>('/auth/logout', {
                method: 'POST',
            }),

        register: (data: definitions['req.RegisterUserRequest']) =>
            apiRequest<definitions['res.SuccessResponse'], definitions['errs.AlreadyExistsError']>('/auth/register', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
    },
};
