import { render, screen } from '@testing-library/react';
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { RecetaForm } from "../pages/FormReceta";

test('renders learn react link', () => {
  render(<RecetaForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});