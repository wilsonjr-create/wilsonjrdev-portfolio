const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Git",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#292622]">
      <header className="border-b border-[#DDD8D1]">
        <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:flex-nowrap lg:px-12">
          <a href="#" className="flex items-center gap-3">
            <span className="text-3xl font-bold tracking-[-0.12em]">WJ.</span>
            <span className="border-l border-[#CFC8BF] pl-3 text-xs font-semibold uppercase tracking-[0.16em]">
              Wilson Jr.
              <br />
              Software Engineer
            </span>
          </a>

          <div className="hidden items-center gap-5 text-sm lg:flex xl:gap-9">
            <a href="#about" className="hover:text-[#765D49]">About</a>
            <a href="#project" className="hover:text-[#765D49]">Project</a>
            <a href="#experience" className="hover:text-[#765D49]">Experience</a>
            <a href="#contact" className="hover:text-[#765D49]">Contact</a>
          </div>

          <details className="group w-full rounded-xl border border-[#DDD8D1] bg-white/60 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
              <span>Navigation</span>
              <span aria-hidden="true" className="text-xl group-open:rotate-90 transition-transform">☰</span>
            </summary>
            <div className="flex flex-col gap-1 border-t border-[#DDD8D1] p-2 text-sm">
              <a href="#about" className="rounded-lg px-3 py-3 hover:bg-[#E7E3DE]">About</a>
              <a href="#project" className="rounded-lg px-3 py-3 hover:bg-[#E7E3DE]">Project</a>
              <a href="#experience" className="rounded-lg px-3 py-3 hover:bg-[#E7E3DE]">Experience</a>
              <a href="#contact" className="rounded-lg px-3 py-3 hover:bg-[#E7E3DE]">Contact</a>
            </div>
          </details>

          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
            <a
              href="/cv/Wilson_Jr_CV.pdf"
              download="Wilson_Jr_CV.pdf"
              className="rounded-lg border border-[#CFC8BF] px-3 py-3 text-xs font-medium sm:px-4 transition hover:bg-[#E7E3DE]"
            >
              PDF CV ↓
            </a>

            <a
              href="/cv/Wilson_Jr_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#CFC8BF] px-3 py-3 text-xs font-medium sm:px-4 transition hover:bg-[#E7E3DE]"
            >
              View CV ↗
            </a>

            <a
              href="/cv/Wilson_Jr_CV.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#765D49] px-3 py-3 text-xs font-medium sm:px-4 text-white transition hover:bg-[#594332]"
            >
              WORD CV ↗
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:pt-28">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#765D49]">
            Junior Software Engineer
          </p>

          <h1 className="max-w-3xl text-6xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            Building
            <br />
            software with
            <br />
            purpose.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#68625C]">
            I&apos;m Wilson Jr., a Full-Stack Developer focused on building
            modern, reliable and scalable web applications.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#project"
              className="rounded-lg bg-[#765D49] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#594332]"
            >
              Explore my work ↗
            </a>

            <a
              href="mailto:fluwnense45@gmail.com"
              className="rounded-lg border border-[#CFC8BF] px-7 py-4 text-sm font-medium transition hover:bg-[#E7E3DE]"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[#E7E3DE] lg:min-h-[540px]">
          <img
            src="/images/wilson-profile.png"
            alt="Wilson Jr. — Junior Software Engineer"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C1A18]/85 via-[#1C1A18]/35 to-transparent px-8 pb-8 pt-28 text-white">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#E7E3DE]">
              Wilson Jr. / Software Engineer
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {["Europe Relocation", "Remote Worldwide"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/40 bg-black/20 px-3 py-2 text-xs backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#DDD8D1] bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#765D49]">
              Background
            </p>
            <h3 className="mt-3 text-xl font-semibold">3+ years in IT</h3>
            <p className="mt-2 text-sm leading-6 text-[#68625C]">
              Professional technical support and problem-solving experience.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#765D49]">
              Education
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Software Engineering
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#68625C]">
              Bachelor&apos;s Degree — UDF Centro Universitário.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#765D49]">
              Languages
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Global communication
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#68625C]">
              Portuguese, English and Spanish.
            </p>
          </div>
        </div>
      </section>

      <section id="project" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#765D49]">
              Selected work / 01
            </p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">
              NEXORA GAMES
            </h2>
          </div>

          <span className="text-sm text-[#68625C]">
            Full-Stack E-Commerce Platform
          </span>
        </div>

        <a
          href="https://nexora-games-zeta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore NEXORA GAMES live application"
          className="group block overflow-hidden rounded-[2rem] border border-[#DDD8D1] bg-[#E7E3DE]"
        >
          <img
            src="/images/nexora-storefront.png"
            alt="NEXORA GAMES gaming e-commerce storefront"
            className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </a>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="max-w-2xl text-base leading-8 text-[#68625C]">
              A full-stack gaming e-commerce application featuring a responsive
              storefront, authentication, database integration, shopping cart,
              Stripe test checkout, webhooks and purchase history.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#DDD8D1] px-4 py-2 text-xs"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            <a
              href="https://nexora-games-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#765D49] px-6 py-4 text-sm text-white"
            >
              Live project ↗
            </a>

            <a
              href="https://github.com/wilsonjr-create/NEXORA-GAMES"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#CFC8BF] px-6 py-4 text-sm"
            >
              Source code ↗
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-[#DDD8D1] bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#765D49]">
              Experience & Education
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
              A foundation in technology.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#68625C]">
              Combining professional IT support experience with practical
              full-stack software development projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Junior Full-Stack Developer
            </h3>
            <p className="mt-2 text-sm text-[#68625C]">
              Personal projects · Modern web applications
            </p>

            <div className="my-8 h-px bg-[#DDD8D1]" />

            <h3 className="text-lg font-semibold">
              IT Support Technician
            </h3>
            <p className="mt-2 text-sm text-[#68625C]">
              Professional experience · Troubleshooting & infrastructure
            </p>

            <div className="my-8 h-px bg-[#DDD8D1]" />

            <h3 className="text-lg font-semibold">
              Bachelor&apos;s Degree in Software Engineering
            </h3>
            <p className="mt-2 text-sm text-[#68625C]">
              UDF Centro Universitário · 2022–2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#765D49]">
          Technologies
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
          Tools I work with.
        </h2>

        <div className="mt-9 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-xl border border-[#DDD8D1] bg-white/60 px-5 py-4 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-[#292622] text-[#F8F7F4]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9B8A8]">
              Wilson Jr. — Software Engineer
            </p>
            <span className="rounded-full border border-[#8C8177] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#E7E3DE]">
              Open to opportunities
            </span>
          </div>

          <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9B8A8]">
                Have a project or opportunity?
              </p>

              <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Let&apos;s build something meaningful together.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#C9C2BB]">
                Junior Software Engineer and Full-Stack Developer.
                Open to international opportunities, European relocation
                and remote collaboration worldwide.
              </p>

              <a
                href="mailto:fluwnense45@gmail.com"
                className="mt-9 inline-flex rounded-lg bg-[#765D49] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#94745C]"
              >
                Start a conversation ↗
              </a>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9B8A8]">
                  Direct contact
                </p>

                <div className="mt-7 space-y-5">
                  <div>
                    <p className="text-xs text-[#B5A99F]">EMAIL</p>
                    <a
                      href="mailto:fluwnense45@gmail.com"
                      className="mt-2 block break-all text-sm font-medium hover:text-[#D5B89F] sm:text-base"
                    >
                      fluwnense45@gmail.com ↗
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="text-xs text-[#B5A99F]">WHATSAPP</p>
                    <a
                      href="https://wa.me/5561999593358"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-sm font-medium hover:text-[#D5B89F] sm:text-base"
                    >
                      +55 61 99959-3358 ↗
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="text-xs text-[#B5A99F]">LOCATION & AVAILABILITY</p>
                    <p className="mt-2 text-sm leading-6 text-[#E7E3DE]">
                      Brazil · Europe Relocation · Remote Worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <a
                  href="https://github.com/wilsonjr-create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-4 py-4 text-center text-sm font-medium transition hover:border-[#C9B8A8] hover:bg-white/10"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/wilsonjr99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-4 py-4 text-center text-sm font-medium transition hover:border-[#C9B8A8] hover:bg-white/10"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://wa.me/5561999593358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#765D49] bg-[#765D49] px-4 py-4 text-center text-sm font-medium transition hover:bg-[#94745C]"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-7 text-xs text-[#C9B8A8]">
            <span>© 2026 Wilson Jr. All rights reserved.</span>
            <span>Designed &amp; built with purpose.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
