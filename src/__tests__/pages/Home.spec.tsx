import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Home } from '../../pages/Home';

describe('Home', () => {
  it('should be able to render new added tasks', () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const inputElement = getByPlaceholderText('Adicionar novo todo...');

    fireEvent.changeText(inputElement, 'Primeira tarefa');
    fireEvent(inputElement, 'submitEditing');
    
    fireEvent.changeText(inputElement, 'Segunda tarefa');
    fireEvent(inputElement, 'submitEditing');

    getByText('Primeira tarefa');
    getByText('Segunda tarefa');
  });

  it('should not be able to add an empty task', () => {
    const { getByPlaceholderText, queryByText } = render(<Home />);
    const inputElement = getByPlaceholderText('Adicionar novo todo...');

    fireEvent.changeText(inputElement, '');
    fireEvent(inputElement, 'submitEditing');

    expect(queryByText('')).toBeNull();
  });

  it('should be able to render tasks as done and undone', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Home />);
    const inputElement = getByPlaceholderText('Adicionar novo todo...');

    fireEvent.changeText(inputElement, 'Primeira tarefa');
    fireEvent(inputElement, 'submitEditing');

    const buttonElement = getByTestId('button-0');
    const markerElement = getByTestId('marker-0');
    
    const taskElement = getByText('Primeira tarefa');

    expect(buttonElement).toHaveStyle({
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    });
    expect(markerElement).toHaveStyle({
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#3D3D4D',
      marginRight: 10
    });
    expect(taskElement).toHaveStyle({
      color: '#3D3D4D',
    });

    fireEvent.press(taskElement);

    expect(buttonElement).toHaveStyle({
      backgroundColor: 'rgba(25, 61, 223, 0.1)'
    });
    expect(markerElement).toHaveStyle({
      backgroundColor: '#273FAD'
    });
    expect(taskElement).toHaveStyle({
      color: '#A09CB1',
      textDecorationLine: 'line-through'
    });
  });

  it('should be able to remove tasks by "longPress" event', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Home />);
    const inputElement = getByPlaceholderText('Adicionar novo todo...');

    fireEvent.changeText(inputElement, 'Primeira tarefa');
    fireEvent(inputElement, 'submitEditing');
    
    fireEvent.changeText(inputElement, 'Segunda tarefa');
    fireEvent(inputElement, 'submitEditing');

    const firstTask = getByText('Primeira tarefa');

    fireEvent(firstTask, 'longPress');

    expect(queryByText('Primeira tarefa')).toBeNull();
    getByText('Segunda tarefa');
  });
})