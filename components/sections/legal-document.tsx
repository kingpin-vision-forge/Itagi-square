import type { ReactNode } from 'react';
import styles from './legal-document.module.css';

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalDocumentProps {
  title: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalDocument({ title, summary, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>{title}</h1>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.updated}>Last updated {lastUpdated}</p>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.contents} aria-label={`${title} contents`}>
          <p>On this page</p>
          <nav>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className={styles.article}>
          {sections.map((section) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2>{section.title}</h2>
              <div>{section.content}</div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
