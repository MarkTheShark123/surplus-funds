import { Link } from '@tanstack/react-router'
import {
  SiteLayout,
  EligibilityLink,
  PageIntro,
  ClosingCTA,
} from './SiteLayout'
import { EligibilityForm } from './EligibilityForm'
import { FAQAccordion } from './FAQAccordion'
import { Icon, type IconName } from './Icon'

const steps = [
  {
    number: '01',
    icon: 'chat' as IconName,
    title: 'Start a conversation',
    text: 'Share a few details about yourself and your former New Jersey property. You don’t need to have all the paperwork ready.',
  },
  {
    number: '02',
    icon: 'file' as IconName,
    title: 'Understand the possibilities',
    text: 'A review of the sale and available records can help identify whether surplus funds may exist and what questions need answering.',
  },
  {
    number: '03',
    icon: 'home' as IconName,
    title: 'Decide your next step',
    text: 'Understand the process, any proposed services, and all fees in writing before deciding how you want to move forward.',
  },
]

export function HomePage() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              NEW JERSEY HOMEOWNER ASSISTANCE
            </div>
            <h1>
              Your foreclosed home may have left <em>money behind.</em>
            </h1>
            <p className="hero-description">
              If your New Jersey property sold at foreclosure, there may be surplus funds available to claim. We help you understand the process and your options.
            </p>
            <p className="hero-support">
              A personal, straightforward approach from Mark, founder of Surplus Recovery Partners.
            </p>
            <div className="hero-actions">
              <EligibilityLink />
              <Link to="/how-it-works" className="text-link">
                See how it works <Icon name="arrow" size={17} />
              </Link>
            </div>
            <div className="hero-reassurance">
              <Icon name="leaf" size={18} />
              <span>A little clarity. A thoughtful next step.</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="/.netlify/images?url=/img/new-jersey-home.png&w=1040&fm=webp&q=85"
                srcSet="/.netlify/images?url=/img/new-jersey-home.png&w=520&fm=webp&q=85 520w, /.netlify/images?url=/img/new-jersey-home.png&w=1040&fm=webp&q=85 1040w"
                sizes="(max-width: 760px) 92vw, 44vw"
                alt="A welcoming New Jersey-style home with a shaded front porch and green garden; illustrative image"
                width="832"
                height="1040"
                fetchPriority="high"
              />
              <div className="photo-label">
                <span />A PATH TOWARD WHAT’S NEXT
              </div>
            </div>
            <div className="hero-note">
              <span className="note-icon">
                <Icon name="home" size={24} />
              </span>
              <div>
                <strong>There may be more to your story.</strong>
                <p>Let’s help you understand your options.</p>
              </div>
            </div>
            <span className="image-footnote">Illustrative image</span>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Our approach">
        <div className="container trust-grid">
          <div>
            <Icon name="pin" />
            <span>Focused on New Jersey</span>
          </div>
          <div>
            <Icon name="file" />
            <span>Clear, straightforward guidance</span>
          </div>
          <div>
            <Icon name="shield" />
            <span>No pressure to move forward</span>
          </div>
        </div>
      </section>
      <section className="section founder-feature" aria-labelledby="meet-founder">
        <div className="container founder-grid">
          <img className="founder-photo" src="/mark-founder.png" alt="Mark, founder of Surplus Recovery Partners" loading="lazy" />
          <div>
            <div className="eyebrow">A REAL PERSON BEHIND THE WORK</div>
            <h2 id="meet-founder">Hi, I’m Mark.</h2>
            <p><strong>Founder, Surplus Recovery Partners</strong></p>
            <p>I started this company because people deserve a fair opportunity to recover money that belongs to them.</p>
            <p>After foreclosure, many people don't know surplus funds may exist—or how to claim them. My goal is to make the process clear, treat people fairly, and keep fees reasonable.</p>
            <p><strong>Have questions about a letter or call from me?</strong> You can speak with me directly.</p>
            <a className="button button-green" href="tel:+12019379270">Call Mark: (201) 937-9270</a>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="our-commitment">
        <div className="container">
          <div className="eyebrow">WHAT YOU CAN EXPECT</div>
          <h2 id="our-commitment">Straight answers and fair treatment.</h2>
          <p><strong>Talk directly with Mark.</strong> Ask questions and get a clear explanation of your potential claim.</p>
          <p><strong>Understand the fees.</strong> We'll explain the proposed costs and agreement before you decide whether to move forward.</p>
          <p><strong>Make your own decision.</strong> There's no pressure to sign. You can pursue a claim yourself or work with an attorney of your choosing.</p>
          <div className="sample-stories">
            <h3>Situations we can help you understand</h3>
            <p className="sample-disclaimer">Fictional examples of common questions — not testimonials or actual client experiences.</p>
            <div className="sample-stories-grid">
              <article className="sample-story"><h4>Lisa · Former homeowner</h4><p>“I was skeptical when I first heard about surplus funds. I wanted someone to explain where the money came from, how the process worked, and what it would cost.”</p></article>
              <article className="sample-story"><h4>Denise · Heir</h4><p>“After my mother passed, I had no idea there might still be money connected to her former home. I needed to understand what documents an heir would need to make a claim.”</p></article>
              <article className="sample-story"><h4>James · Former homeowner</h4><p>“At first I thought an unexpected call about foreclosure money sounded too good to be true. Before moving forward, I wanted to verify the court records, understand the fees, and know exactly who would handle my case.”</p></article>
            </div>
          </div>
          <Link to="/contact" className="text-link">Ask Mark a question <Icon name="arrow" size={17} /></Link>
        </div>
      </section>
      <section className="section fees-feature">
        <div className="container">
          <div className="eyebrow">TRANSPARENT PRICING</div>
          <h2>Know the fee before you decide.</h2>
          <p>Our proposed recovery fee generally ranges from <strong>7% to 20%</strong> of recovered funds, depending on the claim. Some recovery services advertise fees as high as 35%; we believe people should keep more of their money. The exact fee, any attorney involvement, and all terms will be explained in writing before you agree to proceed. Fee arrangements are subject to applicable law and professional review.</p>
          <p>You can also explore claiming funds independently or consult an attorney of your choosing. Recovery is not guaranteed.</p>
          <Link to="/contact" className="text-link">Ask Mark a question <Icon name="arrow" size={17}/></Link>
        </div>
      </section>
      <section className="section understanding">
        <div className="container understanding-grid">
          <div>
            <div className="eyebrow">UNDERSTANDING SURPLUS FUNDS</div>
            <h2>
              Something may remain.
              <br />
              <em>It’s worth understanding.</em>
            </h2>
            <p>
              When a foreclosed property sells for more than the debt, approved
              costs, and other claims owed, the remaining money is called{' '}
              <strong>surplus funds</strong>.
            </p>
            <p>
              Former homeowners may have a right to claim these funds. Every
              situation is different, and a careful review is the place to
              start.
            </p>
            <Link to="/faq" className="text-link">
              Get answers to your questions <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="surplus-illustration">
            <div className="illustration-heading">
              <Icon name="home" size={21} />
              <span>WHERE SURPLUS FUNDS COME FROM</span>
            </div>
            <div className="proceeds-row">
              <span>Foreclosure sale proceeds</span>
              <Icon name="plus" size={17} />
            </div>
            <div className="deductions-row">
              <span>
                Mortgage, other valid claims
                <br />& approved costs
              </span>
              <Icon name="minus" size={17} />
            </div>
            <div className="surplus-total">
              <div>
                <span>WHAT MAY BE LEFT</span>
                <strong>Potential surplus funds</strong>
              </div>
              <span className="surplus-check">
                <Icon name="check" size={22} />
              </span>
            </div>
            <p>
              For illustration only. The court determines distribution based on
              the specific case and valid claims.
            </p>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="sample-distribution">
        <div className="container">
          <div className="eyebrow">HOW SURPLUS FUNDS CAN WORK</div>
          <h2 id="sample-distribution">An example with two junior liens.</h2>
          <p>Imagine a New Jersey home sells at foreclosure for $425,000. The following simplified figures show how competing claims can reduce the amount ultimately available to the former owner.</p>
          <div className="surplus-example">
            <div><span>Sheriff’s sale proceeds</span><strong>$425,000</strong></div>
            <div><span>Foreclosed first mortgage and approved sale costs</span><strong>− $275,000</strong></div>
            <div><span>Surplus before junior claims</span><strong>$150,000</strong></div>
            <div><span>Junior lienholder 1 — second mortgage (assumed valid claim)</span><strong>− $45,000</strong></div>
            <div><span>Junior lienholder 2 — judgment lien (assumed valid claim)</span><strong>− $20,000</strong></div>
            <div className="surplus-example-total"><span>Potential amount remaining for the owner</span><strong>$85,000</strong></div>
          </div>
          <p className="sample-disclaimer">Hypothetical example, not a real court record or a promise of recovery. The actual distribution depends on lien priority, court orders, valid claims, costs, and other circumstances. Junior lienholders do not automatically receive the amounts shown.</p>
        </div>
      </section>
      <section className="process-section section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">A CLEARER PATH FORWARD</div>
              <h2>
                One step at a time.
                <br />
                <em>With you in mind.</em>
              </h2>
            </div>
            <Link to="/how-it-works" className="text-link">
              Explore the process <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step" key={step.number}>
                <div className="step-top">
                  <span className="step-number">{step.number}</span>
                  <Icon name={step.icon} size={27} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="eligibility-section section" id="eligibility">
        <div className="container eligibility-grid">
          <div className="eligibility-copy">
            <div className="eyebrow light-eyebrow">YOUR NEXT CHAPTER</div>
            <h2>
              Let’s see where
              <br />
              you stand.
            </h2>
            <p>
              If your former New Jersey property went through foreclosure, a few
              details are a simple place to begin.
            </p>
            <ul className="check-list">
              {[
                'Understand what surplus funds are',
                'Explore what may apply to your situation',
                'Make an informed decision about next steps',
              ].map((text) => (
                <li key={text}>
                  <Icon name="check" size={17} />
                  {text}
                </li>
              ))}
            </ul>
            <div className="eligibility-disclaimer">
              <Icon name="info" size={20} />
              <p>
                Send an inquiry using the form. It
                does not search records, determine eligibility, or send an
                inquiry.
              </p>
            </div>
          </div>
          <div className="form-card">
            <h3>Check your eligibility</h3>
            <p className="form-card-intro">
              A starting point for understanding your options.
            </p>
            <EligibilityForm compact />
          </div>
        </div>
      </section>
      <section className="section home-faq">
        <div className="container home-faq-grid">
          <div>
            <div className="eyebrow">A LITTLE MORE CLARITY</div>
            <h2>
              Questions are
              <br />
              <em>a good place to start.</em>
            </h2>
            <p>
              It’s natural to have questions. Here are a few answers to help you
              get oriented.
            </p>
            <Link to="/faq" className="text-link">
              Visit our FAQ <Icon name="arrow" size={17} />
            </Link>
          </div>
          <FAQAccordion preview />
        </div>
      </section>
      <ClosingCTA />
    </SiteLayout>
  )
}

