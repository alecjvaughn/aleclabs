import { getMarkdownContent } from '../../markdown';

export default async function HomePage() {
  const homeContent = await getMarkdownContent('about.md');

  return (
    <article className="prose dark:prose-invert mx-auto p-8">
      {homeContent.title && <h1>{homeContent.title}</h1>}
      <div dangerouslySetInnerHTML={{ __html: homeContent.contentHtml }} />
    </article>
  );
}