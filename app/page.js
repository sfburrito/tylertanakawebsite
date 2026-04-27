function Mark({ label }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-medium tracking-tight text-neutral-950">
      {label}
    </div>
  );
}

const trends = [
  {
    category: "Macro",
    title: "Consumer health is moving from point solutions to ongoing care",
    detail:
      "The better companies are not selling a single intervention. They own more of the arc: diagnosis, treatment, adherence, and behavior change."
  },
  {
    category: "Macro",
    title: "Mental health is becoming a chronic care problem, not an acute one",
    detail:
      "The companies winning are not crisis intervention platforms. They are building longitudinal relationships around anxiety, ADHD, and sleep -- and the employer channel is where the distribution is."
  },
  {
    category: "Macro",
    title: "Women's health is a category, not a niche",
    detail:
      "Fertility was the wedge. The expansion into menopause, metabolic health, and autoimmune conditions -- where women are disproportionately affected -- is where the real market is. The GLP-1 overlap makes this a decade-long build."
  },
  {
    category: "Economics & Distribution",
    title: "Insurance-backed products keep beating pure cash-pay health",
    detail:
      "The strongest products feel consumer-grade up front and reimbursement-backed underneath. That combination controls distribution in a way cash-pay alone cannot."
  },
  {
    category: "Economics & Distribution",
    title:
      "Primary care is being rebuilt again -- this time asset-light and reimbursement-native",
    detail:
      "Forward failed. One Medical got absorbed. The next version is async-first, lower cost to operate, and designed around the insurance relationship from day one. Whoever owns the PCP relationship owns the referral stack."
  },
  {
    category: "Economics & Distribution",
    title: "AI makes company building cheaper. It does not remove the need for a wedge.",
    detail:
      "Small teams can move faster across product, ops, and go-to-market. The edge still comes from distribution, trust, workflow depth, and habit."
  },
  {
    category: "Product Wedge",
    title: "Diagnostics are becoming the front door, not the follow-up",
    detail:
      "Labs, imaging, and wearables are easier to access than ever. The hard part is building the interpretation layer that turns scattered data into action people trust and act on."
  },
  {
    category: "Product Wedge",
    title: "GLP-1s are a commodity. The outcomes infrastructure around them is not.",
    detail:
      "The real opportunity is not access to the drug. It is nutrition, side-effect management, adherence, diagnostics, and the longitudinal care layer that makes the drug actually work."
  },
  {
    category: "Moats",
    title: "AI works in healthcare when it makes experts faster, not optional",
    detail:
      "The products gaining real traction are not replacing clinicians or dietitians. They are compressing the time and cost of expert judgment while keeping accountability intact."
  },
  {
    category: "Moats",
    title: "Consumer trust in health data is a moat, not a feature",
    detail:
      "The companies that own longitudinal health relationships -- where someone voluntarily shares labs, wearable data, and symptoms over time -- have a compounding data advantage that is genuinely hard to replicate. This is the infrastructure thesis underneath everything else."
  }
];

const trackedCompanies = [
  {
    name: "Nourish",
    mark: "NO",
    stage: "Series B",
    focus: "Insurance-covered nutrition care",
    note:
      "Nourish sits in the right place: reimbursed nutrition care tied to real behavior change. This gets stronger if GLP-1 care keeps expanding."
  },
  {
    name: "Fay",
    mark: "FY",
    stage: "Series B",
    focus: "Dietitian marketplace and workflow layer",
    note:
      "Fay is building both the marketplace and the operating layer. That is the right shape. The open question is whether supply quality stays high as the network scales."
  },
  {
    name: "Function Health",
    mark: "FH",
    stage: "Series B",
    focus: "Consumer diagnostics and medical intelligence",
    note:
      "The bet is that diagnostics become the front door to a broader health relationship. This only works if interpretation turns into action, not just more data."
  },
  {
    name: "Superpower",
    mark: "SP",
    stage: "Series A",
    focus: "Health super-app and biomarker membership",
    note:
      "Superpower is aiming bigger than most consumer health products. The product ambition is clear. The risk is trying to bundle too much before a single behavior locks in."
  },
  {
    name: "Visana Health",
    mark: "VH",
    stage: "Series A",
    focus: "Virtual-first women's health medical home",
    note:
      "Visana fits the shift from narrow women's health point solutions to broader care models. That makes sense. The challenge is executing breadth without losing focus."
  },
  {
    name: "Twentyeight Health",
    mark: "28",
    stage: "Series A",
    focus: "Insurance-enabled women's health access",
    note:
      "Twentyeight Health shows what improves when telehealth, Medicaid coverage, and simple product design line up. Access is the wedge here. Retention is the deeper test."
  }
];