export function HowItWorksPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="HOW IT WORKS"
        title={
          <>
            A clearer process.
            <br />
            <em>A more informed you.</em>
          </>
        }
      >
        Understanding what happens next can make a difficult chapter feel more
        manageable. Here’s how a potential surplus recovery begins.
      </PageIntro>
      <section className="section">
        <div className="container process-detail-grid">
          <div className="detailed-steps">
            {steps.map((step, index) => (
              <article className="detailed-step" key={step.number}>
                <span className="detail-number">{step.number}</span>
                <div>
                  <div className="eyebrow">
                    {['THE CONVERSATION', 'THE REVIEW', 'YOUR DECISION'][index]}
                  </div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                  <ul className="detail-list">
                    {[
                      [
                        'Gather the former property address and any sale information you already have.',
                        'Let a prospective service know whether you are the former owner, an heir, or a representative.',
                        'You can contact us to ask about a potential claim.',
                      ],
                      [
                        'Confirm whether sale proceeds remain after debts, valid claims, and approved costs.',
                        'Review ownership, liens, court records, and the authority of anyone making a claim.',
                        'Identify missing documents and procedural requirements for the specific case.',
                      ],
                      [
                        'Ask for verified company information and any attorney’s credentials.',
                        'Review the full written scope, fees, expenses, and terms before agreeing to a service.',
                        'Consider pursuing a claim yourself or consulting an independent New Jersey attorney.',
                      ],
                    ][index].map((text) => (
                      <li key={text}>
                        <Icon name="check" size={16} />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <aside className="helpful-aside">
            <span className="aside-icon">
              <Icon name="file" size={27} />
            </span>
            <h3>A few things to have handy</h3>
            <p>
              You don’t need every document to begin learning about the process.
            </p>
            <ul>
              <li>Former property address</li>
              <li>Approximate foreclosure sale date</li>
              <li>Court case number, if available</li>
              <li>Your connection to the property</li>
            </ul>
            <div className="aside-rule" />
            <p className="small-text">
              Don’t send sensitive documents, bank information, or Social
              Security numbers through this prototype.
            </p>
            <EligibilityLink />
          </aside>
        </div>
      </section>
      <section className="section sage-section">
        <div className="container narrow-copy">
          <div className="eyebrow">WHAT TO EXPECT</div>
          <h2>Clarity before commitment.</h2>
          <p>
            Any claim is subject to the court’s requirements, other valid
            claims, and the facts of the case. Recovery amounts and timelines
            cannot be promised. An inquiry does not create an agreement or an
            attorney-client relationship.
          </p>
          <p>
            Service details, attorney involvement, and fee terms are pending
            verification. Before launch, these must be confirmed and made
            available for review.
          </p>
          <Link to="/faq" className="text-link">
            Read more about fees and representation{' '}
            <Icon name="arrow" size={17} />
          </Link>
        </div>
      </section>
      <ClosingCTA />
    </SiteLayout>
  )
}

export function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="ABOUT US"
        title={
          <>
            A thoughtful approach
            <br />
            to <em>what comes next.</em>
          </>
        }
      >
        A foreclosure is more than a financial event. It’s a personal
        experience. Finding answers about what may remain should feel clear,
        respectful, and approachable.
      </PageIntro>
      <section className="section">
        <div className="container about-grid">
          <div className="about-photo">
            <img
              src="/.netlify/images?url=/img/new-jersey-home.png&w=840&fm=webp&q=85"
              alt="Sunlit front garden and porch of an illustrative New Jersey-style home"
              width="672"
              height="840"
              loading="lazy"
            />
            <span>Rooted in understanding. Focused on what’s next.</span>
          </div>
          <div className="about-copy">
            <div className="eyebrow">THE PURPOSE BEHIND THE WORK</div>
            <h2>
              People first.
              <br />
              <em>Clear information, always.</em>
            </h2>
            <p>
              Surplus Recovery Partners helps former New Jersey homeowners understand potential surplus funds and their recovery options.
            </p>
            <p>
              My approach is simple: be straightforward, explain the options clearly, and treat people’s money with respect. I believe recovery fees should be fair and transparent, especially after a difficult experience like foreclosure.
            </p>
            <div className="about-value">
              <Icon name="chat" />
              <div>
                <h3>Respect for your experience</h3>
                <p>A difficult chapter deserves a considerate conversation.</p>
              </div>
            </div>
            <div className="about-value">
              <Icon name="file" />
              <div>
                <h3>Information you can understand</h3>
                <p>
                  Plain language about the process, possible outcomes, and
                  questions to ask.
                </p>
              </div>
            </div>
            <div className="about-value">
              <Icon name="shield" />
              <div>
                <h3>Your decision, at your pace</h3>
                <p>Space to review your options and seek independent advice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section sage-section">
        <div className="container verification-grid">
          <div>
            <div className="eyebrow">TRANSPARENCY MATTERS</div>
            <h2>
              Real details.
              <br />
              <em>Verified before launch.</em>
            </h2>
            <p>
              Trust starts with knowing who you’re working with. These business
              and professional details are placeholders and must be verified
              before this website accepts inquiries.
            </p>
          </div>
          <dl className="verification-list">
            <div>
              <dt>Legal company name & business registration</dt>
              <dd>To be confirmed before launch</dd>
            </div>
            <div>
              <dt>Contact information</dt>
              <dd>To be confirmed before launch</dd>
            </div>
            <div>
              <dt>Team biographies & professional experience</dt>
              <dd>To be confirmed before launch</dd>
            </div>
            <div>
              <dt>Attorney involvement & credentials</dt>
              <dd>
                Pending verification — no attorney affiliation represented
              </dd>
            </div>
            <div>
              <dt>Service agreement, fees & expenses</dt>
              <dd>Pending verification — no fee terms offered</dd>
            </div>
          </dl>
        </div>
      </section>
      <ClosingCTA />
    </SiteLayout>
  )
}

export function FAQPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title={
          <>
            Good questions.
            <br />
            <em>Straightforward answers.</em>
          </>
        }
      >
        Learn the basics of New Jersey foreclosure surplus funds, what the
        recovery process can involve, and what to ask before choosing a service.
      </PageIntro>
      <section className="section faq-page-section">
        <div className="container">
          <FAQAccordion />
          <div className="faq-help">
            <Icon name="chat" size={30} />
            <div>
              <h3>Your situation may have its own questions.</h3>
              <p>
                Send us an inquiry, or contact the court or an
                independent attorney for case-specific guidance.
              </p>
            </div>
            <Link to="/contact" className="text-link">
              Get in touch <Icon name="arrow" size={18} />
            </Link>
          </div>
          <p className="faq-legal">
            These answers provide general information, not legal advice. Court
            procedures and applicable requirements should be confirmed for your
            specific case.
          </p>
        </div>
      </section>
      <ClosingCTA />
    </SiteLayout>
  )
}

