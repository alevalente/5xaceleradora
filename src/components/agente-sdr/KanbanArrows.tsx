
import React from 'react';

const KanbanArrows = () => {
  return (
    <div className="hidden lg:flex justify-center items-center mb-8 opacity-70 hover:opacity-100 transition-opacity">
      <svg width="800" height="40" viewBox="0 0 800 40" className="text-gray-400">
        <defs>
          <marker id="arrowhead-sdr" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
          </marker>
        </defs>
        {/* Seta 1 → 2 */}
        <line x1="150" y1="20" x2="250" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead-sdr)" />
        {/* Seta 2 → 3 */}
        <line x1="350" y1="20" x2="450" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead-sdr)" />
        {/* Seta 3 → 4 */}
        <line x1="550" y1="20" x2="650" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead-sdr)" />
      </svg>
    </div>
  );
};

export default KanbanArrows;
