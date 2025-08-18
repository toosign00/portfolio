export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:id',
  GUESTBOOK: '/guestbook',
} as const;

export const getProjectPath = (id: string) => `/projects/${id}`;
