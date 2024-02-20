import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, test } from 'vitest';
import { render, screen, waitFor  } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import VehicleList from './components/VehicleList';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({
  children } : { children: React.ReactNode }) => (
    <QueryClientProvider client = {
      queryClient}>{children}
    </QueryClientProvider>);
describe("VehicleList tests", () => {
  test("component renders", () => {
    render(<VehicleList />, { wrapper });
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  })

  test("Vehicles are fetched", async () => {
    render(<VehicleList />, { wrapper });
    await waitFor(() => screen.getByText(/New Vehicle/i));
    expect(screen.getByText(/Ford/i)).toBeInTheDocument();
  })

  test("Open new Vehicle modal", async () => {
    render(<VehicleList />, { wrapper });
    await waitFor(() => screen.getByText(/New Vehicle/i));
  })
  
  test("Open new vehicle modal", async () => {
    render(<VehicleList />, { wrapper });
    await waitFor(() => screen.getByText(/New Vehicle/i));
    await userEvent.click(screen.getByText(/New Vehicle/i));
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  })

  
});
