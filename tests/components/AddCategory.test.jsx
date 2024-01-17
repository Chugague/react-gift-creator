import { fireEvent, render } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";
import { screen } from '@testing-library/dom';


describe('Pruebas en <AddCategory/>', () => { 

    const value = 'Saitama';
    
    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() =>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value}});
        expect(input.value).toBe(value);
        }
    )

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: value}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(value);
    })
    
    test('no debe de llamar onNewCategory si el input esta vacio', () => { 
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    })

})