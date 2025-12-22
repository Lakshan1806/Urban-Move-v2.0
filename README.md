# Urban Move v2.0

Multi-app urban mobility platform with admin, customer, and driver clients plus backend services.

## Overview

- Fullstack monorepo that hosts web apps, mobile apps, and backend services for Urban Move.
- Built for operations/admin teams, end customers, and drivers across web and mobile.
- Key components: `services/administration-service` (Express + MongoDB), `services/auth-service` (Spring Boot), `app-admin-web`, `app-customer-web`, `app-driver-web`, `app-customer-mobile` (Expo), and `app-driver-mobile` (Flutter).
- Entry points: `services/administration-service/src/server.js`, `services/auth-service/src/main/java/com/urbanmove/authservice/AuthServiceApplication.java`, `app-*/src/main.jsx`, `app-driver-mobile/lib/main.dart`, and `app-customer-mobile` via `expo-router/entry`.

## Features

- Admin login/logout with JWT cookie authentication.
- Admin management of admin, customer, and driver accounts (terminate/revoke).
- Car model and unit management with image uploads.
- Promotions management with image uploads and cleanup utilities.
- Branch location management and route details via Google Maps.
- Reporting endpoints for monthly stats and yearly income.
- Email and SMS notification utilities (SMTP and SMS API).
- Separate web dashboards and mobile clients for different user roles.

## Tech Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS, PrimeReact, Redux Toolkit, TanStack Query.
- Backend: Node.js, Express, Mongoose, JWT, Multer; Spring Boot (auth-service).
- Database: MongoDB (administration-service), MySQL (auth-service, via JPA).
- Other Tools: Docker, Expo (React Native), Flutter, Nodemailer, Node Cron.

## Architecture

- Web/mobile clients call the Express administration service over HTTP, which serves static uploads and stores data in MongoDB.
- The admin and customer web apps are configured to call `http://localhost:5000` and send cookies for auth.
- A separate Spring Boot auth-service exists (OAuth2 authorization server dependencies) but has no endpoints wired in this repo yet (TBD).

```
[Admin Web]          [Customer Web]          [Driver Web]
      \                   |                    /
       \                  |                   /
        ---> [Administration Service (Express)] ---> [MongoDB]
             |-- /uploads (static files)
             |-- JWT cookie auth

[Customer Mobile (Expo)] ----------------------/
[Driver Mobile (Flutter)] ---------------------/

[Auth Service (Spring Boot)] ---> [MySQL]   (TBD wiring)
```

## Getting Started

### Prerequisites

- Node.js 22 (matches Dockerfiles)
- npm
- Java 21 (auth-service uses Spring Boot 4.0.0)
- Maven (or use `services/auth-service/mvnw` or `mvnw.cmd`)
- Flutter SDK 3.8.1+
- Expo CLI (use `npx expo`)
- MongoDB (for administration-service)
- MySQL (for auth-service, config TBD)

### Installation

Clone the repo:

```sh
git clone <repo-url>
cd Urban-Move-v2.0
```

Administration service (Node/Express):

```sh
cd services/administration-service
cp .env.example .env
# edit .env with your values
npm install
npm run dev
```

Auth service (Spring Boot):

```sh
cd services/auth-service
./mvnw spring-boot:run
```

TBD: configure datasource in `services/auth-service/src/main/resources/application.properties`.

Admin web:

```sh
cd app-admin-web
npm install
npm run dev
```

Customer web:

```sh
cd app-customer-web
npm install
npm run dev
```

Driver web:

```sh
cd app-driver-web
npm install
npm run dev
```

Customer mobile (Expo):

```sh
cd app-customer-mobile
npm install
npm run start
```

Driver mobile (Flutter):

```sh
cd app-driver-mobile
flutter pub get
flutter run
```

### Environment Variables

#### services/administration-service

| Variable             | Description                                                          | Example value                        |
| -------------------- | -------------------------------------------------------------------- | ------------------------------------ |
| MONGO_URI            | MongoDB connection string for Mongoose                               | mongodb://localhost:27017/urban-move |
| DEFAULT_ADMIN_EMAIL  | Default admin email used by admin initial setup utility (if enabled) | admin@example.com                    |
| SMTP_USERNAME        | SMTP username for welcome emails (utils/mailer.js)                   | smtp-user@example.com                |
| SMTP_PASSWORD        | SMTP password for welcome emails                                     | change_me                            |
| SMTP_USER            | SMTP username for account/password emails (utils/nodemailer.js)      | smtp-user@example.com                |
| SMTP_PASS            | SMTP password for account/password emails                            | change_me                            |
| ACCESS_TOKEN_SECRET  | JWT secret for admin auth cookie                                     | change_me                            |
| REFRESH_TOKEN_SECRET | Present in .env.example but not referenced in code yet               | change_me                            |
| JWT_SECRET           | JWT secret for generateJWTToken utility                              | change_me                            |
| GOOGLE_MAPS_API_KEY  | Google Maps Directions API key                                       | change_me                            |
| TEXT_API_TOKEN       | SMS provider API token                                               | change_me                            |
| TEXT_LK_SENDER_ID    | SMS sender id                                                        | UrbanMove                            |
| TEXT_API_ENDPOINT    | SMS provider API endpoint                                            | https://example.com/sms              |
| PORT                 | Express server port (defaults to 5000)                               | 5000                                 |
| NODE_ENV             | Runtime environment                                                  | development                          |

