# Events Travel Frontend Assignment - Completed

## Introduction

This is my completed assignment for the frontend developer position at Events Travel. The assignment was to finish a mini-application that could add and show tickets using an API. The repository contained two projects: Frontend & API, and I only worked on the frontend, but utilized the API for fetching data.

## Technologies Used

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Mantine UI](https://mantine.dev/)
- [React-hook-form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start)
- [Prettier](https://prettier.io/)

Note that I also used a local proxy in the React project to avoid CORS issues with the backend API.

## Project Setup

To run this project, follow the steps below:

1. Clone the project repository
2. Navigate to the root directory of the project in your terminal
3. Run `yarn install` to install the project dependencies
4. Run `yarn start` to start the frontend server
5. The application will open in your default browser on `http://localhost:3000`

## Implemented Features

I have implemented the following features in the project:

- Home page where users can add new tickets
- List page where all tickets are displayed
- Routing between the Home and List pages
- Fetching and posting data using the provided API
- Form validation using Yup and React-hook-form
- Use of TypeScript, functional components, React Hooks, and Redux Toolkit for state management
- Consistent use of margins and paddings
- Added test cases for the components and reducers

## Assumptions Made

While working on the project, I made the following assumptions:

- The ticket ID is automatically generated on the backend and is not required on the frontend. Hence, I did not include it in the POST request to create a ticket.
- If the ticket ID was sent in the success response from the backend, it could have been added to the ticket list in Redux with the ID.
- I named constants and variables in such a way that they did not require comments, minimizing the use of comments in the code.

## Conclusion

This project was a great opportunity for me to showcase my skills and to learn new technologies such as Mantine UI and Redux Toolkit. I am confident that my completed project meets the requirements outlined in the assignment, and I am excited about the possibility of discussing my thought process in further detail during an interview.
