import { render } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { screen } from '@testing-library/dom';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        
    })

    test('debe de mostrar items cuando se cargan las imagenes useFechGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            },
            {
                id: '123',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa2.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText(category));
        expect(screen.getAllByRole('img')).toHaveLength(gifs.length);

    });
})
