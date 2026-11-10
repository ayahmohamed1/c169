// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', label: 'Captured\nMemories' },
      { id: 'flowers',  icon: '🌷', label: 'Virtual\nFlowers'   },
      { id: 'song',   icon: '🎵', label: 'our\nsong'       },
      { id: 'letter',   icon: '💌', label: 'Love\nLetter'       },
      
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️',    tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️',  tag: 'cute'   },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️',       tag: 'love'   },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always'  },
      { src: '/images/memory6.jpg', label: '❤️',    tag: 'mine'   },
      { src: '/images/memory7.jpg', label: '❤️',    tag: 'mine'   },
      { src: '/images/memory8.jpg', label: '❤️',    tag: 'mine'   },
    ],
  },

  

  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      '"You make my world brighter.❣️"',
      '"My heart belongs to you."❣️',
      '"You are my safe place."❣️',
      '" my favorite thing."❣️',
      '"i love you so much."❣️',
      '"You are my happily ever."❣️',
      '"You are my whole world."❣️',
      '"With you, I am home."❣️',
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `  hello my dear
"In a world that is constantly rushing and changing, you have become my only constant, 
the quiet sanctuary where my soul finally finds its peace after a long and tiring day.
 Every single moment spent with you feels like a beautiful dream that I never want to wake up from,
  because you have touched my life in ways I never thought possible. 
  Your laughter is the sweetest melody that plays in the background of my thoughts, 
  and your presence is the warmth that keeps me safe through the coldest nights.
   I want you to know that my love for you isn't just a passing feeling, but a deep,
    everlasting promise to stand by your side through every storm and every sunshine that life brings our way.
     No matter how far we wander or what challenges the future holds, 
     my heart will always beat to the rhythm of your name, 
     because loving you is the most beautiful thing that has ever happened to me."`,
    signoff: 'with all my love,',
    signature: 'yours always ♡',
  },


}

export default content
