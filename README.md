# Careerflow — Job Portal

A React 18, TypeScript and Vite job portal demonstration with locally persistent, role-based workflows.

## Run

```bash
npm install
npm run dev
```

## Local MongoDB API

1. Ensure MongoDB is running locally.
2. Copy `.env.example` to `.env` and replace `JWT_SECRET` with a long random value.
3. In a second terminal, run `npm run server`.

The frontend connects to `http://localhost:4000/api` by default. Login and registration create real MongoDB accounts; passwords and OTPs are hashed. In the default local configuration OTPs are printed to the API terminal. Set the optional SMTP variables in `.env` to email them.

## Project structure

```text
src/
  components/      reusable layout, search, filter, job-card and primitives
  data/            typed mock companies, jobs, candidates and applications
  pages/           home, discovery, detail, candidate, recruiter and admin views
  services/        replaceable mock API adapter
  store/           Zustand role/session, filters and persisted application state
  types.ts         domain contracts
  App.tsx          protected application routes
```

Use the account select control in the navbar to switch immediately between candidate, recruiter, and admin demo sessions. State is stored under `cf-*` keys in local storage.
