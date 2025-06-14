/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/auth/login": {
    /** Authenticate user */
    post: {
      parameters: {
        body: {
          /** Login credentials */
          request: definitions["req.LoginUserRequest"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessResponse"];
        };
        /** Unauthorized */
        401: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.IncorrectPasswordError"];
          };
        };
        /** Not Found */
        404: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.UserNotFoundError"];
          };
        };
        /** Unprocessable Entity */
        422: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ValidationFailedError"];
          };
        };
      };
    };
  };
  "/auth/logout": {
    /** Logout user */
    post: {
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessResponse"];
        };
        /** Bad Request */
        400: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.AuthError"];
          };
        };
      };
    };
  };
  "/auth/register": {
    /** Register user */
    post: {
      parameters: {
        body: {
          /** Register credentials */
          request: definitions["req.RegisterUserRequest"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessResponse"];
        };
        /** Not Found */
        404: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.AppError"];
          };
        };
        /** Conflict */
        409: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.AlreadyExistsError"];
          };
        };
        /** Unprocessable Entity */
        422: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ValidationFailedError"];
          };
        };
      };
    };
  };
  "/project": {
    /** Create Project */
    post: {
      parameters: {
        body: {
          /** Create project request */
          request: definitions["req.CreateProjectRequest"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessWithDataResponse"] & {
            data?: definitions["res.ProjectResponse"];
          };
        };
        /** Bad Request */
        400: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.BadRequestError"];
          };
        };
        /** Forbidden */
        403: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ForbiddenError"];
          };
        };
        /** Unprocessable Entity */
        422: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ValidationFailedError"];
          };
        };
      };
    };
  };
  "/project/user": {
    /** Project user */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessWithDataResponse"] & {
            data?: definitions["res.ProjectUserResponse"];
          };
        };
        /** Bad Request */
        400: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.BadRequestError"];
          };
        };
        /** Forbidden */
        403: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ForbiddenError"];
          };
        };
      };
    };
  };
  "/project/users": {
    /** Project users */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessWithDataResponse"] & {
            data?: definitions["res.ProjectUsersResponse"];
          };
        };
        /** Bad Request */
        400: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.BadRequestError"];
          };
        };
        /** Forbidden */
        403: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ForbiddenError"];
          };
        };
      };
    };
  };
  "/projects": {
    /** UserProjects */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessWithDataResponse"] & {
            data?: definitions["res.ProjectsResponse"];
          };
        };
        /** Bad Request */
        400: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.BadRequestError"];
          };
        };
        /** Forbidden */
        403: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ForbiddenError"];
          };
        };
      };
    };
  };
  "/user": {
    /** AuthenticatedUser */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessWithDataResponse"] & {
            data?: definitions["res.UserResponse"];
          };
        };
        /** Forbidden */
        403: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ForbiddenError"];
          };
        };
      };
    };
  };
  "/user/app": {
    /** User app */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["res.SuccessWithDataResponse"] & {
            data?: definitions["res.UserAppResponse"];
          };
        };
        /** Forbidden */
        403: {
          schema: definitions["res.ErrorResponse"] & {
            error?: definitions["errs.ForbiddenError"];
          };
        };
      };
    };
  };
}

export interface definitions {
  "errs.AlreadyExistsError": {
    /** @example ALREADY_EXISTS */
    code?: string;
    /** @example Already exists. */
    message?: string;
    /** @example 409 */
    status?: number;
  };
  "errs.AppError": {
    code?: string;
    details?: unknown;
    message?: string;
    status?: number;
  };
  "errs.AuthError": {
    /** @example AUTH_FAILED */
    code?: string;
    /** @example Failded authorize user. */
    message?: string;
    /** @example 400 */
    status?: number;
  };
  "errs.BadRequestError": {
    /** @example BAD_REQUEST */
    code?: string;
    /** @example Bad request. */
    message?: string;
    /** @example 400 */
    status?: number;
  };
  "errs.ForbiddenError": {
    /** @example FORBIDDEN */
    code?: string;
    /** @example Forbidden. */
    message?: string;
    /** @example 403 */
    status?: number;
  };
  "errs.IncorrectPasswordError": {
    /** @example INCORRECT_PASSWORD */
    code?: string;
    /** @example Incorrect password. */
    message?: string;
    /** @example 401 */
    status?: number;
  };
  "errs.UserNotFoundError": {
    /** @example USER_NOT_FOUND */
    code?: string;
    /** @example User not found. */
    message?: string;
    /** @example 400 */
    status?: number;
  };
  "errs.ValidationFailedError": {
    /** @example VALIDATION */
    code?: string;
    /** @example Validation error. */
    message?: string;
    /** @example 422 */
    status?: number;
  };
  "project_dto.ProjectDto": {
    /** @example test description */
    description?: string;
    /** @example 1 */
    id?: number;
    /** @example test */
    name?: string;
    /** @example test */
    slug?: string;
  };
  "project_dto.ProjectUserDto": {
    /** @example 1 */
    id?: number;
    project?: definitions["project_dto.ProjectDto"];
    /** @example 1 */
    project_id?: number;
    /** @example 1 */
    role_id?: number;
    user?: definitions["user_dto.UserDto"];
    /** @example 1 */
    user_id?: number;
  };
  "req.CreateProjectRequest": {
    description?: string;
    name: string;
    slug: string;
  };
  "req.LoginUserRequest": {
    email: string;
    password: string;
  };
  "req.RegisterUserRequest": {
    email: string;
    fullname: string;
    password: string;
  };
  "res.ErrorResponse": {
    error?: definitions["errs.AppError"];
    /** @example false */
    success?: boolean;
  };
  "res.ProjectResponse": {
    project?: definitions["project_dto.ProjectDto"];
  };
  "res.ProjectUserResponse": {
    projectUser?: definitions["project_dto.ProjectUserDto"];
  };
  "res.ProjectUsersResponse": {
    projectUsers?: definitions["project_dto.ProjectUserDto"][];
  };
  "res.ProjectsResponse": {
    projects?: definitions["project_dto.ProjectDto"][];
  };
  "res.SuccessResponse": {
    /** @example true */
    success?: boolean;
  };
  "res.SuccessWithDataResponse": {
    data?: unknown;
    /** @example true */
    success?: boolean;
  };
  "res.UserAppResponse": {
    projectUser?: definitions["project_dto.ProjectUserDto"];
    projects?: definitions["project_dto.ProjectDto"][];
  };
  "res.UserResponse": {
    /** @example john@john.com */
    email?: string;
    /** @example John */
    fullName?: string;
    /** @example 1 */
    id?: number;
  };
  "user_dto.UserDto": {
    /** @example john@john.com */
    email?: string;
    /** @example John */
    fullName?: string;
    /** @example 1 */
    id?: number;
  };
}

export interface operations {}

export interface external {}
