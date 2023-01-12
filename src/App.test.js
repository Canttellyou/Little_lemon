import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

test('Test form validation with bad values', () => {
    render(
        <MemoryRouter initialEntries={['/reserve']}>
            <App />
        </MemoryRouter>
    )

    const submit = screen.getByTestId('submit')

    fireEvent.click(submit)

    const msg = screen.getByTestId('msg')

    expect(msg).toHaveTextContent('Error, table was not reserved')
})

test('Test form validation with right values', () => {
    render(
        <MemoryRouter initialEntries={['/reserve']}>
            <App />
        </MemoryRouter>
    )

    const guests = screen.getByTestId('guests')
    const occasion = screen.getByTestId('occasion')
    const date = screen.getByTestId('date')
    const time = screen.getByTestId('time')

    fireEvent.input(guests, { target: { value: 4 } })
    fireEvent.change(occasion, { target: { value: 'Birthday' } })
    fireEvent.input(date, { target: { value: '2023-01-22' } })
    fireEvent.input(time, { target: { value: '14:00' } })

    const submit = screen.getByTestId('submit')

    fireEvent.click(submit)

    const msg = screen.getByTestId('msg')

    expect(msg).toHaveTextContent('Table reserved successfully')
})
