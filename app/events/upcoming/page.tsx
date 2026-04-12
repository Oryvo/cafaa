import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/events/upcoming'];

export const metadata: Metadata = {
  title: 'Upcoming Events — CAFAA',
  description: content.description,
};

export default function EventsUpcoming() {
  return <PageTemplate content={content} />;
}
