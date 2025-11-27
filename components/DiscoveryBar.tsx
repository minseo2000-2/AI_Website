import React, { useState, useCallback } from 'react';

interface DiscoveryBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const DiscoveryBar: React.FC<DiscoveryBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  }, [query, onSearch]);

  return (
    <div className="w-full max-w-3xl mx-auto mb-16 relative z-20">
      {/* Background glow behind the search bar */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 transition duration-1000 group-hover:opacity-100 ${isFocused ? 'opacity-75' : 'opacity-25'}`}></div>
      
      <div className="relative bg-surface/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="pl-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors duration-300 ${isFocused ? 'text-primary' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Describe what you need (e.g., 'Free AI for generating logos')"
            className="w-full bg-transparent text-white placeholder-gray-500 text-lg py-4 px-4 focus:outline-none font-light"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="hidden md:flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transform active:scale-95"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Discover Tools'
            )}
          </button>
          
          {/* Mobile button icon only */}
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="md:hidden p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl disabled:opacity-50 ml-2"
          >
             {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
             ) : (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             )}
          </button>
        </form>
      </div>
    </div>
  );
};