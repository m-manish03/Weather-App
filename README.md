# Weather App

![Weather App](src/assets/rain.gif)

This project is a weather application built using React and Vite. It leverages modern tools to provide a fast, interactive user experience with hot module replacement (HMR) and follows best practices for code quality with ESLint.

## Features

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides HMR and optimizes the development experience.
- **ESLint**: For maintaining code quality and enforcing coding standards.
- **OpenWeather API**: Fetches real-time weather data for different locations around the world.
- **Responsive Design**: The app is designed to be responsive and user-friendly on various devices.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   - Create a `.env` file in the root directory of the project.
   - Add your API key for the weather service:
     ```env
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

### Running the Application

To start the development server and view the application locally, run:
```bash
npm run dev
```
- Open your browser and go to `http://localhost:3000` to see the app in action.

### Building for Production

To build the project for production, use:
```bash
npm run build
```
- The build output will be located in the `dist` folder.

### Deploying

For deployment, you can upload the contents of the `dist` folder to your hosting platform (e.g., Netlify, Vercel). Follow the hosting platform's instructions for deploying static sites.

### Code Structure

- **`src`**: Contains the source code for the application.
  - **`assets`**: Static assets such as images.
  - **`components`**: React components used in the application.
  - **`styles`**: CSS files for styling the components.
  - **`App.jsx`**: Main application component.
  - **`main.jsx`**: Entry point for React.
- **`public`**: Contains public assets like the favicon.
- **`dist`**: Build output directory (generated after running `npm run build`).

### Configuration

- **`vite.config.js`**: Vite configuration file for setting up the build and development environment.
- **`.eslintrc.cjs`**: ESLint configuration file for code linting rules.

### Available Scripts

- **`npm run dev`**: Start the development server with hot module replacement.
- **`npm run build`**: Build the application for production.
- **`npm run preview`**: Preview the production build locally.

### Plugins Used

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Vite plugin for React that uses Babel for fast refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Alternative Vite plugin for React that uses SWC for fast refresh.

### Contributing

1. **Fork the repository** and **create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make your changes** and **commit** them:
   ```bash
   git add .
   git commit -m "Add your message here"
   ```

3. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature
   ```

4. **Create a pull request** to the main repository.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Thanks to the developers of [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for creating such powerful tools.
- Thanks to [Flaticon](https://www.flaticon.com/) for the weather icons used in the app.
- Thanks to [OpenWeather](https://openweathermap.org) for providing the weather data API that powers this application.
