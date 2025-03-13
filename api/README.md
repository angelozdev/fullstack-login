# API Backend

## Description

This is the backend for the SMART Pump web application. It provides authentication, user account management, and balance retrieval functionalities. The backend is built using Express, LowDB for lightweight database storage, and JSON Web Tokens (JWT) for authentication.

Live Project: [SMART Pump Backend](https://fullstack-login-backend.onrender.com/)

## Features

- **Express**: Fast and minimalist web framework for Node.js.
- **LowDB**: Lightweight JSON-based database for storing user data.
- **JSON Web Token (JWT)**: Authentication and authorization system for user sessions.
- **Zod**: Schema validation library for data validation and type safety.
- **Hapi Boom**: Error handling utility for standardized error responses.
- **Morgan**: HTTP request logger middleware for debugging and monitoring.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.

## Installation

```sh
pnpm install
```

## Development

To start the development server:

```sh
pnpm run start:dev
```

## Build

To compile TypeScript into JavaScript:

```sh
pnpm run build
```

## Start

To start the production server:

```sh
pnpm run start
```

## Scripts

- `build`: Cleans and compiles TypeScript.
- `start`: Runs the production server.
- `start:dev`: Runs the development server with automatic reload.
- `test`: Placeholder for test execution.
