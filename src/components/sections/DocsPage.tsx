import React from "react";
import HorizontalScrollContainer from "./HorizontalScrollContainer";
import { Code } from "lucide-react";

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Horizontal Scroll Component
          </h1>
          <p className="text-xl text-gray-600">
            A smooth, GSAP-powered horizontal scrolling experience for React
            applications
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Smooth Scrolling
              </h3>
              <p className="text-gray-600">
                Utilizes GSAP's ScrollTrigger for butter-smooth horizontal
                scrolling animation, with proper pinning and momentum-based
                scrolling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                TypeScript Support
              </h3>
              <p className="text-gray-600">
                Fully typed component with proper interfaces for panels and
                refs, ensuring type safety throughout the application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Responsive Design
              </h3>
              <p className="text-gray-600">
                Adapts to different screen sizes while maintaining smooth
                scrolling behavior and proper content display.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Custom Content Cards
              </h3>
              <p className="text-gray-600">
                Flexible card system that can display various types of content
                with customizable styling and interactive elements.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Implementation Details
          </h2>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Installation</h3>
            <div className="bg-gray-800 rounded-lg p-4 text-white">
              <code>npm install gsap @types/gsap</code>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Core Concepts</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>1. GSAP ScrollTrigger Setup:</strong> The component uses
                GSAP's ScrollTrigger plugin to transform vertical scroll into
                horizontal movement. This is achieved by pinning the container
                and animating the panels' x-position.
              </p>
              <p>
                <strong>2. Panel References:</strong> Each panel is tracked
                using React refs, allowing GSAP to animate them smoothly while
                maintaining proper React state management.
              </p>
              <p>
                <strong>3. Cleanup Management:</strong> The component properly
                cleans up GSAP animations and ScrollTrigger instances on
                unmount, preventing memory leaks.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Usage Example</h3>
            <div className="bg-gray-800 rounded-lg p-4 text-white overflow-x-auto">
              <pre>
                <code>{`
import { HorizontalScrollContainer } from './components';

const App = () => {
  return (
    <div className="your-container">
      <HorizontalScrollContainer />
    </div>
  );
};
                `}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Customization */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Customization
          </h2>
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <p className="text-gray-600">
              The component can be customized through the panel data structure:
            </p>
            <div className="bg-gray-800 rounded-lg p-4 text-white overflow-x-auto">
              <pre>
                <code>{`
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
                `}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Tips and Best Practices */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Tips and Best Practices
          </h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <ul className="space-y-4 text-gray-600 list-disc pl-6">
              <li>
                Ensure your container has a fixed height for proper
                ScrollTrigger functionality.
              </li>
              <li>
                Use the cleanup function in useEffect to prevent memory leaks
                and animation conflicts.
              </li>
              <li>
                Consider performance when adding many panels - each panel
                increases the animation complexity.
              </li>
              <li>
                Test on different devices to ensure smooth scrolling behavior
                across platforms.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
