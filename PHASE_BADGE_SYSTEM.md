# Phase Badge System Documentation

## Overview
The Mission Control tab now includes a **dynamic phase badge system** that displays appropriate badges based on the current PSP (Parliamentary Simulation Program) phase.

## System Architecture

### 1. Phase Configuration (`PHASE_CONFIG`)
Located in `/src/app/components/MissionControlTab.tsx`, this object defines all available phases and their visual properties:

```typescript
type PhaseType = 'genesis' | 'preparation' | 'execution' | 'reflection';

interface PhaseBadge {
  label: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: 'target' | 'pencil' | 'checkmark' | 'lightbulb';
}

const PHASE_CONFIG: Record<PhaseType, PhaseBadge> = {
  genesis: {
    label: 'Genesis',
    bgColor: '#e7f2fe',     // Light blue
    borderColor: '#3c7ce8',  // Blue
    textColor: '#1850c5',    // Dark blue
    icon: 'target'           // Concentric circles target icon
  },
  preparation: {
    label: 'Preparation',
    bgColor: '#fef3c7',      // Light amber
    borderColor: '#f59e0b',  // Amber
    textColor: '#d97706',    // Dark amber
    icon: 'pencil'           // Pencil icon
  },
  execution: {
    label: 'Execution',
    bgColor: '#dcfce7',      // Light green
    borderColor: '#22c55e',  // Green
    textColor: '#16a34a',    // Dark green
    icon: 'checkmark'        // Checkmark icon
  },
  reflection: {
    label: 'Reflection',
    bgColor: '#f3e8ff',      // Light purple
    borderColor: '#a855f7',  // Purple
    textColor: '#9333ea',    // Dark purple
    icon: 'lightbulb'        // Lightbulb icon
  }
};
```

### 2. Components

#### `PhaseBadgeIcon`
Renders the appropriate icon for a given phase.

**Props:**
- `icon`: 'target' | 'pencil' | 'checkmark' | 'lightbulb'
- `color`: string (hex color for the icon)

**Supported Icons:**
- **Target**: Concentric circles (for Genesis phase)
- **Pencil**: Simple fat pencil (for Preparation phase)
- **Checkmark**: Success checkmark (for Execution phase)
- **Lightbulb**: Idea lightbulb (for Reflection phase)

#### `PhaseBadge`
Main badge component that combines icon + label with proper styling.

**Props:**
- `phase`: PhaseType ('genesis' | 'preparation' | 'execution' | 'reflection')

**Example Usage:**
```tsx
<PhaseBadge phase="genesis" />
<PhaseBadge phase="preparation" />
```

### 3. Current Implementation

In the `MissionControlTab` component, there's a mock PSP data object:

```typescript
const currentPSP = {
  currentDay: 1,
  totalDays: 14,
  currentPhase: 'genesis' as PhaseType, // Change this to test different phases
};
```

The badges are rendered in the Overview card:
```tsx
<div className="flex gap-[8px] items-center">
  {/* Day Progress Badge - always shown */}
  <div className="...">
    <p>Day {currentPSP.currentDay} of {currentPSP.totalDays}</p>
  </div>
  
  {/* Current Phase Badge - dynamically rendered */}
  <PhaseBadge phase={currentPSP.currentPhase} />
</div>
```

## How to Integrate with Real Data

### Option 1: Context/State Management
Replace the mock `currentPSP` object with data from React Context or state management:

```typescript
export function MissionControlTab() {
  const { activePSP } = usePSPContext(); // Your context hook
  
  const currentPSP = {
    currentDay: activePSP.currentDay,
    totalDays: activePSP.totalDays,
    currentPhase: activePSP.phase as PhaseType,
  };
  
  // ... rest of component
}
```

### Option 2: Props
Pass PSP data as props:

```typescript
interface MissionControlTabProps {
  psp: {
    currentDay: number;
    totalDays: number;
    currentPhase: PhaseType;
  };
}

export function MissionControlTab({ psp }: MissionControlTabProps) {
  const currentPSP = psp;
  
  // ... rest of component
}
```

### Option 3: API/Database Query
Fetch PSP data from your backend:

```typescript
export function MissionControlTab() {
  const [pspData, setPspData] = useState({
    currentDay: 1,
    totalDays: 14,
    currentPhase: 'genesis' as PhaseType,
  });
  
  useEffect(() => {
    // Fetch from your API
    fetch('/api/psp/current')
      .then(res => res.json())
      .then(data => setPspData({
        currentDay: data.currentDay,
        totalDays: data.totalDays,
        currentPhase: data.phase as PhaseType,
      }));
  }, []);
  
  const currentPSP = pspData;
  
  // ... rest of component
}
```

## Testing Different Phases

To test how different phases look, simply change the `currentPhase` value in the mock data:

```typescript
// Test Genesis phase
const currentPSP = {
  currentDay: 1,
  totalDays: 14,
  currentPhase: 'genesis' as PhaseType,
};

// Test Preparation phase
const currentPSP = {
  currentDay: 3,
  totalDays: 14,
  currentPhase: 'preparation' as PhaseType,
};

// Test Execution phase
const currentPSP = {
  currentDay: 8,
  totalDays: 14,
  currentPhase: 'execution' as PhaseType,
};

// Test Reflection phase
const currentPSP = {
  currentDay: 13,
  totalDays: 14,
  currentPhase: 'reflection' as PhaseType,
};
```

## Adding New Phases

To add a new phase:

1. **Update the type definition:**
```typescript
type PhaseType = 'genesis' | 'preparation' | 'execution' | 'reflection' | 'new_phase';
```

2. **Add a new icon (if needed) in `PhaseBadgeIcon`:**
```typescript
{icon === 'new_icon' && (
  <path d="..." fill={color}/>
)}
```

3. **Add configuration to `PHASE_CONFIG`:**
```typescript
const PHASE_CONFIG: Record<PhaseType, PhaseBadge> = {
  // ... existing phases
  new_phase: {
    label: 'New Phase',
    bgColor: '#...',
    borderColor: '#...',
    textColor: '#...',
    icon: 'new_icon'
  }
};
```

## Visual Examples

### Genesis Phase (Blue)
- **Icon**: Target/bullseye with concentric circles
- **Colors**: Light blue background, blue border, dark blue text
- **Use case**: Initial planning and ideation phase

### Preparation Phase (Amber)
- **Icon**: Fat pencil
- **Colors**: Light amber background, amber border, dark amber text
- **Use case**: Planning and preparation activities

### Execution Phase (Green)
- **Icon**: Checkmark
- **Colors**: Light green background, green border, dark green text
- **Use case**: Active implementation phase

### Reflection Phase (Purple)
- **Icon**: Lightbulb
- **Colors**: Light purple background, purple border, dark purple text
- **Use case**: Review and reflection activities

## Best Practices

1. **Always validate phase data**: Ensure the phase value matches one of the defined PhaseType values
2. **Consistent timing**: Update the phase badge at the same time you update the day counter
3. **Error handling**: Provide a fallback if phase data is missing:
   ```typescript
   <PhaseBadge phase={currentPSP.currentPhase || 'genesis'} />
   ```
4. **Accessibility**: The badges include proper semantic HTML and visual contrast ratios

## Notes

- Only **one phase badge** displays at a time (based on `currentPhase`)
- The **"Day X of Y" badge** always displays alongside the phase badge
- Icons are SVG-based for crisp rendering at all sizes
- All colors follow the design system established in the rest of the application
