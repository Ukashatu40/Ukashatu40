# Verified Repository Matrix

Audit date: 2026-09-29

Only repositories directly inspected from publicly accessible GitHub pages are included below. Unknown repositories are intentionally omitted.

| Repository | Primary language | Product shape | Database | APIs / integrations | Auth / security | Real-time / async | Docker | CI/CD | Cloud / deploy | Testing | Complexity | Current identity fit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `double-entry-accounting-ledger-system` | TypeScript | Backend | PostgreSQL 15 | REST/OpenAPI, FX, reconciliation | API-key roles, idempotency, rate limiting, hash chain, immutability triggers | Concurrent transaction control | Yes | Documented commands/workflow | Render + Neon | Unit + integration + coverage | High | Strong |
| `payment-orchestration-engine` | TypeScript | Backend | PostgreSQL 15 | 8 payment providers, webhooks | X-API-Key, HMAC webhook verification, replay protection, idempotency | Webhooks, reconciliation, failure handling | Yes | Deployment configuration | Render configuration | Unit + scenario + coverage | High | Strong |
| `event-driven-notification-engine` | TypeScript | Backend + real-time operations | PostgreSQL 15 + Redis | Kafka, RabbitMQ, SMS/email/push/WhatsApp | JWT, refresh rotation, RBAC, AES-256-GCM, PII masking | Kafka, RabbitMQ, Redis, WebSockets, DLQ, circuit breaker | Yes | Deployment workflow/docs | Render/Vercel docs | Unit + coverage + E2E | High | Strong |
| `ratel-financial-platform` | TypeScript | Backend repository | PostgreSQL via Prisma | AWS S3, Nodemailer, OpenTelemetry, Prometheus | Helmet, JWT, Passport, Argon2, throttling, file scanning | BullMQ + Redis | Yes | GitHub workflow present | Production compose/deployment docs | Unit + integration + E2E + Testcontainers | High | Strong |
| `docker-handbook-projects` | JavaScript | Mixed / learning | Project-dependent | NGINX, Express, Vue | Not a primary focus | Containerized components | Yes | Not verified | Not verified | Not verified | Medium | Supporting |
| `kubernetes-handbook-projects` | JavaScript | Mixed / learning | Project-dependent | NGINX, Express, Vue | Not a primary focus | Containerized components | Yes | Kubernetes focus | Not verified | Not verified | Medium | Supporting |
| `ci-cd-tutorial` | JavaScript | Backend/sample | Not verified | Node/Express-style app | Not verified | Not verified | Yes | GitHub Actions | Not verified | `__tests__` present | Low-Medium | Supporting |
| `next.js-projects` | JavaScript / Next.js files | Frontend collection | Not verified | Varies by nested project | Not verified | Not verified | Not verified | Not verified | Vercel link for Printforge | Not verified | Medium | Supporting |
| `react-projects` | TypeScript (profile card) | Frontend collection | Not verified | Not verified | Not verified | Not verified | Not verified | Not verified | Not verified | Not verified | Low-Medium | Supporting |
| `odin-projects` | JavaScript | Mixed learning collection | Project-dependent | Express and Node-related work | JWT/authentication projects present | Not verified | Not verified | Not verified | Not verified | Not verified | Medium | Supporting |
