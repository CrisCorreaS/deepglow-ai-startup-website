import "@testing-library/jest-dom";

jest.mock("@supabase/supabase-js", () => {
  const mockAuth = {
    onAuthStateChange: jest.fn(),
    signInWithPassword: jest.fn(),
    signOut: jest.fn(),
  };

  return {
    createClient: jest.fn(() => ({
      auth: mockAuth,
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
    })),
  };
});
