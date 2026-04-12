import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/about/strategy-2024-2027'];

export const metadata: Metadata = {
  title: 'Strategy 2024–2027 — CAFAA',
  description: content.description,
};

export default function AboutStrategy20242027() {
  return <PageTemplate content={content} />;
}
