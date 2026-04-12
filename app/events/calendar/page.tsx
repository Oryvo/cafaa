import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/events/calendar'];

export const metadata: Metadata = {
  title: 'Events Calendar — CAFAA',
  description: content.description,
};

export default function EventsCalendar() {
  return <PageTemplate content={content} />;
}
