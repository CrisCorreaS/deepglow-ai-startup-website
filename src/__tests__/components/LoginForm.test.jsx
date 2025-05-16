import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../../components/LoginForm';

describe('LoginForm', () => {
  it('validates email field', async () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    const emailInput = screen.getByLabelText(/email/i);
    
    userEvent.type(emailInput, 'invalid-email');
    fireEvent.blur(emailInput);
    
    expect(await screen.findByText(/email error/i)).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    
    userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    userEvent.type(screen.getByLabelText(/password/i), 'password123');
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });
});