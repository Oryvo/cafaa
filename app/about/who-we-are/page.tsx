import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/about/who-we-are'];

export const metadata: Metadata = {
  title: 'Who We Are — CAFAA',
  description: content.description,
};

export default function AboutWhoWeAre() {
  return <PageTemplate content={content} />;
}
