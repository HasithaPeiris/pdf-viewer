# PDF Viewer Application

![pdf-viewer-1](https://github.com/HasithaPeiris/pdf-viewer/assets/138846351/fff78b4a-8eca-40da-9c01-432d95f5285b)

![pdf-viewer-2](https://github.com/HasithaPeiris/pdf-viewer/assets/138846351/1689aa73-91f1-45f6-9d95-06f45b598b53)

![pdf-viewer-3](https://github.com/HasithaPeiris/pdf-viewer/assets/138846351/76335f58-0db5-443a-a93d-ec542309defd)

This application allows users to upload PDF files to local storage and view them.

## Features

- Login and Register
- Upload PDF files
- View PDF files

## Technologies Used

- Frontend: React.js
- Backend: Express.js
- Authentication: JWT

## Application Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/HasithaPeiris/pdf-viewer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pdf-viewer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Build Process

To build the application, run the following command:
```bash
npm run build
```

## Usage

1. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The application will be served at `http://localhost:5173`.

2. Start the backend development server:
   ```bash
   npm run server
   ```
   The application will be served at `http://localhost:5000`.
   
   You need to add a `.env` file to the root directory of the backend with these properties.
   ```bash
   NODE_ENV = development
   PORT = 5000
   MONGO_URI = 
   JWT_SECRET = 
   ```

4. Navigate to `http://localhost:5173` in your web browser.

5. You will be presented with options to login and register.

6. After login to the application, you can upload PDF files and view them.

## Contributors

- [Hasitha Peiris](https://github.com/hasithapeiris)
