import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/membership/schedule-of-fees'];

export const metadata: Metadata = {
  title: 'Schedule of Fees — CAFAA',
  description: content.description,
};

export default function MembershipScheduleOfFees() {
  return <PageTemplate content={content} />;
}
