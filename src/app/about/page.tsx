import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '768px', margin: '0 auto' }}>
      <header>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>About</h1>
      </header>
      <main style={{ marginTop: '2rem' }}>
        <p>This is the about page. It is now the landing page and is also available at /about.</p>
      </main>
    </div>
  );
}

