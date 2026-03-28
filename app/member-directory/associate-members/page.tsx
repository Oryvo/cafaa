import { Metadata } from 'next';
import Container from '../../components/Container';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/member-directory/associate-members'];

export const metadata: Metadata = {
  title: 'Associate Members - CAFAA',
  description: content.description,
};

export default function AssociateMembers() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{content.title}</h1>
          <p className="text-lg text-gray-700">{content.intro}</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[Associate members list placeholder]</p>
        </Container>
      </section>
      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Become an associate member today.</p>
          <a href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</a>
        </Container>
      </section>
    </div>
  );
}
