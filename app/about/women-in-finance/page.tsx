import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/about/women-in-finance'];

export const metadata: Metadata = {
  title: 'Women in Finance — CAFAA',
  description: content.description,
};

export default function AboutWomenInFinance() {
  return <PageTemplate content={content} />;
}
