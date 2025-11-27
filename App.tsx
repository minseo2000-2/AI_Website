import React, { useState } from 'react';
import { ToolCard } from './components/ToolCard';
import { DiscoveryBar } from './components/DiscoveryBar';
import { AITool } from './types';
import { suggestAITools } from './services/geminiService';

const DEFAULT_TOOLS: AITool[] = [
  {
    id: 'gamma-1',
    name: 'Gamma',
    url: 'https://gamma.app/',
    description: 'A new medium for presenting ideas. Powered by AI, create beautiful, engaging content with none of the formatting work.',
    category: 'Presentation'
  },
  {
    id: 'chatgpt-1',
    name: 'ChatGPT',
    url: 'https://chatgpt.com/',
    description: 'OpenAI\'s advanced conversational AI model capable of answering follow-up questions, admitting mistakes, and challenging incorrect premises.',
    category: 'Chatbot'
  },
  {
    id: 'notebooklm-1',
    name: 'NotebookLM',
    url: 'https://notebooklm.google/',
    description: 'An AI-first notebook, grounded in your own documents, designed to help you gain insights faster from your reading material.',
    category: 'Research'
  }
];

const App: React.FC = () => {
  const [tools, setTools] = useState<AITool[]>(DEFAULT_TOOLS);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [discoveredTools, setDiscoveredTools] = useState<AITool[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleDiscovery = async (query: string) => {
    setIsDiscovering(true);
    setError(null);
    try {
      const newTools = await suggestAITools(query);
      if (newTools.length > 0) {
        setDiscoveredTools(newTools);
      } else {
        setError("I couldn't find any specific tools for that request. Try rephrasing!");
      }
    } catch (err) {
      setError("Something went wrong while connecting to the AI brain.");
    } finally {
      setIsDiscovering(false);
    }
  };

  const clearDiscovery = () => {
    setDiscoveredTools([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 selection:bg-primary selection:text-white relative overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-32">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Intelligent Directory
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            AI <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Nexus</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Curate, discover, and organize your essential AI tools in one beautiful workspace.
          </p>
        </div>

        {/* Discovery Bar */}
        <DiscoveryBar onSearch={handleDiscovery} isLoading={isDiscovering} />

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-10 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-center animate-pulse backdrop-blur-sm">
            {error}
          </div>
        )}

        {/* Discovered Tools Section */}
        {discoveredTools.length > 0 && (
          <div className="mb-20 animate-fade-in">
            <div className="flex items-end justify-between mb-8 px-2 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-3xl font-display font-bold text-white flex items-center">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full mr-4"></span>
                  Discovered Results
                </h2>
                <p className="text-slate-500 mt-1 ml-5.5 text-sm">AI-powered recommendations based on your query</p>
              </div>
              <button 
                onClick={clearDiscovery}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Clear Results
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discoveredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}

        {/* Favorites Section */}
        <div>
          <div className="flex items-end mb-8 px-2 border-b border-white/10 pb-4">
             <div>
                <h2 className="text-3xl font-display font-bold text-white flex items-center">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-secondary to-accent rounded-full mr-4"></span>
                  My Favorites
                </h2>
                <p className="text-slate-500 mt-1 ml-5.5 text-sm">Your pinned collection of daily drivers</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

      </main>

      <footer className="relative z-10 py-12 text-center border-t border-white/5 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} AI Nexus. Engineered with <span className="text-primary">Gemini 2.5 Flash</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;