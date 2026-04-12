import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/about/diversity-equity-inclusion'];

export const metadata: Metadata = {
  title: 'Diversity, Equity & Inclusion — CAFAA',
  description: content.description,
};

export default function AboutDiversityEquityInclusion() {
  return <PageTemplate content={content} />;
}
