import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/resources/agm'];

export const metadata: Metadata = {
  title: 'AGM — CAFAA',
  description: content.description,
};

export default function ResourcesAgm() {
  return <PageTemplate content={content} />;
}