const operatorStack = [
  {
    title: "Sales & Marketing",
    tools: [
      {
        name: "Clay",
        mark: "CL",
        category: "GTM automation",
        testing:
          "Signal-based prospecting, enrichment, and workflow automation that replace a surprising amount of SDR and growth ops work.",
        take:
          "Best when the ICP is narrow and the workflow is precise. Falls apart when teams use it as a generic personalization machine."
      },
      {
        name: "Runway",
        mark: "RW",
        category: "Creative production",
        testing:
          "Fast creative iteration for ads, founder-led content, and landing page tests.",
        take:
          "Useful for speed. It increases testing volume, but taste and distribution still decide what wins."
      }
    ]
  },
  {
    title: "Finance & Analytics",
    tools: [
      {
        name: "ChatGPT",
        mark: "CG",
        category: "Analysis copilot",
        testing:
          "First-pass help on cohort analysis, scenario work, KPI framing, and memos.",
        take:
          "Strong for synthesis. Good at getting to the right questions faster. Final judgment still sits with the operator holding the model."
      },
      {
        name: "Hex",
        mark: "HX",
        category: "Collaborative analytics",
        testing:
          "A faster path from raw data to exploratory analysis and reporting.",
        take:
          "A good fit for lean teams that need answers before they need a full data stack."
      }
    ]
  },
  {
    title: "Research & Diligence",
    tools: [
      {
        name: "Perplexity",
        mark: "PX",
        category: "Search and synthesis",
        testing:
          "Fast first-pass work on markets, competitors, customer behavior, and recent company developments.",
        take:
          "Very good for speed. Not good enough to replace primary sources or original judgment."
      },
      {
        name: "NotebookLM",
        mark: "NB",
        category: "Source-grounded research",
        testing:
          "Synthesis across transcripts, PDFs, decks, and reports while staying inside the source set.",
        take:
          "Useful when the job is comparing documents without drifting into summary slop."
      }
    ]
  },
  {
    title: "Founder Productivity",
    tools: [
      {
        name: "Claude",
        mark: "CD",
        category: "Writing and reasoning",
        testing:
          "Long-form writing, strategy articulation, and structured thinking around messy operating questions.",
        take:
          "Still one of the best tools for turning rough thinking into clean structure."
      },
      {
        name: "Granola",
        mark: "GR",
        category: "Meeting workflow",
        testing:
          "Lower-friction note capture and better follow-through across many parallel threads.",
        take:
          "The win is not notes. The win is less coordination drag."
      }
    ]
  }
];

const groupedTrends = Object.entries(
  trends.reduce((groups, trend) => {
    if (!groups[trend.category]) {
      groups[trend.category] = [];
    }
    groups[trend.category].push(trend);
    return groups;
  }, {})
);

