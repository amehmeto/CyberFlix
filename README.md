# CyberFlix Movie Search

* This project is a movie database application built with React Native and Electron.js, using TypeScript. 

* It uses Redux for state management, with Redux Toolkit for creating actions, reducers, and selectors. 

* The application fetches movie data from an API, maps the raw API response to domain entities, and stores these entities in the Redux store.

## Architecture

The project follows the Hexagonal Architecture pattern, with the following components:

- `react-view`: The user interface, built with React and React Native.
- `core`: The heart of the application, containing the main business logic and domain entities.
- `infra`: Handles infrastructure concerns like fetching data from APIs and database access.


## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of `node.js` and `yarn`.
* You have a `Mac` machine. Even though that should work fine on Windows and Linux thanks to Electron.js, it has not been tested on those platforms.

## Installing CyberFlix Movie Search

To install CyberFlix Movie Search, follow these steps:

1. Clone the repository:
2. Run `yarn` in the root directory to install the dependencies.
3. Run `yarn electron:dev` to start the Desktop application.
4. Alternatively, run `yarn web` to start the web application.
