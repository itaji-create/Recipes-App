import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('renderiza todas a paginas', () => {
  it('pagina inicial', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByText(/foods/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('pagina bebidas', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByTestId('drink-bottom-btn');
    fireEvent.click(linkElement);
    const title = screen.getByText(/drinks/i);
    expect(title).toBeInTheDocument();
  });

  it('pagina explorer', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByTestId('explore-bottom-btn');
    fireEvent.click(linkElement);

    const title = screen.getByText(/explore/i);

    expect(title).toBeInTheDocument();
  });

  it('pagina profile', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByTestId('profile-top-btn');
    fireEvent.click(linkElement);

    const title = screen.getByText(/profile/i);

    expect(title).toBeInTheDocument();
  });

  it('pagina explore/foods/nationalities', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByTestId('explore-bottom-btn'));
    fireEvent.click(screen.getByTestId('explore-food-btn'));
    const nationality = screen.getByTestId('food-nationality-btn');

    expect(nationality).toBeInTheDocument();

    fireEvent.click(nationality);
    const title = screen.getByText(/Explore Nationalite/i);
    expect(title).toBeInTheDocument();
  });

  it('pagina explore/foods/ingredients', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByTestId('explore-bottom-btn'));
    fireEvent.click(screen.getByTestId('explore-food-btn'));
    const ingredient = screen.getByTestId('food-ingredient-btn');

    expect(ingredient).toBeInTheDocument();

    fireEvent.click(ingredient);
    const title = screen.getByText(/Explore Ingredients/i);
    expect(title).toBeInTheDocument();
  });

  it('pagina explore/drinks/ingredients', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByTestId('explore-bottom-btn'));
    fireEvent.click(screen.getByTestId('explore-drink-btn'));
    const ingredient = screen.getByTestId('drink-ingredient-btn');

    expect(ingredient).toBeInTheDocument();

    fireEvent.click(ingredient);
    const title = screen.getByText(/Explore Ingredients/i);
    expect(title).toBeInTheDocument();
  });
});
