import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/membership/compliance-requirements'];

export const metadata: Metadata = {
  title: 'Compliance Requirements — CAFAA',
  description: content.description,
};

export default function MembershipComplianceRequirements() {
  return <PageTemplate content={content} />;
}
