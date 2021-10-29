interface NavRoute {
  label: string;
  path: string;
}

export function useAppRoutes() {
  const navRoutes: NavRoute[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ];

  return { navRoutes };
}
