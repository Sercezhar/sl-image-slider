# Image Slider

Image Slider is a lightweight and performant React application written in TypeScript. It allows you to display a slideshow of images in an elegant and user-friendly manner. The slider optimizes performance by initially loading only two photos (the first one and the next one) and dynamically uploading the subsequent images while sliding.

## Features

 - Efficient performance by lazy-loading images
 - Display of indicators as dots for easy navigation
    - Maximum of five visible indicators at a time
    - Indicators have three states: normal, active, and small

## Installation

To use the Image Slider in your React project, follow these steps:

1. Install the required dependencies using npm or yarn:
```
npm install classnames react-icons
```
or
```
yarn add classnames react-icons
```
2. Copy the ImageSlider component file to your project's directory.

## Usage

To use the Image Slider component in your application, follow these steps:

1. Import the ImageSlider component into your desired file:
```js
import ImageSlider from './path/to/ImageSlider';
```
2. Use the ImageSlider component in your TSX code:
```js
<ImageSlider photos={imageData} />
```
`photos`: An array of image data objects, where each object should have a `src` property representing the image _URL_ and a `description` property representing the _alt_ attribute.
```js
const imageData = [
  {
    id: 1,
    src: 'https://example.com/image1.jpg',
    description: 'Some description',
  },
  {
    id: 1,
    src: 'https://example.com/image2.jpg',
    description: 'Some description',
  },
  {
    id: 1,
    src: 'https://example.com/image3.jpg',
    description: 'Some description',
  },
  // Add more image data objects as needed
];
```

## Customization

If you wish to customize the styling or behavior of the Image Slider component, you can modify the component's CSS and functionality accordingly. Feel free to experiment and adapt the code to suit your specific needs.
