import React from 'react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  // Extract first letter for the icon avatar
  const initial = tool.name.charAt(0).toUpperCase();

  return (
    <a 
      href={tool.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/20"
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-surfaceHighlight to-surface border border-white/10 flex items-center justify-center text-white font-bold text-lg shadow-inner group-hover:from-primary group-hover:to-secondary transition-colors duration-300">
              {initial}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                {tool.name}
              </h3>
            </div>
          </div>
          <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-white/70 bg-white/5 border border-white/10 rounded-full">
            {tool.category}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {tool.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <span className="text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
            {new URL(tool.url).hostname.replace('www.', '')}
          </span>
          <div className="flex items-center text-xs font-bold text-primary group-hover:text-secondary transition-colors uppercase tracking-wide">
            Open App
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};