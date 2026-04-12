import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/about'];

export const metadata: Metadata = {
  title: 'About CAFAA — Commercial & Asset Finance Advisers Association',
  description: content.description,
};

export default function About() {
  return <PageTemplate content={content} />;
}
