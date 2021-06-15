import React from 'react';
import { render, cleanup, screen} from '@testing-library/react';
import SneakersList from '../components/sneakersList'
import SneakerDetail from '../components/sneakerDetail'

// afterEach(cleanup);

// test('check counter', ()=> {
//    render(<SneakersList />)
//    render(<SneakerDetail />)
//    const button = screen.getByText("ADD TO CART");
//    expect(button.toBeTruthy())

// });