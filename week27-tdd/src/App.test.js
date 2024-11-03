import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// App.test.js
describe(`<App />`, () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );
  });
});

describe(`<App />`, () => {
  it("renders component correctly", () => {
    render(<App />);
    expect(screen.getByTestId("p-tag")).toMatchSnapshot();
    expect(screen.getAllByTestId("p-tag")).toHaveLength(1);
    expect(screen.getAllByTestId("p-tag")[0]).toHaveTextContent(
      "Edit src/App.js and save to reload"
    );
  });
});