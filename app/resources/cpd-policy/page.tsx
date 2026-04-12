import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/resources/cpd-policy'];

export const metadata: Metadata = {
  title: 'CPD Policy — CAFAA',
  description: content.description,
};

export default function ResourcesCpdPolicy() {
  return <PageTemplate content={content} />;
}
