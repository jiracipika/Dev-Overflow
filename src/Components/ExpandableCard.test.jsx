import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import ExpandableCard from './ExpandableCard';

function renderCard(props = {}) {
  return renderToStaticMarkup(
    <MemoryRouter>
      <ExpandableCard
        id={7}
        title="A question"
        author="someone"
        asked="5 Minutes Ago"
        tags={['javascript']}
        {...props}
      />
    </MemoryRouter>
  );
}

describe('ExpandableCard stat rendering', () => {
  it('renders zero votes as 0, not the placeholder 25', () => {
    const html = renderCard({ votes: 0, views: 5, comments: [] });
    expect(html).toContain('Votes 0');
    expect(html).not.toContain('Votes 25');
  });

  it('renders zero views as 0, not the placeholder 100', () => {
    const html = renderCard({ votes: 3, views: 0, comments: [] });
    expect(html).toContain('Views 0');
    expect(html).not.toContain('Views 100');
  });

  it('renders zero answers as 0', () => {
    const html = renderCard({ votes: 3, views: 5, comments: [] });
    expect(html).toContain('Answers 0');
  });

  it('treats missing comments as zero answers instead of crashing', () => {
    const html = renderCard({ votes: 3, views: 5 });
    expect(html).toContain('Answers 0');
  });

  it('renders real counts unchanged', () => {
    const html = renderCard({ votes: 12, views: 340, comments: [{ comment: 'x', author: 'y' }] });
    expect(html).toContain('Votes 12');
    expect(html).toContain('Views 340');
    expect(html).toContain('Answers 1');
  });
});
