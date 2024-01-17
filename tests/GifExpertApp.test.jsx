import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";


describe('Prueba en <GifExpertApp', () => { 


    test('debe de mostrarse correctamente', () => {

        render(<GifExpertApp/>);
        //screen.debug();
        expect(screen.getByText('GifExpertApp'));
        expect(screen.getByRole('textbox'));
        expect(screen.getByRole('form'));

    }
    )
});