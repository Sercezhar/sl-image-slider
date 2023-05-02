import ImageSlider from './components/ImageSlider';

const photos = [
  {
    id: 1,
    src: '/photos/1.jpg',
    description: 'Field with yellow flowers',
  },
  {
    id: 2,
    src: '/photos/2.jpg',
    description: 'Sunny forest, trees',
  },
  {
    id: 3,
    src: '/photos/3.jpg',
    description: 'Beach with palm trees, sea',
  },
  {
    id: 4,
    src: '/photos/4.jpg',
    description: 'Boat in the sea, purple sky',
  },
  {
    id: 5,
    src: '/photos/5.jpg',
    description: 'Silhouette of flowers at sunset',
  },
  {
    id: 6,
    src: '/photos/6.jpg',
    description: 'Yellow grass field',
  },
  {
    id: 7,
    src: '/photos/7.jpg',
    description: 'Waterfall surrounded by trees',
  },
];

function App() {
  return (
    <div>
      <ImageSlider photos={photos} />
    </div>
  );
}

export default App;
