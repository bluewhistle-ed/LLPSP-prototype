import { useId } from "react";

/**
 * Diagonal stripe overlay for "disposed" / "completed" / "break" states.
 * Renders an absolute-positioned SVG with 45° hatching lines.
 *
 * All visual properties are driven by CSS variables from theme.css:
 *   --stripe-color   (default rgba(209,213,219,1))
 *   --stripe-opacity  (default 0.4)
 *   --stripe-spacing   (default 8)
 *   --stripe-width     (default 1.5)
 *
 * Props can still override for edge cases, but prefer updating the
 * CSS variables so every instance stays in sync automatically.
 *
 * Parent container must have `position: relative` and `overflow: hidden`.
 */
export function DiagonalStripeOverlay({
  opacity,
  stroke,
  spacing,
  strokeWidth,
}: {
  opacity?: number;
  stroke?: string;
  spacing?: number;
  strokeWidth?: number;
} = {}) {
  // useId guarantees a unique pattern ID per instance, avoiding SVG paint conflicts
  const patternId = useId();

  // Read CSS variable values at render time, falling back to sensible hardcoded defaults
  // in case the variables aren't defined yet (e.g. during SSR or tests).
  const root = typeof document !== "undefined" ? document.documentElement : null;
  const styles = root ? getComputedStyle(root) : null;

  const resolvedStroke =
    stroke ?? (styles?.getPropertyValue("--stripe-color").trim() || "rgba(209, 213, 219, 1.00)");
  const resolvedOpacity =
    opacity ?? parseFloat(styles?.getPropertyValue("--stripe-opacity").trim() || "0.4");
  const resolvedSpacing =
    spacing ?? parseFloat(styles?.getPropertyValue("--stripe-spacing").trim() || "8");
  const resolvedStrokeWidth =
    strokeWidth ?? parseFloat(styles?.getPropertyValue("--stripe-width").trim() || "1.5");

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: resolvedOpacity }}
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={resolvedSpacing}
          height={resolvedSpacing}
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2={resolvedSpacing}
            stroke={resolvedStroke}
            strokeWidth={resolvedStrokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}