const ADMIN_ROOT = `/${process.env.ADMIN_ROOT}`

export const LINKS = {
    HOMEPAGE: '/',

    VIEWER_PROFILE: '/u/profile',
    VIEWER_SETTINGS: '/u/settings',

    ADMIN: {
        _DEFAULT: `${ADMIN_ROOT}/blogs`,

        ROOT: ADMIN_ROOT,

        BLOGS: `${ADMIN_ROOT}/blogs`,
        FOOTER: `${ADMIN_ROOT}/footer`,
        DASHBOARD: `${ADMIN_ROOT}/dashboard`,
        ANALYTICS: `${ADMIN_ROOT}/analytics`,
    }
}