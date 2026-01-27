# Elysian "Ethereal Space" Background Implementation Plan

## Overview
This plan outlines the integration of a **React Three Fiber (R3F)** 3D background. To align with the "Elysian" (heavenly, delightful) aesthetic, we will avoid strict "Dark Sci-Fi Space" visuals and instead create an **"Ethereal Daylight Cosmos"**.

## 1. Design Concept: "The Digital Ether"
Instead of black space with white stars, we envision:
*   **Atmosphere**: A soft, breathable void (White/Pale Blue/Slate-50).
*   **Stars/Particles**: Floating "Data Dust" or "Sparkles" in Gold, Cyan, and Soft Blue.
*   **Depth**: Subtle fog or abstract "Aurora" meshes that ripple gently.
*   **Vibe**: Premium, Airy, Advanced Intelligence.

## 2. Technical Stack
*   **Core**: `three`, `@react-three/fiber`
*   **Helpers**: `@react-three/drei` (specifically `Sparkles`, `Float`, `Stars` customized)
*   **Performance**: `drei/PerformanceMonitor` to dynamic resolution scaling.

## 3. Implementation Steps

### Phase 1: Setup
*   **Install Dependencies**:
    ```bash
    npm install three @types/three @react-three/fiber @react-three/drei
    ```

### Phase 2: Component Creation
We will create `src/components/backgrounds/ElysianSpace.tsx`.

#### Visual Layers:
1.  **The Field (Sparkles)**:
    *   Use `<Sparkles count={500} scale={10} size={2} speed={0.4} opacity={0.5} />`.
    *   **Colors**: Mix of `#0ea5e9` (Sky Blue) and `#a855f7` (Purple).
2.  **The Flow (Abstract Objects)**:
    *   Use `<Float>` wrapping distinct geometric shapes (e.g., Icosahedrons) with `MeshPhysicalMaterial` (Glass-like).
    *   **Glass Effect**: `transmission={0.99}`, `roughness={0}`, `thickness={1}`.
    *   This provides that "Premium/Apple-like" 3D feel.
3.  **The Environment**:
    *   `<Environment preset="city" />` (for reflections on glass objects) or custom lighting.

### Phase 3: Integration
*   **Location**: `app/page.tsx`, primarily in the **Hero Section**.
*   **Code**:
    ```tsx
    <div className="absolute inset-0 z-0 pointer-events-none fade-mask">
       <Canvas camera={{ position: [0, 0, 1] }}>
          <ElysianSpaceScene />
       </Canvas>
    </div>
    ```

## 4. Performance & Responsiveness
*   **Lazy Loading**: The canvas is heavy. We will dynamic import it.
*   **Mobile**: Reduce particle count (`count={100}`) on mobile screens via `window.innerWidth` check.
*   **Fallbacks**: If WebGL fails (rare but possible), the existing CSS gradients serve as the fallback.

## 5. Visual Style Guide (Elysian Adaptation)
*   **Dark Mode**: Deep Blue/Slate Void with bright glowing particles.
*   **Light Mode**: White/Gray Mist with subtle dark/blue particles.

## 6. Next Steps
1.  **Approve Plan**: User confirms this direction.
2.  **Install**: Run npm install.
3.  **Prototype**: Create the isolated component to verify the "Vibe".