export function ContactPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="LET’S START A CONVERSATION"
        title={
          <>
            A first step.
            <br />
            <em>A little more clarity.</em>
          </>
        }
      >
        If your former property went through foreclosure in New Jersey, learning
        about surplus funds is a place to start.
      </PageIntro>
      <section className="section contact-section" id="eligibility">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">CHECK YOUR ELIGIBILITY</div>
            <h2>
              You don’t have to
              <br />
              figure it all out today.
            </h2>
            <p>
              Send us a few details to request a conversation.
              You don’t need a case number or court documents to try it.
            </p>
            <div className="contact-detail">
              <span>
                <Icon name="pin" />
              </span>
              <div>
                <h3>New Jersey focused</h3>
                <p>
                  For former New Jersey homeowners, heirs, and authorized
                  representatives.
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Icon name="phone" />
              </span>
              <div>
                <h3>Phone & email</h3>
                <p>
                  Verified business phone and email
                  <br />
                  <span className="pending-label">Pending verification</span>
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Icon name="home" />
              </span>
              <div>
                <h3>Business address</h3>
                <p>
                  Registered business address
                  <br />
                  <span className="pending-label">Pending verification</span>
                </p>
              </div>
            </div>
            <div className="contact-note">
              <Icon name="info" size={21} />
              <p>
                You can submit an inquiry or contact Mark directly. For urgent court deadlines, contact the court or independent legal counsel.
              </p>
            </div>
          </div>
          <div className="form-card contact-form-card">
            <h3>Check your eligibility</h3>
            <p className="form-card-intro">
              Start with a few details about the former property.
            </p>
            <EligibilityForm />
          </div>
        </div>
      </section>
      <section className="privacy-section" id="prototype-privacy">
        <div className="container privacy-inner"><Icon name="lock" size={25}/><div>
          <h2>How we use your information</h2>
          <p>Information you submit is used to review your inquiry and contact you about potential surplus funds. Form entries are processed through our website hosting provider, Netlify, and notifications are intended for our team. Do not submit Social Security numbers, banking details, or identity documents through this form.</p>
          <p>Submitting a form does not establish an attorney-client relationship, confirm eligibility, or guarantee recovery. You may contact the court or seek independent legal advice.</p>
        </div></div>
      </section>
    </SiteLayout>
  )
}