const accent = "#183C40";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="shrink-0 text-sm font-medium tracking-tight">
            Tyler Tanaka
          </a>
          <nav className="overflow-x-auto">
            <div className="flex min-w-max items-center gap-5 text-sm text-neutral-600">
              <a href="#trends" className="whitespace-nowrap">
                Trends
              </a>
              <a href="#companies" className="whitespace-nowrap">
                Companies
              </a>
              <a href="#tools" className="whitespace-nowrap">
                Tools
              </a>
              <a href="#about" className="whitespace-nowrap">
                About
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-6xl px-6 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-20 lg:px-12 lg:pt-32 lg:pb-24">
        <section className="border-b border-neutral-200 pb-14 sm:pb-16 scroll-mt-24">
          <p
            className="text-xs uppercase tracking-[0.2em] font-medium mb-6"
            style={{ color: accent }}
          >
            TYLER TANAKA &middot; MIT SLOAN &middot; CONSUMER HEALTH
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Consumer health is moving from responding to illness to preventing it.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            I&apos;m investing in the companies leading that shift.
          </p>
        </section>

        <section id="trends" className="scroll-mt-24 py-14 sm:py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              Trends I&apos;m Following
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              What I&apos;m seeing.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              These are the shifts driving the rest of the site.
            </p>
          </div>

          <div className="mt-10 space-y-8 sm:space-y-9">
            {groupedTrends.map(([category, group], groupIndex) => {
              const startIndex = trends.findIndex(
                (trend) => trend.title === group[0].title
              );

              return (
                <div
                  key={category}
                  className={groupIndex === 0 ? "" : "border-t border-neutral-200 pt-8"}
                >
                  <p
                    className="text-xs uppercase tracking-[0.18em] font-medium"
                    style={{ color: accent }}
                  >
                    {category}
                  </p>
                  <div className="mt-6 space-y-6 sm:space-y-7">
                    {group.map((trend, index) => (
                      <article
                        key={trend.title}
                        className="border-l pl-5 sm:pl-6"
                        style={{ borderColor: accent }}
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                          {(startIndex + index + 1).toString().padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 max-w-3xl text-xl font-medium tracking-tight text-neutral-950 sm:text-2xl">
                          {trend.title}
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-700 sm:text-base sm:leading-7">
                          {trend.detail}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="companies" className="scroll-mt-24 border-t border-neutral-200 py-14 sm:py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              Companies I&apos;m Tracking
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Proof points in the market.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              A short list of companies that make the thesis concrete.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-2">
            {trackedCompanies.map((company) => (
              <article
                key={company.name}
                className="rounded-2xl border border-neutral-200 p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <Mark label={company.mark} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-medium tracking-tight">
                        {company.name}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {company.stage}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-neutral-950">
                      {company.focus}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-neutral-700 sm:text-base sm:leading-7">
                  {company.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="scroll-mt-24 border-t border-neutral-200 py-14 sm:py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              AI Operator Stack
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              The execution layer.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              These tools show how much work a small team can now compress.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {operatorStack.map((group) => (
              <div key={group.title}>
                <div className="flex items-end justify-between gap-4 border-b border-neutral-200 pb-4">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {group.title}
                  </h3>
                  <p className="text-sm text-neutral-500">Selected tools</p>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {group.tools.map((tool) => (
                    <article
                      key={tool.name}
                      className="rounded-2xl border border-neutral-200 p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <Mark label={tool.mark} />
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                            {tool.category}
                          </p>
                          <h4 className="mt-3 text-xl font-medium tracking-tight">
                            {tool.name}
                          </h4>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-700 sm:text-base sm:leading-7">
                        <div>
                          <p className="font-medium text-neutral-950">
                            What I&apos;m testing
                          </p>
                          <p className="mt-1">{tool.testing}</p>
                        </div>
                        <div>
                          <p className="font-medium text-neutral-950">My take</p>
                          <p className="mt-1">{tool.take}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-neutral-200 pt-14 sm:pt-20">
          <div className="max-w-3xl">
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              About
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              How I think about consumer health.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              I&apos;m Tyler Tanaka, an MBA candidate at MIT Sloan and a former
              investor at Translink Capital, where I helped build the firm&apos;s
              consumer health practice and worked on Series A investments across
              health and wellness.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              Before venture, I worked in M&amp;A diligence at EY, which shaped
              how I think about infrastructure, business models, and what sits
              underneath consumer-facing products.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              This site is where I work through the market shifts I keep coming
              back to. If anything here overlaps with what you&apos;re building or
              investing in, I&apos;d like to hear about it.
            </p>

            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="mailto:tanaka5@mit.edu"
                className="underline underline-offset-4"
                style={{ color: accent }}
              >
                tanaka5@mit.edu
              </a>
              <p>MIT Sloan - Class of 2026</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
