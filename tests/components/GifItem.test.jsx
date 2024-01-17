import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components";


describe('Pruebas en GifItem', () => {

    const title = 'Saitama';
    const url = 'https://localhost/algo.jpg';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
        
    });

    test('debe de mostrar la imagen con el url y el alt indicado', () => {

        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    })
});