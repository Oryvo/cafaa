import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/resources/resource-exchange'];

export const metadata: Metadata = {
  title: 'Resource Exchange — CAFAA',
  description: content.description,
};

export default function ResourcesResourceExchange() {
  return <PageTemplate content={content} />;
}
