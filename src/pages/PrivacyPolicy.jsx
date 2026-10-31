import LegalLayout from '../components/LegalLayout'
import useSeo from '../hooks/useSeo'
import { siteConfig } from '../config/siteConfig'

export default function PrivacyPolicy() {
  useSeo({
    title: 'Privacy Policy | Ezy Digital',
    description:
      'How Ezy Digital handles the details you submit through the lead form, what the Meta Pixel and Google Analytics measure on this website, and how to request deletion.',
    path: '/privacy-policy',
  })

  return (
    <LegalLayout
      title="Privacy Policy"
      lead="This page explains, in plain language, what information this website collects, why it is collected and how you can have it removed."
      updated="October 2026"
    >
      <h2>1. Who we are</h2>
      <p>
        This website is operated by {siteConfig.brand.fullName}, owned by {siteConfig.brand.owner},
        based at {siteConfig.contact.address.full}. You can reach us on{' '}
        <a href={siteConfig.contact.telHref}>{siteConfig.contact.phoneInternational}</a> or at{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

      <h2>2. What information we collect</h2>
      <p>We collect only what you choose to give us:</p>
      <ul>
        <li>
          <strong>Lead form details</strong> - the full name, mobile number, city and service you
          select in the lead form on this website. Submitting the form sends these details to our
          customer relationship management (CRM) system at{' '}
          <a href="https://crm.ezydigital.in/" target="_blank" rel="noopener noreferrer">
            crm.ezydigital.in
          </a>{' '}
          so our team can call you back about the enquiry.
        </li>
        <li>
          <strong>Contact details you share</strong> - if you call, message us on WhatsApp or email
          us, we receive the number or address you contact us from, and whatever you tell us about
          your requirement, timeline and budget.
        </li>
        <li>
          <strong>Project information</strong> - briefs, content, images or documents you send us if
          a project goes ahead.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> ask for payment card details, identity documents, government ID
        numbers or any other sensitive personal information through this website. Please do not send
        such information by WhatsApp or email.
      </p>

      <h2>3. How we receive your enquiry</h2>
      <p>You start every enquiry yourself, using one of these options:</p>
      <ul>
        <li>
          <strong>Lead form</strong> - the form checks your name, mobile number, city and selected
          service in your browser, then sends them over an encrypted connection to a handler on this
          website. That handler forwards the details to our Perfex CRM and reports back whether the
          CRM accepted the lead. You only see the confirmation page when the CRM confirmed the
          submission. The details are stored as a lead in our CRM.
        </li>
        <li>
          <strong>Call</strong> - the Call Now buttons open your phone&apos;s dialer with our
          number. The call is handled by your telephone service provider.
        </li>
        <li>
          <strong>WhatsApp</strong> - the WhatsApp links open a chat with us with a prefilled
          message that you can edit or delete before sending. Nothing is transmitted until you press
          send, and the conversation is then subject to WhatsApp&apos;s own privacy terms.
        </li>
        <li>
          <strong>Email</strong> - the email link opens your own email application with our address
          filled in. The message is sent from your account, not through this website.
        </li>
      </ul>
      <p>
        We do not add you to a mailing list, and we do not send unsolicited promotional messages.
      </p>

      <h2>4. Why we use your information</h2>
      <ul>
        <li>To reply to your enquiry and discuss your requirements.</li>
        <li>To prepare a scope and quotation for a website, web application or Meta Ads project.</li>
        <li>To deliver, support and maintain a project if you become a client.</li>
        <li>To keep basic records of work agreed and completed.</li>
      </ul>
      <p>
        We do not sell, rent or trade your personal information. We do not add you to marketing lists
        and we do not send unsolicited promotional messages.
      </p>

      <h2>5. How long we keep it</h2>
      <p>
        Lead records are kept in our CRM only as long as needed to respond and, if a project goes
        ahead, for the duration of the working relationship plus any period required for accounting or
        tax purposes. If an enquiry does not lead to a project, we will delete it on request.
      </p>

      <h2>6. Cookies, measurement and advertising</h2>
      <p>
        This website uses two independent measurement tools: the{' '}
        <strong>Meta (Facebook) Pixel</strong> and <strong>Google Analytics 4</strong> (Google tag
        <code> G-NLVGK5BQ3D</code>).
      </p>
      <p>The Meta Pixel records:</p>
      <ul>
        <li>a <strong>PageView</strong> when the site loads and when you move between pages;</li>
        <li>
          a <strong>Lead</strong> when the lead form has been successfully submitted and confirmed by
          our CRM (recorded with the source value <code>website_form</code>, plus the service you
          selected);
        </li>
        <li>
          a <strong>Lead</strong> when you click a Call Now button (recorded with the source value
          <code>call_click</code>). This only records that the call action was started - it does not
          confirm that the call connected.
        </li>
      </ul>
      <p>When you use the site, these tools may:</p>
      <ul>
        <li>
          set cookies in your browser (including the Meta <strong>_fbp</strong> cookie and Google
          Analytics cookies such as <strong>_ga</strong>) and read them on later visits;
        </li>
        <li>
          send the page you viewed, the lead source described above, your approximate location derived
          from your IP address, and standard browser and device details to Meta Platforms and to
          Google.
        </li>
      </ul>
      <p>
        We use this only to understand which pages lead to enquiries and to measure the performance of
        any Facebook, Instagram or Google advertising we may run. It is not used to build a profile of
        you for any other purpose.
      </p>
      <p>
        <strong>What is never sent to Meta or Google:</strong> your name, mobile number, city, or the
        service you select. The form sends those details only to our own lead handler and our CRM -
        never to an advertising platform. No conversion API or hashed customer list is used.
      </p>
      <p>You can limit or avoid this measurement by:</p>
      <ul>
        <li>changing your cookies and tracking settings in your browser;</li>
        <li>
          adjusting your advertising preferences in your Meta / Facebook or Google account, or
          browsing while logged out;
        </li>
        <li>
          using a browser or extension that blocks third-party scripts (the website will still work
          normally, and the lead form will still submit).
        </li>
      </ul>
      <p>
        Separately, our hosting provider may keep basic server logs for security and reliability
        purposes, and the Google Fonts request described below is logged by Google as part of serving
        the font files.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        Some parts of this website use or link to third-party services. Where a service processes the
        data described above, its own privacy policy also applies:
      </p>
      <ul>
        <li>
          <strong>Meta Platforms (Facebook Pixel)</strong> - measures page visits, confirmed form
          leads and Call Now clicks, as described in section 6.
        </li>
        <li>
          <strong>Google Analytics 4</strong> - measures page visits and general traffic statistics,
          as described in section 6.
        </li>
        <li>
          <strong>Perfex CRM</strong> - stores the lead (name, mobile number, city and selected
          service) submitted through the lead form so our team can follow up.
        </li>
        <li>
          <strong>WhatsApp</strong> (Meta Platforms) - used for the WhatsApp links on this website.
          The static floating WhatsApp button has been removed; any WhatsApp link opens a chat only
          when you choose to click it.
        </li>
        <li>
          <strong>Google Fonts</strong> - used to load the Inter typeface. Google may log the request
          as part of serving the font files.
        </li>
        <li>
          <strong>Your telephone service provider</strong> - when you tap a call link, your device
          opens your dialer application.
        </li>
      </ul>

      <h2>8. Your choices and rights</h2>
      <p>
        You can ask us to show you the enquiry information we hold about you, correct it, or delete
        it. Send the request from the same phone number or email address you originally used, and we
        will action it. For WhatsApp messages, you can also delete the conversation from your own
        device at any time.
      </p>

      <h2>9. Data security</h2>
      <p>
        We take reasonable technical and organisational care to protect the information you share,
        including restricting access to project credentials and keeping any API keys or database
        credentials in server-side environment variables rather than in client code. No method of
        transmission or storage is completely secure, so we cannot promise absolute security.
      </p>

      <h2>10. Children</h2>
      <p>
        This website is intended for business use and is not directed at children. We do not knowingly
        collect information from children.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        If how we handle information changes, we will update this page and revise the last updated
        date shown at the top.
      </p>

      <h2>12. Contact</h2>
      <p>
        For any question about this policy, contact {siteConfig.brand.owner} at{' '}
        {siteConfig.brand.fullName}, {siteConfig.contact.address.full}. Phone:{' '}
        <a href={siteConfig.contact.telHref}>{siteConfig.contact.phoneInternational}</a>. Email:{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

    </LegalLayout>
  )
}
