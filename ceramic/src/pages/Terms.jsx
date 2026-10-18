import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import ceramicSite from '../config/ceramicSite'

export default function Terms() {
  useSeo({
    title: 'Terms & Conditions | Ezy Digital Ceramic Growth',
    description:
      'Terms for using the Ezy Digital ceramic growth website and for ceramic website, catalogue, marketing and inquiry-system engagements. Scope and pricing are confirmed in writing.',
    path: '/terms',
  })

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="The basis for using this website and for discussing ceramic digital growth work with Ezy Digital."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="section">
        <div className="container">
          <div className="legal-page">
            <div className="legal-page__meta">
              <span>Last updated: 18 October 2026</span>
              <span>Applies to: ezydigital.in/ceramic</span>
            </div>

            <div className="legal-content">
              <p>
                These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the ceramic growth
                section of the Ezy Digital website at <strong>ezydigital.in/ceramic</strong> and the
                general basis on which we discuss services. They are not a substitute for a signed
                project proposal or a formal service agreement.
              </p>

              <h2>1. Acceptance of these terms</h2>
              <p>
                By using this website, you agree to these Terms and our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>. If you do not agree, please do not use
                the website.
              </p>

              <h2>2. Services and proposals</h2>
              <p>
                Ezy Digital provides digital services that may include ceramic website development,
                product catalogue systems, dealer and distributor inquiry paths, export-focused
                websites, landing pages, search and social advertising, SEO, tracking and reporting.
              </p>
              <p>
                Website content is informational. A service engagement begins only when both parties
                agree a written proposal or service agreement that defines the scope, deliverables,
                timeline, fees, exclusions, revision limits and payment schedule.
              </p>
              <p>
                If there is any conflict between these Terms and a signed proposal, the signed proposal
                controls for that engagement.
              </p>

              <h2>3. No guaranteed business outcomes</h2>
              <p>
                Digital marketing and website work can support visibility, product presentation and
                inquiry generation. We do not guarantee:
              </p>
              <ul>
                <li>A specific number of genuine buyer inquiries, dealers or distributors</li>
                <li>Any export orders, buyer meetings or trade relationships</li>
                <li>Google rankings, traffic volumes or a fixed cost per lead</li>
                <li>A specific revenue, conversion rate or return on advertising spend</li>
                <li>Access to a verified international buyer database</li>
              </ul>
              <p>
                Outcomes depend on product competitiveness, pricing, target market, budget, competition,
                economic conditions, response time and sales follow-up. Any examples or illustrations on
                this website are for explanation, not performance promises.
              </p>

              <h2>4. Client responsibilities</h2>
              <p>For a project to proceed responsibly, the client is responsible for:</p>
              <ul>
                <li>Providing accurate product, company and commercial information</li>
                <li>Approving product names, specifications, images and claims</li>
                <li>Confirming the authority to use supplied images, logos and documents</li>
                <li>Responding to inquiries and conducting sales conversations</li>
                <li>Providing timely feedback, access and approvals</li>
                <li>Complying with applicable advertising, consumer and export regulations</li>
              </ul>
              <p>
                Delays in content, approval or access can affect timelines. We are not responsible for
                outcomes caused by inaccurate information or delayed client input.
              </p>

              <h2>5. Advertising spend and third-party platforms</h2>
              <p>
                Advertising media spend is separate from Ezy Digital&apos;s setup and management fees and
                is paid to the relevant platform (for example Google or Meta). Platform rules, account
                reviews, policy changes, outages and pricing are outside our control.
              </p>
              <p>
                We do not control how third-party platforms collect, process or display data. Clients
                must maintain appropriate account ownership, access and consent notices.
              </p>

              <h2>6. Fees, taxes and payment</h2>
              <p>
                Prices displayed on this website are starting prices in Indian Rupees and are not final
                quotations. Applicable taxes are additional unless stated otherwise. A project or
                retainer begins after the written proposal is accepted and any agreed advance payment is
                received.
              </p>
              <p>
                Payment schedules, suspension for non-payment and refund positions are set out in the
                applicable proposal or service agreement. This website does not create a right to a
                refund outside those terms.
              </p>

              <h2>7. Scope changes and revisions</h2>
              <p>
                Each engagement includes the deliverables and revision rounds stated in the proposal.
                Requests outside that scope may require a revised quotation, a change in timeline or an
                additional fee. We will confirm any change in writing before starting additional work.
              </p>

              <h2>8. Intellectual property</h2>
              <p>
                Client-supplied logos, product images, specifications and other brand materials remain
                the property of the client or its licensors. The client confirms it has permission to
                use them.
              </p>
              <p>
                Unless a proposal says otherwise, website design, code and original content created by
                Ezy Digital are licensed to the client for the agreed website after full payment. We may
                retain the right to display non-confidential work in a portfolio unless the client
                requests otherwise in writing. Third-party assets, fonts, plugins and stock images remain
                subject to their own licences.
              </p>

              <h2>9. Demo and illustrative content</h2>
              <p>
                The ceramic demo page, product cards, catalogue preview, dashboard layout and business
                examples on this website are illustrative. They do not represent a real client, real
                products, real prices, verified specifications, real inquiries or actual performance. No
                brand, certification or trade relationship should be inferred from them.
              </p>

              <h2>10. Confidentiality</h2>
              <p>
                Each party should protect confidential information received from the other and use it
                only for the engagement. This does not apply to information that is public, independently
                developed, or required to be disclosed by law.
              </p>

              <h2>11. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use this website for unlawful, deceptive or harmful activity</li>
                <li>Attempt to gain unauthorised access to the website or its systems</li>
                <li>Submit false, misleading or third-party information without authorisation</li>
                <li>Interfere with the availability or security of the website</li>
                <li>Copy substantial website content for a competing service without permission</li>
              </ul>

              <h2>12. Disclaimers</h2>
              <p>
                This website and its content are provided on an &quot;as available&quot; basis. While we
                aim to keep information accurate, service descriptions, prices, availability and
                examples may change. We do not warrant that the website will be uninterrupted, error-free
                or free of harmful components.
              </p>

              <h2>13. Limitation of liability</h2>
              <p>
                To the extent permitted by applicable law, Ezy Digital will not be liable for indirect,
                incidental, special or consequential losses, loss of profit, loss of business opportunity
                or loss of data arising from use of this website or reliance on its content. Liability
                for a paid engagement is governed by the applicable written agreement.
              </p>

              <h2>14. External links</h2>
              <p>
                This website may link to WhatsApp, Google Fonts, Pexels or other third-party services.
                We do not control those services and are not responsible for their content, availability
                or privacy practices.
              </p>

              <h2>15. Governing law</h2>
              <p>
                These Terms are governed by the laws of India. Subject to any mandatory legal
                requirements, disputes relating to this website or an engagement will be subject to the
                jurisdiction of the courts of Gujarat, India.
              </p>

              <h2>16. Contact</h2>
              <p>
                Questions about these Terms can be sent to{' '}
                <a href={`mailto:${ceramicSite.contact.email}`}>{ceramicSite.contact.email}</a> or{' '}
                <a href={ceramicSite.contact.telHref}>{ceramicSite.contact.phoneInternational}</a>. You
                can also use our <Link to="/contact">contact page</Link>.
              </p>

              <div className="notice mt-32">
                <p>
                  This page is a general website policy. It does not replace professional legal advice or
                  a signed service agreement for a specific engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
