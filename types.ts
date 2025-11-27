export interface AITool {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  isCustom?: boolean; // To distinguish user-added vs default
}

export interface SuggestionRequest {
  query: string;
}

export enum ToolCategory {
  WRITING = 'Writing',
  CODING = 'Coding',
  IMAGE = 'Image Generation',
  RESEARCH = 'Research',
  PRESENTATION = 'Presentation',
  AUDIO = 'Audio',
  VIDEO = 'Video',
  OTHER = 'Other'
}