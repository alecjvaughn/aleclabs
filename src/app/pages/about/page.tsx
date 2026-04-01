import { getMarkdownContent } from '../../markdown';

export default async function HomePage() {
  // The path is now relative to the project root where the external repo is checked out.
  const homeContent = await getMarkdownContent('content/about/about.md');

  return (
    <article className="prose dark:prose-invert mx-auto p-8">
      {homeContent.title && <h1>{homeContent.title}</h1>}
      <div dangerouslySetInnerHTML={{ __html: homeContent.contentHtml }} />
    </article>
  );
}