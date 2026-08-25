import { lazy, Suspense } from "react";

const SceneCanvas = lazy(() => import("./SceneCanvas3D"));

export default function SceneCanvasWrapper() {
  return (
    <div className="h-full w-full">
      <Suspense fallback={null}>
        <SceneCanvas />
      </Suspense>
    </div>
  );
}