# Admin Panel Implementation Plan (v3 - Final Approved)

## 1. Architectural Foundation: The "Isolation" Pattern

### Route Separation
- **Path**: `/admin/*` (Strictly separated from `/dashboard/*`).
- **Layout**: Dedicated `AdminLayout` at `app/admin/layout.tsx`.
- **Theme**: Force a distinct visual theme (e.g., "Red/Dark Header" for Danger Mode).

### Visual & Density Strategy
- **Density**: High density (smaller font, compact tables).
- **Sidebar**: Focused on Operational Metrics.
- **Visual Cue**: Persistent "GOD MODE" badge.
- **Real-time Health Indicator**:
  - Located in Sidebar Footer.
  - **Green Dot**: API Latency < 200ms.
  - **Yellow Dot**: API Latency > 500ms.
  - **Red Dot**: 5xx Error Spike.

## 2. Core Modules Implementation

### A. Tenant Overwatch ("The God View")
**Component**: `TenantDataGrid`
- **Library**: `@tanstack/react-table` (Headless).
- **Columns**: Tenant Name, Status, Resource Usage (Progress Bar), Health Score.
- **Killer Feature: Impersonation ("Ghost Mode")**
  - **Action**: "Login as Tenant Admin".
  - **Security Mitigation**:
    - **Frontend**: Handle "impersonator" claims in JWT for Audit UI display.
    - **Token Strategy**: Acknowledge `localStorage` risk; mitigation via Short Expiry/HttpOnly (Backend concern, noted for Frontend token handling).
  - **Mechanism (The "Return Ticket" Pattern)**:
    1.  Store current Admin Token in `localStorage.setItem('x-admin-recovery-token', token)` (or cookie if supported).
    2.  Swap main `token` with Tenant User Token (containing `impersonator_id` claim).
    3.  **UI**: Persistent Top Bar "YOU ARE IMPERSONATING [TENANT]" with **"Exit Ghost Mode"** button.
    4.  **Exit**: Restore token from `x-admin-recovery-token`.

### B. Dynamic RBAC Matrix Editor
**Component**: `PermissionMatrix`
- **UI**: 2D Grid (Permissions x Roles) with real-time checkbox toggling.
- **Frontend focus**: Build the UI to consume the future API structure.

### C. Audit Log Investigator ("Forensic UI")
**Component**: `AuditLogViewer`
- **Diff Viewer**: JSON Diff for `changes` column.
- **Timezone Strategy (Critical)**:
  - **Requirement**: Convert ALL Backend UTC timestamps to Admin's Browser Time using `Intl.DateTimeFormat().resolvedOptions().timeZone`.
  - **Display**: Explicitly show timezone (e.g., "10:00 AM (WIB)").
- **Impersonation Awareness**:
  - IF `impersonator_id` exists in log, display "User Budi (by Admin)" instead of just "User Budi".

### D. Feature Flag Management (Real-time)
**Component**: `FeatureFlagManager`
- **Architecture Refactor**:
  - **New**: `FeatureFlagsProvider` must hydrate from `GET /api/admin/flags`.
- **Scope**: Global (Maintenance) vs Tenant-specific.

### E. AI/RAG Observability
**Component**: `AIObservabilityDashboard`
- **Metrics**: Vector DB Stats, LLM Cost/Latency (Recharts), Token Leak Alerts.

## 3. Layout Structure (`app/admin/layout.tsx`)
```tsx
// Visual Concept
+-------------------------------------------------------+
|  [Logo God Mode]  [Global Search (Cmd+K)]             | -> Dark/Contrast Header
+-------------------+-----------------------------------+
|  MONITORING       |  <Page Content>                   |
|   Live Traffic    |                                   |
|   Error Rate      |                                   |
|                   |                                   |
|  MANAGEMENT       |                                   |
|   Tenants         |                                   |
|   Users           |                                   |
|   Roles           |                                   |
|                   |                                   |
|  SYSTEM           |                                   |
|   Feature Flags   |                                   |
|   Audit Logs      |                                   |
|                   |                                   |
|  [• System Healthy]| -> Sidebar Footer (Health Dot)   |
+-------------------+-----------------------------------+
```
### Global Search (Performance Note)
- **UI**: `Cmd+K` interface.
- **Constraint**: Frontend must handle debouncing (300ms+) to prevent API spamming.
- **Backend Assumption**: Backend handles indexing; Frontend handles efficient querying/loading states.

## 4. Execution Roadmap

1.  **Phase 1: Shell & Routing**
    - Create `app/admin/layout.tsx` (Sidebar with Health Dot).
    - Implement Theme Overrides (`admin-theme`).
    - **Step 1 Action**: Create Layout and Page structure.

2.  **Phase 2: Tenant & Impersonation (The "Return Ticket")**
    - Implement `TanStack Table`.
    - Build `useImpersonate` hook with recovery token logic.

3.  **Phase 3: Security & RBAC UI**
    - Build Permission Matrix UI (Mock data initially if backend not ready).

4.  **Phase 4: Observability & Flags**
    - Audit Log with Timezone correction and Impersonator display.
    - Refactor `FeatureFlagsProvider`.

## 5. Dependencies
- `npm install react-diff-viewer-continued` (Audit Logs).
