interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  return (
    <div className="bg-[#1e1e1e]">
      <div className="text-sm text-white opacity-60 px-4 pt-2">{language}</div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-white">
          {code}
        </code>
      </pre>
    </div>
  );
}