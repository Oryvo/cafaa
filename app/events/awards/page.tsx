import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/events/awards'];

export const metadata: Metadata = {
  title: 'Excellence Awards — CAFAA',
  description: content.description,
};

export default function EventsAwards() {
  return <PageTemplate content={content} />;
}
