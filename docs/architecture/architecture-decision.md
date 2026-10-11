# Weblinic — Initial Architecture Decision

## 1. Architecture Style

Weblinic will begin as a modular monolith.

The backend will run as one Express application, organized into
separate business modules with clear responsibilities.

We are not starting with microservices because they introduce
additional deployment, networking, monitoring, and data
consistency complexity that is unnecessary for our first release.

## 2. Application Components

### Frontend: Next.js

Responsibilities:
- Render pages and user interfaces.
- Collect and display user input.
- Call the backend API.
- Display loading, success, and error states.

The frontend is not the trusted authority for security or
business rules.

### Backend: Express.js

Responsibilities:
- Expose REST API endpoints.
- Validate incoming requests.
- Authenticate users and authorize operations.
- Implement business rules.
- Coordinate database transactions.
- Return consistent API responses.

### Database: PostgreSQL

Responsibilities:
- Persist application data.
- Enforce relational integrity and constraints.
- Store users, doctor profiles, schedules, and appointments.
- Protect consistency when multiple requests occur concurrently.

### Database toolkit: Prisma

Prisma will help the backend work with PostgreSQL using
TypeScript types, schema definitions, and migrations.

We will also learn SQL directly rather than treating Prisma
as a replacement for understanding databases.

## 3. Communication

The frontend will communicate with the backend through a
documented REST API using HTTP requests and JSON responses.

The backend will communicate with PostgreSQL through the
database access layer.

The browser will not connect directly to PostgreSQL.

## 4. Backend Organization

The API will be organized by business capability, for example:

- Identity and access
- Patients
- Doctors
- Scheduling
- Appointments

Each module should have clear responsibilities. We will
introduce separate routes, controllers, services, repositories,
and validation files where they provide real value.

We will avoid unnecessary abstraction for its own sake.

## 5. Appointment Booking Safety

Appointment booking must be safe when multiple patients
attempt to book the same time.

The backend must not rely only on a frontend availability
check. We will design database constraints and transactional
booking logic to prevent conflicting reservations.

The exact schema and concurrency strategy will be documented
before implementing appointment booking.

## 6. Security

- Secrets will be stored outside committed source code.
- Protected endpoints will authenticate and authorize requests.
- Access to patient information will be limited by role and
  resource-level permissions.
- Sensitive operations will be auditable.
- Development and test environments will use synthetic data.

## 7. Future Growth

We will begin with a modular monolith and evaluate whether
separate services are necessary only when real requirements
justify their operational cost.

Automation tools such as n8n may handle suitable background
workflows, but critical booking and data-integrity rules will
remain enforced by the backend and database.
