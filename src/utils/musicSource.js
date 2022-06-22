import { v4 as uuidv4 } from 'uuid';

const musicSource = () => {
    return [
        {
            name: "Rooftop Breeze",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/42878bcb02c1a3613f4913b226674cd36bac9830-1024x1024.jpg",
            artist: "Smile High, Richard Vagner",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36650",
            color: ['#284375', '#E0D4B8'],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Valse",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
            artist: "Plusma, Guillaume Muschaller",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28897",
            color: ['#474149', '#D39068'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Timelapse",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/7a886841c0f684c40ae9a6d1abd0c30f72269977-1024x1024.jpg",
            artist: "Kissamilé",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32885",
            color: ['#C12F4B', '#BD304C'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Montauk Paddling",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/50d1e8b673f1afde1fefeb1c8cc895139def15c5-1024x1024.jpg",
            artist: "auv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=34372",
            color: ['#28345E', '#23305C'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Polaroid",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
            artist: "Makzo, Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
            color: ['#F6C943', '#B6D1DA'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Inside a Saltwater Room",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
            artist: "Delayde",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23193",
            color: ['#81D1A4', '#627AE0'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Flip Flop Vibe",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-1024x1024.jpg",
            artist: "The BREED",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23193",
            color: ['#892E42', '#FADCA8'],
            id: uuidv4(),
            active: false,
        },

    ]
}

export default musicSource;