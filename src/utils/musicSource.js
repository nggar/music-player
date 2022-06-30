import { v4 as uuidv4 } from 'uuid';

// Import audio files
import audio0 from '../audio/audio-0.mp3';
import audio1 from '../audio/audio-1.mp3';
import audio2 from '../audio/audio-2.mp3';
import audio3 from '../audio/audio-3.mp3';
import audio4 from '../audio/audio-4.mp3';
import audio5 from '../audio/audio-5.mp3';
import audio6 from '../audio/audio-6.mp3';
import audio7 from '../audio/audio-7.mp3';

const musicSource = () => {
    return [
                {
            name: "Valse",
            cover: "https://i.scdn.co/image/ab67616d0000b273b09ada4b5c5651dd37acb44d",
            artist: "Plusma, Guillaume Muschaller",
            audio: audio2,
            color: ['#474149', '#D39068'],
            id: uuidv4(),
            active: true,
        },

        {
            name: "Inside a Saltwater Room",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
            artist: "Delayde",
            audio: audio1,
            color: ['#81D1A4', '#627AE0'],
            id: uuidv4(),
            active: false,
        },

                {
            name: "Flip Flop Vibe",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-1024x1024.jpg",
            artist: "The BREED",
            audio: audio7,
            color: ['#892E42', '#FADCA8'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Pale Fire",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
            artist: "Taro",
            audio: audio3,
            color: ['#7439E1', '#E5C5FC'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Polaroid",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
            artist: "Makzo, Mama Aiuto",
            audio: audio5,
            color: ['#F8C840', '#8A2C3D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Frisky Feeling",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            artist: "Ben Bada Boom",
            audio: audio6,
            color: ['#7E7D81', '#1F232D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Rooftop Breeze",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/42878bcb02c1a3613f4913b226674cd36bac9830-1024x1024.jpg",
            artist: "Smile High, Richard Vagner",
            audio: audio4,
            color: ['#C89601', '#274477'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Benson & Hedges",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
            artist: "Masked Man",
            audio: audio0,
            color: ['#1CB4E6', '#C7E7F6'],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default musicSource;
