import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/about/board-of-directors'];

export const metadata: Metadata = {
  title: 'Board of Directors — CAFAA',
  description: content.description,
};

export default function AboutBoardOfDirectors() {
  return <PageTemplate content={content} />;
}
