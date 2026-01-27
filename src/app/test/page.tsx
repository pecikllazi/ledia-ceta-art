import { client } from '@/sanity/lib/client';

export default async function TestPage() {
  let sanityConnected = false;
  let projectId = '';
  let error = '';

  try {
    projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT SET';
    const result = await client.fetch('*[_type == "artwork"][0...1]');
    sanityConnected = true;
  } catch (e: any) {
    error = e.message;
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Diagnostic Page</h1>

      <div style={{ marginBottom: '20px' }}>
        <strong>Sanity Project ID:</strong> {projectId}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <strong>Sanity Connected:</strong>{' '}
        <span style={{ color: sanityConnected ? 'green' : 'red' }}>
          {sanityConnected ? 'YES ✓' : 'NO ✗'}
        </span>
      </div>

      {error && (
        <div style={{ marginBottom: '20px', color: 'red' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <strong>Environment:</strong> {process.env.NODE_ENV}
      </div>

      <hr style={{ margin: '30px 0' }} />

      <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>What to check:</h2>
      <ol style={{ lineHeight: '1.8' }}>
        <li>Sanity Project ID should not be empty or "NOT SET"</li>
        <li>Sanity Connected should be YES ✓</li>
        <li>If NO, check Vercel environment variables</li>
        <li>If connected but homepage is black, add content in Studio</li>
      </ol>

      <hr style={{ margin: '30px 0' }} />

      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        ← Back to Homepage
      </a>
      {' | '}
      <a href="/studio" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to Studio →
      </a>
    </div>
  );
}
