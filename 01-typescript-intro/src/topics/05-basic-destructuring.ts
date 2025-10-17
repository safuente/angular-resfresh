interface AudioPlayer {
    volume: number;
    second: number;
    song: string;
    details: Details;
}  

interface Details {
    author: string;
    year: number;   
}

const audioPlayer: AudioPlayer = {
    volume: 90,
    second: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { volume, second, song, details } = audioPlayer;

const { author } = details;

/*
console.log('Volume: ', volume);
console.log('Second: ', second);
console.log('Song: ', song);
console.log('Author: ', author);
*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz;

console.log('Personaje 3: ', p3);

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', trunks);




export {}