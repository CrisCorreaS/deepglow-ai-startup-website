export const mockSupabase = () => {
  const mockAuth = {
    onAuthStateChange: jest.fn(),
    signInWithPassword: jest
      .fn()
      .mockResolvedValue({ data: { user: { id: "123" } }, error: null }),
    signOut: jest.fn().mockResolvedValue({ error: null }),
  };

  return {
    auth: mockAuth,
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnValue({ data: [], error: null }),
    insert: jest.fn().mockReturnValue({ data: [], error: null }),
  };
};
