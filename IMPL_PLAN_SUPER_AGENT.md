# Elysian "Super Agent" Animation Implementation Plan (Final v3)

## Overview
This plan outlines the distinct steps to build the high-impact "Elysian Lens" animation. This version incorporates advanced engineering feedback to ensure "bulletproof" stability, precise timing, and mobile responsiveness.

## 1. Design Concept: "The Elysian Lens"
*   **Concept**: An ethereal glass visor floats in 3D space (breathing) -> Scrolls & Snaps onto User -> HUD Activates.
*   **Goal**: Premium, stable, "glass-like" feel that runs smoothly on all devices.

## 2. Technical Architecture

### Component Logic & Structure
The architecture separates the logic branch for accessibility from the rendering tree.

```tsx
// Logic Branch: Accessibility & Mobile Fallback
const shouldReduceMotion = useReducedMotion();
const isMobile = useMediaQuery("(max-width: 768px)");

if (shouldReduceMotion) {
  return <AgentRevealFinalState />; // Static locked state
}

return (
  <AgentRevealSection>
    {/* SectionWrapper: Define scroll distance (min-h-[300vh]) */}
    <div className="relative min-h-[300vh]" ref={containerRef}> 
       
       {/* StickyContainer: The pinned viewport (h-screen) */}
       <div className="sticky top-0 h-screen overflow-hidden">
       
          {/* GrainLayer: Sits above scene, outside backdrop filters to avoid perf hit */}
          <GrainLayer /> 
          
          {/* SceneContainer: Relative wrapper with isolation: isolate */}
          <div className="relative w-full h-full isolate">
             <SubjectGroup>
                <SubjectImage />
                <ActivationOverlay /> {/* Gradient overlay for "glow" */}
             </SubjectGroup>
             
             <VisorGroup>
                <VisorShadow />       {/* Contact shadow */}
                <VisorBase />         {/* Main gradient shape */}
                <VisorHighlight />    {/* Specular/Gloss */}
                <AberrationClone />   {/* Clone for pulse effect */}
             </VisorGroup>
             
             <HUDLayer />             {/* Fixed SVG Pattern (Pattern A) */}
          </div>
       </div>
    </div>
  </AgentRevealSection>
);
```

### Library Strategy
*   **GSAP + ScrollTrigger**: Primary timeline director.
*   **Framer Motion**: Micro-interactions only.
*   **Tailwind**: Layout.

## 3. Implementation Steps

### Phase 1: Production-Ready Assets
*   **Rendering**: Use native `<img>` tags for Visor/Subject layers to allow `img.decode()` gating. If using `Next/Image`, must use `onLoadingComplete={(img) => img.decode?.()}` and a ready flag.
*   **Layers**:
    1.  `visor-base.webp`: Main shape, sRGB, ~1600px width.
    2.  `visor-highlight.webp`: Specular highlights (screen mode).
    3.  `visor-shadow.webp`: Soft contact shadow.
    4.  `subject-portrait.webp`: Professional portrait.
    5.  `grain.png`: Noise texture (mix-blend-mode: overlay, low opacity).

### Phase 2: Scaffolding & Pre-flight
*   **Preloading**: Use `img.decode()` to ensure zero pop-in before animation start.
*   **Mobile Strategy**: If viewport `< 768px`, disable pinning/scroll-scrubbing. Render a simplified sequence: Fade In Visor -> Fade In HUD (List Format).

### Phase 3: The Timeline (GSAP)
**Core Principle**: Use explicit time durations (`duration: X`) for the timeline labels, mapped to scroll progress.

*   **Labels**:
    *   `tl.addLabel('start')`
    *   `tl.addLabel('equip', '+=0.6')` // 0.6s duration
    *   `tl.addLabel('lock', '+=0.1')` // 0.1s duration
    *   `tl.addLabel('reveal', '+=0.3')` // 0.3s duration
*   **Animations**:
    *   **Equip Phase (0.6s)**: Visor from `y: -200, scale: 1.5, rotate: 15` to `y: 0, scale: 1, rotate: 0`. Easing: `power2.inOut`.
    *   **Lock Phase (0.1s)**: 
        *   **Snap**: Micro-shake `to(visor, { x: 2, yoyo: true, repeat: 3, duration: 0.02 })`.
        *   **Clone Pulse**: `AberrationClone` (Visor Base + Hue Rotate Offset 2px) opacity `0 -> 0.5 -> 0`.
        *   **Glow**: `ActivationOverlay` opacity `0 -> 0.4 -> 0`.
    *   **Reveal Phase (0.3s)**: HUD Lines `strokeDashoffset` to 0.

### Phase 4: HUD Architecture (Pattern A)
*   **Pattern**: Fixed SVG Paths in Relative Container.
*   **Desktop**: Paths strictly drawn to align with the centered face.
*   **Tablet**: Media query to adjust SVG `viewBox` or scale.
*   **NO** runtime path calculation for v1.

### Phase 5: Optimization
*   **Isolation**: `isolation: isolate` on SceneContainer to prevent blend mode leaks.
*   **Performance**:
    *   Grain: `pointer-events-none`.
    *   Layers: `will-change: transform`.
    *   Subject Glow: Overlay opacity, NOT `mix-blend-mode` on the image itself.

## 4. Visual Style Guide
*   **Palette**: Elysian Pastels.
*   **Hue**: Cyan-500 primary, Purple-500 secondary.
*   **Typography**: `Outfit` for HUD Headers.

## 5. Next Milestone
*   **Execution**: Generate assets and begin coding Phase 2.
