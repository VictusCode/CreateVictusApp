const queryConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },
  },
};

export { queryConfig };
