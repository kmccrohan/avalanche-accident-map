# avalanche-accident-map
A web app containing an interactive map displaying avalanche accidents in the US.

Data is obtained from the [Colorado Avalanche Information Center](http://avalanche.state.co.us/accidents/statistics-and-reporting/).

# Getting Started
After cloning or forking the project, you need to install dependencies. Use either [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/).
Then, navigate to into this directory and run one of the following commands:
```
npm install
yarn
```

Now, you should be able to launch the app.
```
npm run start
yarn start
```

# Adding new data
To change what data this project displays, replace `accidents.csv` with your new data.
The column headers must remain the same. Then run:
```
python convert-to-json.py
```
Both python2 and 3 should work. This will update the `src/accidents.json`, which
gets used by the actual web app.

Only accidents with latitude and longitude coordinates will be accepted by the conversion script.
In the future, we could probably use the place and state and query the Google API to get
approximate coordinates, but we're not doing that currently.

# Technologies
The key technologies used in this app are:
- [react](https://reactjs.org/): A JS component library that helps you build modular web apps.
- [Google Map React](https://github.com/istarkov/google-map-react): This library wraps the Google Maps API for react.
- [react-popup](https://github.com/minutemailer/react-popup): A simple react popup library.
