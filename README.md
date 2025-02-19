# React Horizontal Scroll Component

A smooth, GSAP-powered horizontal scrolling component for React applications with TypeScript support. This component transforms vertical scroll into a horizontal sliding experience, perfect for portfolios, showcases, and interactive presentations.


## Features

- 🎯 Smooth horizontal scrolling using GSAP ScrollTrigger
- 📱 Responsive design that works across all devices
- 💪 Built with TypeScript for type safety
- 🎨 Customizable card-based content system
- 🧹 Proper cleanup and memory management
- 🎢 Momentum-based scrolling animation

## Installation

```bash
# Install the component and its dependencies
npm install gsap @types/gsap react

# or using yarn
yarn add gsap @types/gsap react
```

## Usage

1. Import the component:

```typescript
import { HorizontalScrollContainer } from './components/HorizontalScrollContainer';
```

2. Define your panel content:

```typescript
const panels = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A revolutionary approach to building scalable applications.",
    tags: ["React", "TypeScript", "GSAP"],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    }
  },
  // Add more panels...
];
```

3. Use the component in your React application:

```typescript
const App = () => {
  return (
    <div className="your-container">
      <HorizontalScrollContainer />
    </div>
  );
};
```

## Component Structure

```typescript
type Panel = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
};
```

## Core Implementation

The component uses GSAP's ScrollTrigger for animation:

```typescript
useEffect(() => {
  const container = containerRef.current;
  const panelElements = panelsRef.current.filter(
    (panel): panel is HTMLDivElement => panel !== null
  );
    
  if (!container || panelElements.length === 0) return;

  const scrollTrigger = gsap.to(panelElements, {
    xPercent: -100 * (panelElements.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (panelElements.length - 1),
      end: () => "+=" + container.offsetWidth * (panelElements.length - 1),
      invalidateOnRefresh: true
    }
  });

  return () => {
    scrollTrigger.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
```

## Customization

### Styling

The component uses Tailwind CSS for styling. You can customize the appearance by modifying the className props or extending the styling system.

### Panel Content

Modify the panels array to customize the content of each slide:

```typescript
const panels: Panel[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Your project description",
    tags: ["Your", "Tags", "Here"],
    links: {
      demo: "your-demo-link",
      github: "your-github-link"
    }
  }
];
```

## Best Practices

1. **Container Height**: Ensure your container has a fixed height for proper ScrollTrigger functionality.
2. **Performance**: Be mindful of the number of panels - each additional panel increases animation complexity.
3. **Testing**: Test on different devices to ensure smooth scrolling behavior.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Issues

- iOS momentum scrolling may require additional configuration
- Performance may vary on lower-end devices with many panels


