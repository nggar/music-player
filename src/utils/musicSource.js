import { v4 as uuidv4 } from 'uuid';

const musicSource = () => {
    return [

        {
            name: "Rooftop Breeze",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/42878bcb02c1a3613f4913b226674cd36bac9830-1024x1024.jpg",
            artist: "Smile High, Richard Vagner",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36650",
            color: ['#C89601', '#274477'],
            id: uuidv4(),
            active: true,
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
            name: "Pale Fire",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
            artist: "Taro",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=35671",
            color: ['#7439E1', '#E5C5FC'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Valse",
            cover: "https://i.scdn.co/image/ab67616d0000b273b09ada4b5c5651dd37acb44d",
            artist: "Plusma, Guillaume Muschaller",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28897",
            color: ['#474149', '#D39068'],
            id: uuidv4(),
            active: false,
        },

        {
            name: "Benson & Hedges",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
            artist: "Masked Man",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32857",
            color: ['#1CB4E6', '#C7E7F6'],
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
            name: "Timelapse",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/7a886841c0f684c40ae9a6d1abd0c30f72269977-1024x1024.jpg",
            artist: "Kissamilé",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32885",
            color: ['#C12F4B', '#E2BC02'],
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