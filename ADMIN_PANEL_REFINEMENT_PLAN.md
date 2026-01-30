# Admin Panel Refinement Plan: "True Obsidian" & Performance

## Objective
Address the Professor's feedback regarding the "Grey Mode" vs "Obsidian" critique, rendering performance (GPU load), and forensic data visualization.

## Phase 1: "True Obsidian" Aesthetics (Visual Correction)
**Goal:** Eliminate "Grey Mode". Ensure the environment feels like a dark control room.
-   **Action**: Update `globals.css` -> `.admin-obsidian-theme`.
    -   Force Background to `Slate-950` (#020617) or darker.
    -   Ensure `GlassCard (Transparent)` uses `bg-slate-950/40` instead of lighter values.
-   **Action**: Update `GlassCard.tsx`.
    -   **Critical**: For `variant="solid"`, **REMOVE** `backdrop-filter: blur()`.
    -   Use `bg-[#020617]` (Solid Slate-950) or `bg-slate-950/95` for data containers.
    -   This solves the "Jebakan GPU" mentioned by the professor.

## Phase 2: Sidebar Navigation interaction
**Goal:** Improve navigation intuition.
-   **Action**: Update `AdminSidebar.tsx`.
    -   Wrap the "Dashboard Admin" branding header in a `Link` to `/admin`.
    -   Ensure it has a subtle hover effect to indicate clickability.

## Phase 3: Forensic Data Visualization
**Goal:** Ensure Audit Logs show *actual* diffs, not text dumps.
-   **Action**: Review & Polish `AuditDiffViewer.tsx`.
    -   Ensure `react-diff-viewer-continued` is receiving the correct `useDarkTheme={true}` prop.
    -   Verify that the diff colors (Green/Red) are visible against the Obsidian background.
    -   If the library forces a light background, apply CSS overrides to make it seamless.

## Phase 4: CSS Cleanup
**Goal:** Remove any remaining `bg-slate-100` or `bg-white` anomalies.
-   **Action**: Scan `PermissionMatrix.tsx` again to ensure no remaining light theme classes (`bg-slate-50`) are lingering in utility classes.
