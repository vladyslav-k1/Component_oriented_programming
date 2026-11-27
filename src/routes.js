export const ROUTES = {
  home: '/',
  earthquake: (id) => `/earthquake/${encodeURIComponent(id)}`,
};
