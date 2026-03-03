import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Schedule of Fees',
  description: 'Current membership fees and schedules.',
};

export default function ScheduleOfFees() {
  const fees = [
    { type: 'Full Member', amount: '$200 pa' },
    { type: 'Associate Member', amount: '$120 pa' },
    { type: 'Affiliate Member', amount: '$80 pa' },
    { type: 'Provisional Member', amount: '$100 pa' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Schedule of Fees</h1>
          <p className="text-lg text-gray-700">Annual membership fees by category.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <div className="space-y-4">
            {fees.map((f) => (
              <div key={f.type} className="border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg">{f.type}</h3>
                <p className="text-gray-700">{f.amount}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Ready to join or renew?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/membership" className="btn-primary w-full sm:w-auto">Apply Now</a>
            <a href="/membership/renewal" className="btn-secondary w-full sm:w-auto">Renew Membership</a>
          </div>
        </Container>
      </section>
    </div>
  );
}
