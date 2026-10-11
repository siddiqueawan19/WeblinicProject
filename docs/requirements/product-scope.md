# Weblinic — Product Scope

## 1. Project Vision

Weblinic is a healthcare service platform designed to connect
patients with healthcare providers and related services.

The long-term platform may support doctor consultations,
appointments, prescriptions, pharmacies, laboratory services,
ambulances, home healthcare, and administrative operations.

## 2. First Release (MVP)

The first release will focus on one complete patient journey:

1. Patient registration and authentication.
2. Doctor profiles and specialty discovery.
3. Doctor availability and appointment slots.
4. Appointment booking and cancellation.
5. Appointment confirmation and status tracking.

MVP means Minimum Viable Product: the smallest useful
version that we can build, test, and improve.

## 3. Initial User Roles

- Patient: manages their profile and appointments.
- Doctor: manages their professional profile and availability.
- Administrator: manages platform operations with restricted,
  explicitly authorized permissions.

## 4. Initial Technology Stack

- Frontend: Next.js App Router and TypeScript.
- Backend: Node.js, Express.js, and TypeScript.
- Database: PostgreSQL.
- Database toolkit: Prisma.
- Version control: Git.
- Automation: n8n, introduced when a suitable workflow exists.
- AI assistance: free tools where available, without depending
  on any single AI provider.

## 5. Engineering Principles

- Understand the design before implementing it.
- Validate inputs on the server.
- Enforce authorization on every protected operation.
- Prevent conflicting appointment bookings.
- Use database constraints and transactions where appropriate.
- Keep healthcare information private and access-controlled.
- Write tests for important business rules.
- Use synthetic data during development.
- Document important architectural decisions.
- Prefer simple, maintainable designs over unnecessary complexity.

## 6. Outside the First Release

The following features are planned for later phases:

- Video consultations and medical records.
- Prescriptions and medicine orders.
- Laboratory services and diagnostic workflows.
- Ambulance booking and home healthcare.
- Second opinions and clinically governed patient triage.
- Payments, insurance, and advanced financial reporting.
- HR, support operations, notifications, and advanced analytics.

These features are not cancelled; they are deferred until the
core appointment journey is working reliably.

## 7. Initial Security Requirements

- Never store plaintext passwords.
- Apply role-based and resource-level authorization.
- Do not expose sensitive records through unrestricted APIs.
- Keep secrets out of source control.
- Maintain appropriate audit records for sensitive operations.
- Use synthetic data for development and testing.

## 8. Definition of MVP Completion

The first release is complete when a patient can register,
find a doctor, view available slots, book an appointment,
and see the confirmed appointment.

The system must also validate requests, enforce permissions,
handle booking conflicts safely, and pass relevant tests.