.env.example (administration-service):

```dotenv
MONGO_URI=mongodb://localhost:27017/urban-move
DEFAULT_ADMIN_EMAIL=admin@example.com
SMTP_USERNAME=smtp-user@example.com
SMTP_PASSWORD=change_me
SMTP_USER=smtp-user@example.com
SMTP_PASS=change_me
ACCESS_TOKEN_SECRET=change_me
REFRESH_TOKEN_SECRET=change_me
JWT_SECRET=change_me
GOOGLE_MAPS_API_KEY=change_me
TEXT_API_TOKEN=change_me
TEXT_LK_SENDER_ID=UrbanMove
TEXT_API_ENDPOINT=https://example.com/sms
PORT=5000
NODE_ENV=development
```

Note: `services/administration-service/src/utils/nodemailer.js` currently loads env from a hard-coded path and may need adjustment for your environment.

#### services/auth-service

No environment variables are defined in code. Add DB configuration as needed in `services/auth-service/src/main/resources/application.properties` (TBD).

#### Frontend apps

No `.env` usage. Admin and customer web apps hardcode API base URL to `http://localhost:5000` in `src/App.jsx` (adjust if needed).

## Running the Project

- Development commands:
  - services/administration-service: `npm run dev`
  - services/auth-service: `./mvnw spring-boot:run` (or `mvnw.cmd` on Windows)
  - app-admin-web: `npm run dev`
  - app-customer-web: `npm run dev`
  - app-driver-web: `npm run dev`
  - app-customer-mobile: `npm run start` (also `npm run android`, `npm run ios`, `npm run web`)
  - app-driver-mobile: `flutter run`
- Production/build commands:
  - services/administration-service: `npm start`
  - app-admin-web: `npm run build`, `npm run preview`
  - app-customer-web: `npm run build`, `npm run preview`
  - app-driver-web: `npm run build`, `npm run preview`
  - services/auth-service: `./mvnw package` then run the jar from `target/` (TBD exact jar name)
  - app-customer-mobile: TBD (no build scripts in repo)
  - app-driver-mobile: TBD (use Flutter build tooling as needed)
- Tests:
  - services/administration-service: `npm test` (placeholder script, exits with error)
  - services/auth-service: `./mvnw test`
  - app-driver-mobile: `flutter test`
  - app-\* web and app-customer-mobile: TBD
- Lint/format commands:
  - app-admin-web: `npm run lint`
  - app-customer-web: `npm run lint`
  - app-driver-web: `npm run lint`
  - app-customer-mobile: `npm run lint`
  - services/administration-service, services/auth-service, app-driver-mobile: TBD (no lint scripts found)

## API Documentation

- Base URL: `http://localhost:5000`
- Auth method: JWT signed with `ACCESS_TOKEN_SECRET` stored in httpOnly cookie `token` set by `/admin/login`.

| Method | Route                     | Purpose                                   |
| ------ | ------------------------- | ----------------------------------------- |
| POST   | /admin/login              | Admin login, sets auth cookie             |
| POST   | /admin/logout             | Clear auth cookie                         |
| GET    | /admin/profile            | Get current admin profile (auth required) |
| GET    | /admin/get_all_admin      | List admins                               |
| POST   | /admin/add_admin          | Create admin account                      |
| GET    | /admin/get_all_user       | List customers                            |
| GET    | /admin/get_all_driver     | List drivers                              |
| PATCH  | /admin/terminate_user     | Terminate customer account                |
| PATCH  | /admin/terminate_driver   | Terminate driver account                  |
| POST   | /admin/add_car_model      | Create car model with images              |
| GET    | /admin/get_all_car_models | List car models                           |
| POST   | /admin/add_promotion      | Create promotion with image               |
| GET    | /admin/get_all_promotions | List promotions                           |
| GET    | /admin/get_monthly_stats  | Monthly ride stats                        |
| GET    | /admin/get_yearly_income  | Yearly income stats                       |

Static uploads are served from `/uploads`.

## Project Structure

```
.
├─ app-admin-web/              # Admin web dashboard (React/Vite)
├─ app-customer-web/           # Customer web app (React/Vite)
├─ app-driver-web/             # Driver web app (React/Vite)
├─ app-customer-mobile/        # Customer mobile app (Expo/React Native)
├─ app-driver-mobile/          # Driver mobile app (Flutter)
├─ services/
│  ├─ administration-service/  # Express API + MongoDB
│  └─ auth-service/            # Spring Boot auth service (scaffold)
├─ compose.yaml                # Docker Compose (references missing service-backend)
└─ etc/                        # Misc configs/assets (TBD)
```
