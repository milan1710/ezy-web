/* ---------------------------------------------------------------------------
   Original concept mockups, rendered entirely with HTML + CSS.
   No stock photography and no screenshots are used: every preview below is a
   hand-coded miniature layout built to demonstrate our design work.
--------------------------------------------------------------------------- */

const tone = {
  hero: 'bg-ink-950',
  strong: 'bg-ink-900',
  mid: 'bg-ink-400',
  soft: 'bg-ink-300',
  muted: 'bg-ink-200',
  faint: 'bg-ink-100',
  white: 'bg-white',
  whiteSoft: 'bg-white/70',
  whiteFaint: 'bg-white/20',
  brand: 'bg-brand-600',
  brandSoft: 'bg-brand-100',
  azure: 'bg-azure-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-400',
}

/** Small text/UI bar. `h` is expressed in container-query width units. */
function Bar({ w = '60%', h = 1.6, t = 'muted', radius = 'rounded-full', className = '' }) {
  return (
    <div
      className={[tone[t] ?? t, radius, className].join(' ')}
      style={{ width: w, height: `${h}cqw` }}
    />
  )
}

/** Gradient "image" placeholder tile used in place of stock photography. */
function Tile({ className = '', from = 'from-brand-500/25', to = 'to-ink-900/20', children }) {
  return (
    <div
      className={[
        'relative flex overflow-hidden rounded-[1cqw] bg-gradient-to-br',
        from,
        to,
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function BrandMark({ label = 'EzyDigital', dark = false }) {
  return (
    <div className="flex items-center gap-[1cqw]">
      <span className="bg-brand-600 block h-[2.6cqw] w-[2.6cqw] rounded-[0.6cqw]" />
      <span
        className={['font-bold', dark ? 'text-white' : 'text-ink-900'].join(' ')}
        style={{ fontSize: '2.1cqw' }}
      >
        {label}
      </span>
    </div>
  )
}

function NavLinks({ items = ['Home', 'Services', 'About', 'Contact'], dark = false, active = 0 }) {
  return (
    <div className="flex items-center gap-[2.4cqw]">
      {items.map((item, index) => (
        <span
          key={item}
          className={[
            'font-medium',
            index === active ? 'text-brand-500' : dark ? 'text-ink-400' : 'text-ink-400',
          ].join(' ')}
          style={{ fontSize: '1.45cqw' }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

function MiniButton({ label, filled = true, large = false }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full font-semibold',
        filled ? 'bg-brand-600 text-white' : 'border border-ink-300 text-ink-600',
      ].join(' ')}
      style={{
        fontSize: large ? '1.6cqw' : '1.35cqw',
        padding: large ? '1cqw 2.4cqw' : '0.8cqw 1.9cqw',
      }}
    >
      {label}
    </span>
  )
}

function Chart({ bars = [40, 62, 48, 78, 58, 92, 70], color = 'bg-brand-500' }) {
  return (
    <div className="flex h-full items-end gap-[1cqw]">
      {bars.map((h, i) => (
        <span
          key={i}
          className={['w-full rounded-t-[0.4cqw]', color].join(' ')}
          style={{ height: `${h}%`, opacity: 0.45 + (i / bars.length) * 0.55 }}
        />
      ))}
    </div>
  )
}

function BusinessScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-ink-950 flex items-center justify-between px-[4cqw] py-[1.8cqw]">
        <BrandMark dark />
        <NavLinks dark />
        <span
          className="bg-brand-600 rounded-full font-semibold text-white"
          style={{ fontSize: '1.35cqw', padding: '0.8cqw 2cqw' }}
        >
          Get a Quote
        </span>
      </div>

      <div className="from-ink-50 flex flex-1 gap-[3cqw] bg-gradient-to-b to-white px-[4cqw] py-[3.4cqw]">
        <div className="flex w-[52%] flex-col justify-center gap-[1.4cqw]">
          <span
            className="text-brand-600 font-semibold tracking-[0.2em] uppercase"
            style={{ fontSize: '1.25cqw' }}
          >
            Business consulting
          </span>
          <span className="text-ink-900 font-bold leading-tight" style={{ fontSize: '3.5cqw' }}>
            Practical advice that moves your business forward
          </span>
          <Bar w="88%" h={1.15} t="muted" />
          <Bar w="70%" h={1.15} t="muted" />
          <div className="mt-[1.4cqw] flex items-center gap-[1.6cqw]">
            <MiniButton label="Book a Consultation" large />
            <MiniButton label="Our Services" filled={false} large />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="rounded-[1.4cqw] border border-ink-100 bg-white p-[2.4cqw] shadow-soft">
            <div className="mb-[1.6cqw] flex items-center justify-between">
              <Bar w="42%" h={1.3} t="strong" />
              <span
                className="rounded-full bg-emerald-100 font-semibold text-emerald-700"
                style={{ fontSize: '1.1cqw', padding: '0.5cqw 1.2cqw' }}
              >
                +18%
              </span>
            </div>
            <div className="h-[12cqw]">
              <Chart />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[2cqw] bg-ink-50 px-[4cqw] pb-[2.6cqw]">
        {['Strategy', 'Compliance', 'Advisory'].map((item) => (
          <div key={item} className="flex-1 rounded-[1cqw] border border-ink-100 bg-white p-[1.8cqw]">
            <span className="block h-[2cqw] w-[2cqw] rounded-[0.5cqw] bg-brand-100" />
            <span
              className="text-ink-900 mt-[1cqw] block font-semibold"
              style={{ fontSize: '1.4cqw' }}
            >
              {item}
            </span>
            <Bar w="90%" h={0.9} t="muted" className="mt-[0.8cqw]" />
          </div>
        ))}
      </div>
    </div>
  )
}

function EcommerceScreen() {
  const products = [
    { name: 'Wireless Earbuds', price: 'Rs.2,499', from: 'from-brand-400/40', to: 'to-brand-700/25' },
    { name: 'Ceramic Mug Set', price: 'Rs.749', from: 'from-azure-400/40', to: 'to-ink-900/25' },
    { name: 'Desk Lamp Pro', price: 'Rs.1,299', from: 'from-amber-300/50', to: 'to-ink-900/25' },
    { name: 'Canvas Backpack', price: 'Rs.1,899', from: 'from-emerald-300/45', to: 'to-ink-900/25' },
  ]

  return (
    <div className="flex h-full flex-col bg-ink-50">
      <div className="flex items-center gap-[2cqw] border-b border-ink-100 bg-white px-[4cqw] py-[1.6cqw]">
        <BrandMark label="Kettle & Co." />
        <div
          className="flex flex-1 items-center rounded-full bg-ink-100 px-[1.6cqw] py-[0.9cqw] text-ink-400"
          style={{ fontSize: '1.3cqw' }}
        >
          Search products
        </div>
        <div className="flex items-center gap-[1.4cqw] text-ink-500" style={{ fontSize: '1.3cqw' }}>
          <span>Account</span>
          <span>Cart (3)</span>
        </div>
      </div>

      <div className="flex flex-1 gap-[2.4cqw] px-[4cqw] py-[2.6cqw]">
        <div className="flex w-[22%] flex-col gap-[1.4cqw]">
          <span className="text-ink-900 font-bold" style={{ fontSize: '1.6cqw' }}>
            Categories
          </span>
          {['Audio', 'Home', 'Lighting', 'Bags'].map((c, i) => (
            <div key={c} className="flex items-center gap-[1.2cqw]" style={{ fontSize: '1.3cqw' }}>
              <span
                className={[
                  'h-[1.2cqw] w-[1.2cqw] rounded-[0.3cqw]',
                  i === 0 ? 'bg-brand-600' : 'bg-ink-300',
                ].join(' ')}
              />
              <span className={i === 0 ? 'text-ink-900 font-semibold' : 'text-ink-500'}>{c}</span>
            </div>
          ))}
          <div className="mt-[1.4cqw] h-[1cqw] w-full rounded-full bg-ink-200">
            <div className="h-full w-[60%] rounded-full bg-brand-600" />
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-4 gap-[1.8cqw]">
            {products.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-[1cqw] border border-ink-100 bg-white"
              >
                <Tile className="h-[9cqw] rounded-none" from={p.from} to={p.to}>
                  <span className="absolute right-[0.8cqw] bottom-[0.8cqw] h-[2cqw] w-[2cqw] rounded-full bg-white/80" />
                </Tile>
                <div className="p-[1.2cqw]">
                  <span className="block truncate text-ink-700" style={{ fontSize: '1.15cqw' }}>
                    {p.name}
                  </span>
                  <span
                    className="text-ink-900 mt-[0.6cqw] block font-bold"
                    style={{ fontSize: '1.35cqw' }}
                  >
                    {p.price}
                  </span>
                  <span
                    className="bg-brand-600 mt-[0.9cqw] block rounded-full py-[0.6cqw] text-center font-semibold text-white"
                    style={{ fontSize: '1.05cqw' }}
                  >
                    Add to cart
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[2cqw] flex items-center justify-between rounded-[1cqw] border border-ink-100 bg-white px-[1.8cqw] py-[1.4cqw]">
            <div className="flex items-center gap-[1.4cqw]">
              <span
                className="rounded-full bg-emerald-100 font-semibold text-emerald-700"
                style={{ fontSize: '1.1cqw', padding: '0.5cqw 1.2cqw' }}
              >
                Secure checkout
              </span>
              <span className="text-ink-500" style={{ fontSize: '1.2cqw' }}>
                UPI - Cards - Netbanking
              </span>
            </div>
            <MiniButton label="Checkout" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardScreen() {
  const stats = [
    { k: 'Active users', v: '2,418', d: '+12.4%', c: 'text-emerald-700 bg-emerald-100' },
    { k: 'Conversion', v: '3.9%', d: '+0.6%', c: 'text-emerald-700 bg-emerald-100' },
    { k: 'Churn', v: '1.2%', d: '-0.3%', c: 'text-brand-700 bg-brand-100' },
  ]

  return (
    <div className="flex h-full bg-ink-50">
      <div className="bg-ink-950 flex w-[20%] flex-col gap-[1.7cqw] px-[1.8cqw] py-[2.2cqw]">
        <BrandMark label="Pulseboard" dark />
        <div className="mt-[1.4cqw] flex flex-col gap-[1.2cqw]">
          {['Overview', 'Customers', 'Revenue', 'Reports', 'Settings'].map((item, i) => (
            <span
              key={item}
              className={[
                'rounded-[0.7cqw] px-[1.2cqw] py-[0.8cqw]',
                i === 0 ? 'bg-brand-600 text-white' : 'text-ink-400',
              ].join(' ')}
              style={{ fontSize: '1.25cqw' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-[1.8cqw] px-[2.6cqw] py-[2.2cqw]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-ink-900 block font-bold" style={{ fontSize: '2.1cqw' }}>
              Overview
            </span>
            <span className="text-ink-400" style={{ fontSize: '1.15cqw' }}>
              Last 30 days
            </span>
          </div>
          <div className="flex items-center gap-[1cqw]">
            <MiniButton label="Export" filled={false} />
            <span className="bg-ink-900 h-[3cqw] w-[3cqw] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[1.6cqw]">
          {stats.map((card) => (
            <div key={card.k} className="rounded-[1.1cqw] border border-ink-100 bg-white p-[1.5cqw]">
              <span className="block text-ink-400" style={{ fontSize: '1.1cqw' }}>
                {card.k}
              </span>
              <span className="text-ink-900 mt-[0.7cqw] block font-bold" style={{ fontSize: '2.2cqw' }}>
                {card.v}
              </span>
              <span
                className={['mt-[0.8cqw] inline-block rounded-full font-semibold', card.c].join(' ')}
                style={{ fontSize: '1cqw', padding: '0.4cqw 1cqw' }}
              >
                {card.d}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-1 gap-[1.6cqw]">
          <div className="flex w-[58%] flex-col rounded-[1.1cqw] border border-ink-100 bg-white p-[1.6cqw]">
            <Bar w="34%" h={1.2} t="strong" />
            <div className="mt-[1.4cqw] flex-1">
              <Chart bars={[35, 52, 44, 68, 55, 82, 62, 74, 58, 88]} />
            </div>
          </div>
          <div className="flex-1 rounded-[1.1cqw] border border-ink-100 bg-white p-[1.6cqw]">
            <Bar w="52%" h={1.2} t="strong" />
            <div className="mt-[1.5cqw] flex flex-col gap-[1.1cqw]">
              {[0, 1, 2, 3, 4].map((row) => (
                <div key={row} className="flex items-center justify-between gap-[1cqw]">
                  <div className="flex items-center gap-[1cqw]">
                    <span className="bg-ink-100 h-[2cqw] w-[2cqw] rounded-full" />
                    <Bar w="4cqw" h={1} t="muted" />
                  </div>
                  <Bar w="3cqw" h={1} t={row === 0 ? 'emerald' : 'faint'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RestaurantScreen() {
  return (
    <div className="flex h-full flex-col bg-[#161311]">
      <div className="flex items-center justify-between px-[4cqw] py-[1.8cqw]">
        <BrandMark label="Saffron Table" dark />
        <NavLinks items={['Menu', 'Chef', 'Gallery', 'Reserve']} dark />
      </div>

      <div className="flex flex-1 gap-[3cqw] px-[4cqw]">
        <div className="flex flex-1 flex-col justify-center gap-[1.5cqw]">
          <span
            className="font-semibold tracking-[0.22em] text-amber-300 uppercase"
            style={{ fontSize: '1.2cqw' }}
          >
            Est. 2014 - Upleta
          </span>
          <span className="font-bold leading-tight text-white" style={{ fontSize: '3.6cqw' }}>
            Slow-cooked Gujarati flavours, served with care
          </span>
          <Bar w="80%" h={1.1} t="whiteFaint" />
          <Bar w="62%" h={1.1} t="whiteFaint" />
          <div className="mt-[1.4cqw] flex gap-[1.4cqw]">
            <span
              className="rounded-full bg-amber-400 font-semibold text-[#161311]"
              style={{ fontSize: '1.35cqw', padding: '1cqw 2.2cqw' }}
            >
              Reserve a Table
            </span>
            <span
              className="rounded-full border border-white/30 font-semibold text-white"
              style={{ fontSize: '1.35cqw', padding: '1cqw 2.2cqw' }}
            >
              View Menu
            </span>
          </div>
        </div>

        <div className="flex w-[34%] flex-col justify-center">
          <div className="rounded-[1.4cqw] bg-white/95 p-[2cqw]">
            <span className="text-ink-900 block font-bold" style={{ fontSize: '1.6cqw' }}>
              Book your table
            </span>
            <div className="mt-[1.4cqw] grid grid-cols-2 gap-[1cqw]">
              {['Name', 'Phone', 'Date', 'Guests'].map((f) => (
                <div key={f} className="bg-ink-100 rounded-[0.7cqw] px-[1cqw] py-[0.9cqw]">
                  <span className="text-ink-400" style={{ fontSize: '1.05cqw' }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <span
              className="bg-brand-600 mt-[1.4cqw] block rounded-full py-[0.9cqw] text-center font-semibold text-white"
              style={{ fontSize: '1.25cqw' }}
            >
              Confirm reservation
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-[1.6cqw] px-[4cqw] py-[2.4cqw]">
        {['Thali', 'Snacks', 'Breads', 'Desserts'].map((dish, i) => (
          <Tile
            key={dish}
            className="h-[6cqw] flex-1 items-end"
            from={i % 2 === 0 ? 'from-amber-400/50' : 'from-brand-500/50'}
            to="to-[#161311]/70"
          >
            <span
              className="relative p-[1cqw] font-semibold text-white"
              style={{ fontSize: '1.2cqw' }}
            >
              {dish}
            </span>
          </Tile>
        ))}
      </div>
    </div>
  )
}

function RealEstateScreen() {
  const listings = [
    { t: 'Shreeji Residency', p: 'Rs.42.5 L', l: 'Upleta, Gujarat', b: '3 BHK' },
    { t: 'Nilkanth Heights', p: 'Rs.68.0 L', l: 'Gondal Road', b: '4 BHK' },
    { t: 'Riverside Plots', p: 'Rs.18.9 L', l: 'Jetpur', b: 'Plot' },
  ]

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-ink-950 flex items-center justify-between px-[4cqw] py-[1.7cqw]">
        <BrandMark label="Courtyards Realty" dark />
        <NavLinks items={['Buy', 'Rent', 'Projects', 'Contact']} dark />
      </div>

      <div className="flex items-center gap-[1.4cqw] border-b border-ink-100 bg-ink-50 px-[4cqw] py-[1.8cqw]">
        {['City or area', 'Property type', 'Budget', 'Bedrooms'].map((f) => (
          <div
            key={f}
            className="flex-1 rounded-[0.7cqw] border border-ink-200 bg-white px-[1.2cqw] py-[0.9cqw]"
          >
            <span className="text-ink-400" style={{ fontSize: '1.1cqw' }}>
              {f}
            </span>
          </div>
        ))}
        <MiniButton label="Search" />
      </div>

      <div className="flex flex-1 flex-col gap-[1.8cqw] px-[4cqw] py-[2.4cqw]">
        <div className="flex items-center justify-between">
          <span className="text-ink-900 font-bold" style={{ fontSize: '1.9cqw' }}>
            Featured properties
          </span>
          <span className="text-ink-400" style={{ fontSize: '1.15cqw' }}>
            128 results
          </span>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-[1.8cqw]">
          {listings.map((l, i) => (
            <div
              key={l.t}
              className="flex flex-col overflow-hidden rounded-[1.1cqw] border border-ink-100 bg-white"
            >
              <Tile
                className="h-[9cqw] rounded-none"
                from={i === 1 ? 'from-azure-400/45' : 'from-ink-400/35'}
                to="to-ink-900/30"
              >
                <span
                  className="text-ink-800 absolute top-[0.8cqw] left-[0.8cqw] rounded-full bg-white/90 px-[1cqw] py-[0.35cqw] font-semibold"
                  style={{ fontSize: '1cqw' }}
                >
                  {l.b}
                </span>
              </Tile>
              <div className="flex flex-1 flex-col p-[1.4cqw]">
                <span className="text-ink-900 font-semibold" style={{ fontSize: '1.4cqw' }}>
                  {l.t}
                </span>
                <span className="text-ink-400 mt-[0.4cqw]" style={{ fontSize: '1.1cqw' }}>
                  {l.l}
                </span>
                <div className="mt-auto flex items-center justify-between pt-[1.2cqw]">
                  <span className="text-brand-600 font-bold" style={{ fontSize: '1.5cqw' }}>
                    {l.p}
                  </span>
                  <span
                    className="text-ink-500 border-b border-ink-300"
                    style={{ fontSize: '1.05cqw' }}
                  >
                    Enquire
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EducationScreen() {
  const courses = [
    { n: 'Full-Stack Web Development', d: '36 weeks', f: 'Rs.24,000' },
    { n: 'Data Analytics', d: '20 weeks', f: 'Rs.18,000' },
    { n: 'Design Foundations', d: '12 weeks', f: 'Rs.12,000' },
  ]

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-ink-100 px-[4cqw] py-[1.7cqw]">
        <BrandMark label="Scholars Path" />
        <NavLinks items={['Courses', 'Admissions', 'Faculty', 'Campus']} />
        <MiniButton label="Apply Now" />
      </div>

      <div className="from-ink-950 to-ink-900 flex bg-gradient-to-r px-[4cqw] py-[3cqw] text-white">
        <div className="flex flex-1 items-center gap-[3cqw]">
          <div className="flex flex-1 flex-col gap-[1.3cqw]">
            <span
              className="text-brand-400 font-semibold tracking-[0.2em] uppercase"
              style={{ fontSize: '1.2cqw' }}
            >
              Admissions open
            </span>
            <span className="font-bold leading-tight" style={{ fontSize: '3.2cqw' }}>
              Career-focused training with placement support
            </span>
            <Bar w="74%" h={1.05} t="whiteFaint" />
            <div className="mt-[1cqw] flex gap-[1.4cqw]">
              <MiniButton label="Explore Courses" />
              <MiniButton label="Download Brochure" filled={false} />
            </div>
          </div>
          <div className="flex w-[30%] gap-[1.2cqw]">
            {[0, 1, 2].map((i) => (
              <Tile key={i} className="h-[11cqw] flex-1" from="from-white/25" to="to-white/5" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-[1.6cqw] px-[4cqw] py-[2.4cqw]">
        <span className="text-ink-900 font-bold" style={{ fontSize: '1.8cqw' }}>
          Popular programmes
        </span>
        <div className="grid flex-1 grid-cols-3 gap-[1.8cqw]">
          {courses.map((c) => (
            <div
              key={c.n}
              className="flex flex-col justify-between rounded-[1.1cqw] border border-ink-100 bg-ink-50 p-[1.6cqw]"
            >
              <div>
                <span
                  className="inline-block rounded-full bg-brand-100 font-semibold text-brand-700"
                  style={{ fontSize: '1cqw', padding: '0.4cqw 1cqw' }}
                >
                  {c.d}
                </span>
                <span
                  className="text-ink-900 mt-[1cqw] block font-semibold"
                  style={{ fontSize: '1.45cqw' }}
                >
                  {c.n}
                </span>
                <Bar w="88%" h={0.9} t="muted" className="mt-[0.9cqw]" />
                <Bar w="66%" h={0.9} t="muted" className="mt-[0.6cqw]" />
              </div>
              <div className="mt-[1.4cqw] flex items-center justify-between">
                <span className="text-ink-900 font-bold" style={{ fontSize: '1.5cqw' }}>
                  {c.f}
                </span>
                <MiniButton label="Enrol" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HealthcareScreen() {
  return (
    <div className="flex h-full flex-col bg-ink-50">
      <div className="flex items-center justify-between bg-white px-[4cqw] py-[1.6cqw] shadow-sm">
        <BrandMark label="CarePoint Clinic" />
        <div className="flex items-center gap-[2cqw]">
          <NavLinks items={['Departments', 'Doctors', 'Timings']} />
          <span
            className="bg-brand-600 flex items-center gap-[0.8cqw] rounded-full px-[1.6cqw] py-[0.8cqw] text-white"
            style={{ fontSize: '1.2cqw' }}
          >
            <span className="h-[1.4cqw] w-[1.4cqw] rounded-full bg-white/90" />
            Call now
          </span>
        </div>
      </div>

      <div className="flex flex-1 gap-[2.6cqw] px-[4cqw] py-[2.6cqw]">
        <div className="flex flex-1 flex-col justify-center gap-[1.4cqw]">
          <span
            className="text-azure-600 font-semibold tracking-[0.2em] uppercase"
            style={{ fontSize: '1.15cqw' }}
          >
            Multispeciality care
          </span>
          <span className="text-ink-900 font-bold leading-tight" style={{ fontSize: '3.2cqw' }}>
            Trusted treatment, closer to home
          </span>
          <Bar w="86%" h={1.05} t="muted" />
          <Bar w="68%" h={1.05} t="muted" />
          <div className="mt-[1.2cqw] flex gap-[1.4cqw]">
            <MiniButton label="Book Appointment" large />
            <MiniButton label="Our Doctors" filled={false} large />
          </div>
        </div>

        <div className="flex w-[36%] flex-col gap-[1.4cqw]">
          <div className="rounded-[1.2cqw] border border-ink-100 bg-white p-[1.6cqw]">
            <span className="text-ink-900 block font-semibold" style={{ fontSize: '1.4cqw' }}>
              Request an appointment
            </span>
            <div className="mt-[1.2cqw] grid grid-cols-2 gap-[0.9cqw]">
              {['Name', 'Mobile', 'Department', 'Date'].map((f) => (
                <div key={f} className="bg-ink-100 rounded-[0.6cqw] px-[1cqw] py-[0.8cqw]">
                  <span className="text-ink-400" style={{ fontSize: '1.05cqw' }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <span
              className="bg-azure-600 mt-[1.2cqw] block rounded-full py-[0.85cqw] text-center font-semibold text-white"
              style={{ fontSize: '1.2cqw' }}
            >
              Submit request
            </span>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-[0.9cqw]">
            {['Cardiology', 'Orthopaedics', 'Paediatrics', 'Diagnostics'].map((d) => (
              <div
                key={d}
                className="flex items-center rounded-[0.8cqw] border border-ink-100 bg-white px-[1cqw] py-[0.9cqw]"
                style={{ fontSize: '1.1cqw' }}
              >
                <span className="truncate text-ink-600">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function WebAppScreen() {
  const columns = [
    { title: 'New', cards: ['Site survey - Jetpur', 'Quote follow-up'] },
    { title: 'In progress', cards: ['Install unit 12', 'Client onboarding'] },
    { title: 'Done', cards: ['Invoice #4821'] },
  ]

  const statusStyles = [
    'bg-azure-500/15 text-azure-600',
    'bg-amber-100 text-amber-700',
    'bg-emerald-100 text-emerald-700',
  ]

  return (
    <div className="flex h-full bg-ink-50">
      <div className="bg-ink-950 flex w-[18%] flex-col gap-[1.4cqw] px-[1.6cqw] py-[2cqw]">
        <BrandMark label="FieldFlow" dark />
        <div className="mt-[1.2cqw] flex flex-col gap-[0.9cqw]">
          {['Jobs', 'Schedule', 'Clients', 'Team', 'Settings'].map((item, i) => (
            <span
              key={item}
              className={[
                'rounded-[0.6cqw] px-[1cqw] py-[0.7cqw]',
                i === 0 ? 'bg-white/15 text-white' : 'text-ink-400',
              ].join(' ')}
              style={{ fontSize: '1.15cqw' }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto rounded-[0.8cqw] bg-white/10 p-[1cqw]">
          <span className="text-ink-400 block" style={{ fontSize: '1cqw' }}>
            Signed in as
          </span>
          <span className="block font-semibold text-white" style={{ fontSize: '1.15cqw' }}>
            Ops Manager
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-[1.6cqw] px-[2.4cqw] py-[2cqw]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-ink-900 block font-bold" style={{ fontSize: '2cqw' }}>
              Operations board
            </span>
            <span className="text-ink-400" style={{ fontSize: '1.1cqw' }}>
              Authenticated workspace - role based access
            </span>
          </div>
          <div className="flex items-center gap-[0.8cqw]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={[
                  'h-[2.4cqw] w-[2.4cqw] rounded-full ring-2 ring-white',
                  i === 0 ? 'bg-brand-500' : i === 1 ? 'bg-azure-500' : 'bg-ink-400',
                ].join(' ')}
              />
            ))}
            <MiniButton label="New job" />
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-[1.6cqw]">
          {columns.map((col, ci) => (
            <div
              key={col.title}
              className="flex flex-col gap-[1cqw] rounded-[1.1cqw] bg-ink-100/80 p-[1.2cqw]"
            >
              <div className="flex items-center justify-between px-[0.4cqw]">
                <span className="text-ink-700 font-semibold" style={{ fontSize: '1.25cqw' }}>
                  {col.title}
                </span>
                <span className="text-ink-400" style={{ fontSize: '1.05cqw' }}>
                  {col.cards.length}
                </span>
              </div>
              {col.cards.map((card) => (
                <div
                  key={card}
                  className="rounded-[0.9cqw] border border-ink-100 bg-white p-[1.1cqw]"
                >
                  <span className="text-ink-800 block font-medium" style={{ fontSize: '1.2cqw' }}>
                    {card}
                  </span>
                  <div className="mt-[0.9cqw] flex items-center justify-between">
                    <span
                      className={[
                        'rounded-full font-semibold',
                        statusStyles[ci] ?? statusStyles[0],
                      ].join(' ')}
                      style={{ fontSize: '0.95cqw', padding: '0.35cqw 0.9cqw' }}
                    >
                      {ci === 2 ? 'Complete' : ci === 1 ? 'Active' : 'Queued'}
                    </span>
                    <span className="bg-ink-200 h-[1.6cqw] w-[1.6cqw] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}










const VARIANTS = {
  business: BusinessScreen,
  ecommerce: EcommerceScreen,
  dashboard: DashboardScreen,
  restaurant: RestaurantScreen,
  'real-estate': RealEstateScreen,
  education: EducationScreen,
  healthcare: HealthcareScreen,
  'web-app': WebAppScreen,
}

export default function MockupApp({ variant }) {
  const Screen = VARIANTS[variant] ?? BusinessScreen
  return <Screen />
}
