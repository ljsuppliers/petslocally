export function markdownToHtml(content: string): string {
  const normalized = content.trim().replace(/\r\n/g, '\n');
  const blocks = normalized.split(/\n\n+/);
  
  return blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    
    if (trimmed.startsWith('## ')) {
      return `<h2>${processInline(trimmed.slice(3))}</h2>`;
    }
    if (trimmed.startsWith('### ')) {
      return `<h3>${processInline(trimmed.slice(4))}</h3>`;
    }
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n')
        .filter(line => line.trim().startsWith('- '))
        .map(item => `<li>${processInline(item.trim().slice(2))}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n')
        .filter(line => /^\d+\.\s/.test(line.trim()))
        .map(item => `<li>${processInline(item.trim().replace(/^\d+\.\s/, ''))}</li>`)
        .join('');
      return `<ol>${items}</ol>`;
    }
    return `<p>${processInline(trimmed)}</p>`;
  }).filter(Boolean).join('\n');
}

function processInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}
