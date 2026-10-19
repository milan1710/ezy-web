import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import ceramicSite from '../config/ceramicSite'

export default function PrivacyPolicy() {
  useSeo({
    title: 'Privacy Policy | Ezy Digital Ceramic Growth',
    description:
      'How Ezy Digital handles information submitted through the ceramic growth website, including the CRM inquiry form, Meta Pixel measurement and third-party services.',
    path: '/privacy-policy',
  })

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How this ceramic growth website handles information you choose to share, how the inquiry form is submitted to our CRM and how measurement works."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section">
        <div className="container">
          <div className="legal-page">
            <div className="legal-page__meta">
              <span>Last updated: 19 October 2026</span>
              <span>Applies to: ezydigital.in/ceramic</span>
            </div>

            <div className="legal-content">
              <p>
                This Privacy Policy explains how <strong>Ezy Digital</strong> (&quot;we&quot;,
                &quot;us&quot;) handles information in connection with the ceramic business growth
                section of our website at <strong>ezydigital.in/ceramic</strong>. It is a general
                website policy, not legal advice.
              </p>

              <h2>1. Who we are</h2>
              <p>
                Ezy Digital is a digital services business based in Upleta, Gujarat, India. You can
                contact us at <a href={ceramicSite.contact.telHref}>{ceramicSite.contact.phoneInternational}</a>{' '}
                or through our <Link to="/contact">contact page</Link>.
              </p>

              <h2>2. Information you choose to provide</h2>
              <p>The inquiry form asks for information needed to understand and respond to your requirement:</p>
              <ul>
                <li>Your name and company name</li>
                <li>Phone / WhatsApp number and optional email address</li>
                <li>Optional website URL</li>
                <li>Product category, primary business goal and target geography</li>
                <li>Optional monthly advertising budget range</li>
                <li>A brief description of your requirement</li>
                <li>Your request to be contacted about the inquiry</li>
              </ul>
              <p>
                Please do not include sensitive personal information, financial account details or
                confidential product formulations in the form or in a WhatsApp message.
              </p>

              <h2>3. How the inquiry form works</h2>
              <p>
                When you submit a form on this website, the details you enter are sent directly to our
                <strong> Perfex CRM</strong> lead management system so our team can review and respond
                to your requirement. The information stored in the CRM includes your name, company,
                phone number, optional email and website, and the requirement details you provide.
              </p>
              <p>
                The form does not process payments and does not ask for passwords, financial account
                details or identity documents. If you prefer not to use the form, you can call or email
                us directly.
              </p>
              <p>
                If you contact us through WhatsApp, the conversation is delivered through WhatsApp and is
                subject to WhatsApp&apos;s own terms and privacy practices, which we do not control.
              </p>

              <h2>4. Information collected automatically</h2>
              <p>
                Like most websites, our hosting provider may process limited technical information such
                as your IP address, browser type, device information, requested pages and timestamps in
                server logs for security, reliability and diagnostic purposes.
              </p>
              <p>
                This website uses the <strong>Meta (Facebook) Pixel</strong> to measure page views and
                to count when a visitor clicks a phone number or successfully submits a form. The pixel
                may set cookies (including <code>_fbp</code>) and sends Meta standard device and usage
                information. It does <strong>not</strong> receive the name, phone number, email address
                or description you enter in a form.
              </p>

              <h2>5. Cookies and external resources</h2>
              <p>
                We use the Meta Pixel for measurement as described above. The site loads fonts from
                Google Fonts, which means your browser makes a request to Google&apos;s servers and
                Google&apos;s own privacy terms may apply. Images are served from this website&apos;s
                own domain.
              </p>
              <p>
                Links to WhatsApp, telephone numbers and external websites take you to third-party
                services. Their privacy practices are separate from ours.
              </p>

              <h2>6. How we use information</h2>
              <ul>
                <li>To respond to your inquiry and understand your business requirement</li>
                <li>To prepare a proposal, scope or starting price where relevant</li>
                <li>To communicate about a project, campaign or audit you request</li>
                <li>To improve our website, service descriptions and inquiry process</li>
                <li>To comply with applicable legal or accounting requirements</li>
              </ul>
              <p>
                We do not sell your contact details. We do not claim to maintain an international buyer
                database, and we do not share your inquiry with unrelated third parties for their own
                marketing.
              </p>

              <h2>7. Sharing with service providers</h2>
              <p>
                Limited information may be processed by service providers who help us operate our
                business, such as hosting, email, communication tools and, where a project requires it,
                advertising or analytics platforms. These providers process information under their own
                terms and, where applicable, our instructions.
              </p>
              <p>
                We may disclose information if required by law, to protect legal rights, or in connection
                with a business transfer. We will not disclose more than is reasonably necessary.
              </p>

              <h2>8. Retention</h2>
              <p>
                Form submissions are stored as leads in our CRM and are retained for as long as needed
                to respond to your inquiry, manage a project, maintain business records or meet legal
                obligations. You can ask us to correct or delete your lead record, subject to any
                records we are legally required to keep.
              </p>

              <h2>9. Your choices and requests</h2>
              <p>
                You may contact us to ask about the information we hold about you, request correction,
                or ask us to delete information that we are not required to retain. You may also
                withdraw consent for future marketing communication. These requests are subject to
                identity verification and applicable legal requirements.
              </p>

              <h2>10. Security</h2>
              <p>
                We take reasonable steps to protect information under our control. No method of
                transmission or storage is completely secure. Please avoid sending confidential or
                highly sensitive information through a website form, WhatsApp or email.
              </p>

              <h2>11. Children</h2>
              <p>
                This website is intended for businesses and professional users. It is not directed at
                children, and we do not knowingly collect information from children.
              </p>

              <h2>12. Changes to this policy</h2>
              <p>
                We may update this policy when our website, tools or legal obligations change. The
                &quot;last updated&quot; date at the top of this page will be revised. Continued use of
                the website after an update means the revised policy applies.
              </p>

              <h2>13. Contact</h2>
              <p>
                For privacy questions, contact Ezy Digital at{' '}
                <a href={ceramicSite.contact.telHref}>{ceramicSite.contact.phoneInternational}</a>. You
                can also use our <Link to="/contact">contact page</Link>.
              </p>

              <div className="notice mt-32">
                <p>
                  This policy describes the current implementation of this website, including the CRM
                lead form and the Meta Pixel. If additional tools are added later, this policy will be
                updated before those tools go live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
