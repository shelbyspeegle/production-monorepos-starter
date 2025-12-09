import { Card } from './card';
import { CodeBlock } from './code-block';

interface SnippetCardProps {
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: string;
}

export function SnippetCard({ title, language, code, tags, createdAt }: SnippetCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">Created at: {createdAt}</p>
      <CodeBlock code={code} language={language} />
      <div className="mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}