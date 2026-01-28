import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  content: string;
  readTime?: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content');

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getContentByType(type: 'guides' | 'locations'): ContentItem[] {
  const typeDirectory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(typeDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(typeDirectory).filter(file => file.endsWith('.md'));
  
  const items = files.map(file => {
    const filePath = path.join(typeDirectory, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: file.replace('.md', ''),
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      image: data.image || null,
      content: content,
      readTime: calculateReadTime(content),
    };
  });
  
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getContentBySlug(type: 'guides' | 'locations', slug: string): ContentItem | null {
  const filePath = path.join(contentDirectory, type, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    image: data.image || null,
    content: content,
    readTime: calculateReadTime(content),
  };
}

export function getAllSlugs(type: 'guides' | 'locations'): string[] {
  const typeDirectory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(typeDirectory)) {
    return [];
  }
  
  return fs.readdirSync(typeDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

export function getRelatedContent(type: 'guides' | 'locations', currentSlug: string, limit: number = 3): ContentItem[] {
  const allContent = getContentByType(type);
  return allContent
    .filter(item => item.slug !== currentSlug)
    .slice(0, limit);
}
