import { mockSupabase } from "../utils/mockSupabase";
import { login } from "../../services/authService";

jest.mock("@supabase/supabase-js");

describe("Auth Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("login success", async () => {
    const { auth } = mockSupabase();
    auth.signInWithPassword.mockResolvedValueOnce({
      data: { user: { id: "123" } },
      error: null,
    });

    const result = await login("test@example.com", "password");
    expect(result.user.id).toBe("123");
    expect(auth.signInWithPassword).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password",
    });
  });
});
