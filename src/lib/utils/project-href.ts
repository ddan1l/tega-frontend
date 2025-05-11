export const projectHref = (slug: string): string =>
    `${process.env.NEXT_PUBLIC_FRONTEND_PROTO}//${slug}.${process.env.NEXT_PUBLIC_APP_URL}/`;
