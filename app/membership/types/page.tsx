import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/membership/types'];

export const metadata: Metadata = {
  title: 'Membership Types — CAFAA',
  description: content.description,
};

export default function MembershipTypes() {
  return <PageTemplate content={content} />;
}
