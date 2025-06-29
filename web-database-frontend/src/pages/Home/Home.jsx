import SourceCard from "../../components/SourceCard"
import { Box } from "@mui/material"

const SourceCards = [
    {
        src: 'icons8-c++.svg',
        title: 'C++',
        info: 'Info for the C++'
    },
    {
        src: 'icons8-c-sharp-logo.svg',
        title: 'C#',
        info: 'Info for the C#'
    },
    {
        src: 'icons8-css.svg',
        title: 'CSS',
        info: 'Info for the CSS'
    },
    {
        src: 'icons8-html.svg',
        title: 'HTML',
        info: 'Info for the HTML'
    },
    {
        src: 'icons8-java.svg',
        title: 'Java',
        info: 'Info for the Java'
    },
    {
        src: 'icons8-javascript.svg',
        title: 'JavaScript',
        info: 'Info for the JavaScript'
    },
    {
        src: 'icons8-kotlin.svg',
        title: 'Kotlin',
        info: 'Info for the Kotlin'
    },
    {
        src: 'icons8-node-js.svg',
        title: 'Node.js',
        info: 'Info for the C#'
    },
    {
        src: 'icons8-php-logo.svg',
        title: 'PHP',
        info: 'Info for the PHP'
    },
    {
        src: 'icons8-python.svg',
        title: 'Python',
        info: 'Info for the Python'
    },
    {
        src: 'icons8-rust-programming-language.svg',
        title: 'Rust',
        info: 'Info for the Rust'
    },
    {
        src: 'vite.svg',
        title: 'Vite',
        info: 'Info for the Vite'
    },
]

export default function Home() {
    return (
        <Box
            sx={{ 
                p: '1rem',
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', // 🔥 Ровно 3 в ряд
                width: '100%',
                height: '100%'
            }}
        >
            {SourceCards.map((card) => (
                <SourceCard 
                    key={card.title} 
                    src={card.src} 
                    title={card.title} 
                    info={card.info} 
                />
            ))}
        </Box>
    );
}