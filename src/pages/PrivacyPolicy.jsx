import LegalLayout from '../components/LegalLayout'
import useSeo from '../hooks/useSeo'
import { siteConfig } from '../config/siteConfig'

export default function PrivacyPolicy() {
  useSeo({
    title: 'Privacy Policy | EzyDigital Web Development',
    description:
      'How EzyDigital Web Development handles the information you share when you call, message on WhatsApp or email us, what the Meta Pixel measures on this website, and how to ask us to delete your details.',
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
      <p>
        This website has no enquiry form and no server-side form handler. Nothing you type is
        collected or stored while you browse. We only hold information that you choose to give us
        directly:
      </p>
      <ul>
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
      <p>
        You contact us yourself, using one of the options on the contact section of this website.
        There is no form to submit and no data is sent to us until you take one of these actions:
      </p>
      <ul>
        <li>
          <strong>Call</strong> - the call button opens your phone&apos;s dialer with our number. The
          call is handled by your telephone service provider.
        </li>
        <li>
          <strong>WhatsApp</strong> - the WhatsApp buttons open a chat with us with a prefilled
          message that you can edit or delete before sending. Nothing is transmitted until you press
          send, and the conversation is then subject to WhatsApp&apos;s own privacy terms.
        </li>
        <li>
          <strong>Email</strong> - the email link opens your own email application with our address
          filled in. The message is sent from your account, not through this website.
        </li>
      </ul>
      <p>
        Your enquiry therefore exists only in your own phone, email account or WhatsApp account and
        in ours - we do not copy it into a database or mailing list.
      </p>

      <h2>4. Why we use your information</h2>
      <ul>
        <li>To reply to your enquiry and discuss your requirements.</li>
        <li>To prepare a scope and quotation for a website or web application project.</li>
        <li>To deliver, support and maintain a project if you become a client.</li>
        <li>To keep basic records of work agreed and completed.</li>
      </ul>
      <p>
        We do not sell, rent or trade your personal information. We do not add you to marketing lists
        and we do not send unsolicited promotional messages.
      </p>

      <h2>5. How long we keep it</h2>
      <p>
        Enquiry details are kept only as long as needed to respond and, if a project goes ahead, for
        the duration of the working relationship plus any period required for accounting or tax
        purposes. If an enquiry does not lead to a project, we will delete it on request.
      </p>

      <h2>6. Cookies, measurement and advertising</h2>
      <p>
        This website uses the <strong>Meta (Facebook) Pixel</strong> to measure how many people visit
        the site and how many of them try to get in touch. It is the only tracking script on this
        website.
      </p>
      <p>When you use the site, the pixel may:</p>
      <ul>
        <li>
          set cookies in your browser (including the <strong>_fbp</strong> cookie) and read that
          cookie on later visits;
        </li>
        <li>
          send Meta Platforms information such as the page you viewed, the fact that you clicked a
          call or WhatsApp button, your IP address, and standard browser and device details.
        </li>
      </ul>
      <p>
        We use this only to understand which pages lead to enquiries and to measure the performance of
        any Facebook or Instagram advertising we may run. It is not used to build a profile of you for
        any other purpose.
      </p>
      <p>
        <strong>What is never sent to Meta:</strong> your name, phone number, email address, or
        anything you discuss with us. This website has no enquiry form and collects no such data to
        share.
      </p>
      <p>You can limit or avoid this measurement by:</p>
      <ul>
        <li>changing your cookies and tracking settings in your browser;</li>
        <li>
          adjusting your advertising preferences in your Meta / Facebook account, or browsing while
          logged out of Meta;
        </li>
        <li>
          using a browser or extension that blocks third-party scripts (the website will still work
          normally).
        </li>
      </ul>
      <p>
        Separately, our hosting provider may keep basic server logs for security and reliability
        purposes, and the Google Fonts request described below is logged by Google as part of serving
        the font files.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        Some parts of this website link to third-party services. Once you leave this website, the
        privacy policy of that service applies:
      </p>
      <ul>
        <li>
          <strong>Meta Platforms (Facebook Pixel)</strong> - measures page visits and clicks on our
          call, WhatsApp and email links, as described in section 6.
        </li>
        <li>
          <strong>WhatsApp</strong> (Meta Platforms) - used for prefilled enquiry messages and the
          floating chat button.
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
