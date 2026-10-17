import LegalLayout from '../components/LegalLayout'
import useSeo from '../hooks/useSeo'
import { siteConfig } from '../config/siteConfig'

export default function Terms() {
  useSeo({
    title: 'Terms & Conditions | Ezy Digital',
    description:
      'Terms and conditions for website design, e-commerce development, custom web applications and Meta Ads management provided by Ezy Digital: scope, quotations, payments and support.',
    path: '/terms',
  })

  return (
    <LegalLayout
      title="Terms & Conditions"
      lead="These terms describe how website design, development and digital marketing work is agreed, delivered and supported by Ezy Digital."
      updated="October 2026"
    >
      <h2>1. About these terms</h2>
      <p>
        These terms apply to services provided by {siteConfig.brand.fullName}, owned by{' '}
        {siteConfig.brand.owner}, {siteConfig.contact.address.full}. They cover website design,
        website development, web application development, integrations and maintenance. By accepting
        a written quotation or paying an advance, you agree to these terms. Individual projects may
        also have a separate written scope, which takes priority where it is more specific.
      </p>

      <h2>2. What we provide</h2>
      <p>
        We design and develop websites and web applications and provide Meta Ads management
        services. Our published packages are fixed-scope starting points: a Basic Website, a
        Business Website, a Professional Website, an E-commerce Website, a Custom Website / Web
        Application, Meta Ads campaign setup and monthly social media management.
      </p>
      <p>
        We also provide custom development at a quoted price, which may include backend systems,
        databases, authentication, dashboards and third-party integrations. Additional creative
        services such as poster design, logo design, basic video editing and content writing are
        available as separately priced services.
      </p>

      <h2>3. Quotations and scope</h2>
      <ul>
        <li>
          Prices shown on this website are introductory &quot;starting at&quot; figures in Indian
          rupees. They are indicative and are not verified market averages.
        </li>
        <li>
          The final price is confirmed only in a written quotation based on your agreed scope,
          number of pages, features, integrations and revisions.
        </li>
        <li>
          Work that is not listed in the agreed scope is a change request. It is quoted separately and
          may affect the timeline.
        </li>
        <li>Quotations are valid for 15 days unless stated otherwise.</li>
      </ul>

      <h2>4. Additional costs</h2>
      <p>
        Unless your quotation explicitly says otherwise, the following are charged separately:
        domain registration, web hosting, paid themes or plugins, premium or paid third-party APIs,
        payment gateway setup and transaction charges, SMS or email service providers, SSL
        certificates where a paid certificate is required, video production, and applicable taxes.
      </p>
      <p>
        <strong>Meta Ads:</strong> advertising spend is never included in a service fee. You pay
        Meta directly through your own ad account and payment method. Campaign setup and management
        charges cover the work described in the agreed scope only. Monthly management is billed in
        advance and does not include unlimited creative production, video production, extra posters
        or unrelated projects. No fixed number of leads, sales, calls or conversions is guaranteed.
      </p>

      <h2>5. Payments</h2>
      <ul>
        <li>For most fixed-scope projects, an advance payment is required before work begins.</li>
        <li>
          Remaining amounts are payable at agreed milestones or before final deployment and handover.
        </li>
        <li>
          Monthly maintenance is billed in advance for each month and may be cancelled with notice
          before the next billing cycle.
        </li>
        <li>
          Amounts already paid for completed work are non-refundable. Deployments already completed
          and handed over are considered delivered.
        </li>
      </ul>

      <h2>6. Revisions</h2>
      <p>
        Each package includes a stated number of revision rounds - two rounds for the landing page and
        business website packages, and three rounds for the professional website package. A revision
        round covers reasonable adjustments to the agreed design and content. New pages, new features,
        a change of direction after approval, or repeated redesigns are treated as additional work.
      </p>

      <h2>7. Your responsibilities</h2>
      <ul>
        <li>
          Provide content, images, logos and any required access details in a reasonable time. Delays
          in providing content or feedback will extend the timeline.
        </li>
        <li>
          Confirm that you own or have permission to use all content you supply, and that it does not
          infringe anyone else&apos;s rights.
        </li>
        <li>
          Keep your own accounts (domain, hosting, payment gateway, third-party tools) in your name and
          secure. We can help configure them, but ownership stays with you.
        </li>
        <li>
          Review and approve deliverables promptly, so testing and launch are not delayed.
        </li>
      </ul>

      <h2>8. Timelines</h2>
      <p>
        Any timeline we give is an estimate based on the agreed scope. Actual delivery depends on
        scope size, the complexity of integrations, the speed of content and feedback from your side,
        and third-party approvals such as payment gateway verification. We are not responsible for
        delays caused by factors outside our control, but we will keep you informed of progress.
      </p>

      <h2>9. Ownership and intellectual property</h2>
      <p>
        On full payment, you receive ownership of the final website design, the delivered front-end
        and back-end code written specifically for your project, and your content. We retain the right
        to reuse general know-how, techniques, utility code, open-source packages and frameworks, and
        to display the completed work in our portfolio unless you ask us in writing not to.
      </p>

      <h2>10. Third-party services</h2>
      <p>
        Projects may depend on third-party services such as hosting providers, payment gateways, email
        services and APIs. Those services are governed by their own terms and pricing, they may change
        or be discontinued without notice, and their fees and transaction charges are payable by you.
        We are not responsible for outages, policy changes or pricing changes made by third parties.
      </p>

      <h2>11. Maintenance</h2>
      <p>
        The maintenance plan starting at ₹1,000 per month is available for eligible existing websites
        and covers routine tasks such as bug fixes, updates, backups and security checks within a
        clearly limited monthly support allowance. It does not include unlimited development, unlimited
        revisions, unlimited support or unlimited content changes. New features and large content
        updates are quoted separately.
      </p>

      <h2>12. No performance guarantees</h2>
      <p>
        We build websites using sound technical practices, including mobile-friendly layouts,
        performance-conscious front-end code and on-page SEO foundations. However, we do not guarantee
        search engine rankings, traffic volumes, lead volumes, sales figures or advertising results.
        Search engines and market conditions are outside our control, and any examples of past work do
        not imply a particular result for your project.
      </p>

      <h2>13. Limitation of liability</h2>
      <p>
        To the extent permitted by law, our total liability for any claim relating to a project is
        limited to the amount you have paid us for that project. We are not liable for indirect or
        consequential losses, including lost profits, lost data or business interruption. We recommend
        keeping your own backups of content and databases; we do not provide an archival data service
        unless it is included in a written agreement.
      </p>

      <h2>14. Cancellation</h2>
      <p>
        Either side may stop a project in writing. If you cancel, you are responsible for paying for
        work completed up to the cancellation date, including any completed design or development
        stages. If we cancel without cause, we will refund amounts paid for work not yet completed.
      </p>

      <h2>15. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Disputes are subject to the exclusive
        jurisdiction of the competent courts in Gujarat, India, unless otherwise agreed in writing.
      </p>

      <h2>16. Contact</h2>
      <p>
        For questions about these terms, contact {siteConfig.brand.owner} at{' '}
        {siteConfig.brand.fullName}. Phone:{' '}
        <a href={siteConfig.contact.telHref}>{siteConfig.contact.phoneInternational}</a>. Email:{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. Address:{' '}
        {siteConfig.contact.address.full}.
      </p>

    </LegalLayout>
  )
}
