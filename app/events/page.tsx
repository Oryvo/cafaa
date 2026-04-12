import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/events'];

export const metadata: Metadata = {
  title: 'Events — CAFAA',
  description: content.description,
};

export default function Events() {
  return <PageTemplate content={content} />;
}
