# React Native App Gallery
An intuitive image gallery built with React Native. Supports both iOS and Android. This project is a technical test for a job application at [Scoreplay](https://www.scoreplay.io/). You can find the requirements [here](/consignes.md). Created by [Pierre-Etienne Soury](https://github.com/JeFaisLeCafe).

## Installation
```bash
git clone
cd gallery-app
npm install
```

You will also need a nasa api key. You can get one [here](https://api.nasa.gov/). You then need to create a `.env` file at the root of the project and add the following line:

```bash
EXPO_PUBLIC_NASA_API_KEY=your_api_key
```

## Usage
```bash
npx expo start
```

## Code Overview
### Dependencies
- I used [Expo](https://expo.io/) to bootstrap the project. Since it is a technical test, I thought it would be better to use Expo to save time.
- I used [Typescript](https://www.typescriptlang.org/) to add types to the project.
- The app is built with [React Native](https://reactnative.dev/) as per requirements.
- I used [Axios](https://axios-http.com/fr/) to handle the api calls.
- I leveraged the Expo ecosystem with the slider, the loader and the image viewer.

### Project Structure
- `App.js` is the entry point of the app
- `components` contains the components used in the app. I used functional components with hooks.
- `hooks` contains the hooks used in the app. I used hooks to manage the state of the app.
- `api` contains the api calls. I used axios to make the calls.

## Screenshots
| Home | View with details | View |
| --- | --- | --- |
![Home](/assets/screenshots/home.png) | ![View with details](/assets/screenshots/view-details.png) | ![View](/assets/screenshots/view.png)

## License
[MIT](/LICENSE)
