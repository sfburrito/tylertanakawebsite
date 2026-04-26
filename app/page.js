function Mark({ label }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-medium tracking-tight text-neutral-950">
      {label}
    </div>
  );
}

const operatorStack = [
  {
    title: "Sales & Marketing",
    tools: [
      {
        name: "Clay",
        mark: "CL",
        category: "GTM automation",
        testing:
          "Signal-based prospecting, enrichment, and workflow automation that can replace a surprising amount of SDR and growth ops work.",
        take:
          "The strongest AI-native go-to-market tool in market today. It matters most when the ICP is tight and the workflow is precise, not when teams use it as a generic personalization engine."
      },
      {
        name: "Runway",
        mark: "RW",
        category: "Creative production",
        testing:
          "Fast creative iteration for ad concepts, founder-led content, and landing page tests.",
        take:
          "Best for speed and experimentation. It expands the volume of creative testing, but distribution and taste still determine whether the output compounds."
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
          "First-pass help on cohort analysis, scenario work, KPI framing, and operator or investor memos.",
        take:
          "High leverage for synthesis and framing. Useful for getting to the right questions faster, but final judgment still belongs to the operator holding the numbers."
      },
      {
        name: "Hex",
        mark: "HX",
        category: "Collaborative analytics",
        testing:
          "A faster path from raw data to exploratory analysis and decision-ready reporting.",
        take:
          "Compelling for lean teams that need answers before they need a heavy data stack. The blend of notebooks, BI, and lightweight apps feels directionally right."
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
          "Excellent for acceleration. Strong starting point for diligence, but not a replacement for primary sources or original judgment."
      },
      {
        name: "NotebookLM",
        mark: "NB",
        category: "Source-grounded research",
        testing:
          "Synthesis across transcripts, PDFs, decks, and reports while staying anchored to the source set.",
        take:
          "One of the better tools for research discipline. Most useful when the job is comparing documents without drifting away from what the source material actually says."
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
          "Long-form writing, strategy articulation, workflow design, and structured thinking around ambiguous operating questions.",
        take:
          "Still among the best tools for drafting and reasoning through messy problems. Strongest when the work needs structure, not just speed."
      },
      {
        name: "Granola",
        mark: "GR",
        category: "Meeting workflow",
        testing:
          "Lower-friction note capture and better follow-through across small teams running many parallel threads.",
        take:
          "The real win is cleaner recall and lower coordination drag. For small teams, that can matter more than another dashboard."
      }
    ]
  }
];

const trackedCompanies = [
  {
    name: "Nourish",
    mark: "NO",
    stage: "Series B",
    focus: "Insurance-covered nutrition care",
    note:
      "One of the strongest food-as-medicine companies in market: payer-aligned, consumer-friendly, and increasingly important as a GLP-1 companion and AI-enabled care platform."
  },
  {
    name: "Fay",
    mark: "FY",
    stage: "Series B",
    focus: "Dietitian marketplace and workflow layer",
    note:
      "A useful lens on how consumer distribution, provider supply, and vertical software can reinforce one another in nutrition care."
  },
  {
    name: "Function Health",
    mark: "FH",
    stage: "Series B",
    focus: "Consumer diagnostics and medical intelligence",
    note:
      "A strong bet that direct-to-consumer diagnostics become the front door to longitudinal health management, with AI as the interpretation layer."
  },
  {
    name: "Superpower",
    mark: "SP",
    stage: "Series A",
    focus: "Health super-app and biomarker membership",
    note:
      "A product-first attempt to package testing, interpretation, and action into a consumer health operating system rather than a loose bundle of point solutions."
  },
  {
    name: "Visana Health",
    mark: "VH",
    stage: "Series A",
    focus: "Virtual-first women's health medical home",
    note:
      "Notable for treating women's health as longitudinal care spanning cardiometabolic, hormonal, and chronic condition management rather than a narrow point solution."
  },
  {
    name: "Twentyeight Health",
    mark: "28",
    stage: "Series A",
    focus: "Insurance-enabled women's health access",
    note:
      "A good example of what happens when telehealth, Medicaid coverage, and a simpler consumer experience are combined in an underserved category."
  }
];

const trends = [
  {
    title: "AI-native companies built on rented infrastructure",
    detail:
      "Small teams can now rent clinical, payments, logistics, and back-office infrastructure instead of building it. That shifts advantage toward distribution, product judgment, and operating speed."
  },
  {
    title: "The GLP-1 companion layer beyond prescription access",
    detail:
      "The more durable companies may be built around adherence, side-effect management, nutrition, behavior change, and longitudinal outcomes, not just prescription access."
  },
  {
    title: "Insurance-backed consumer health experiences",
    detail:
      "A strong pattern in consumer health is software that feels direct-to-consumer on the front end but is economically anchored by payer, employer, or insurance reimbursement."
  },
  {
    title: "Women's health broadening into continuous care",
    detail:
      "The category is moving from point solutions toward broader care models spanning hormonal, metabolic, reproductive, and preventative health in one relationship."
  },
  {
    title: "Diagnostics and longitudinal data as the consumer wedge",
    detail:
      "Lab testing, imaging, and wearables are becoming more consumer-facing. The real question is which companies can turn fragmented data into trusted, repeatable action."
  },
  {
    title: "Vertical AI that amplifies experts rather than replaces them",
    detail:
      "In healthcare, the most durable AI products may be the ones that make clinicians, dietitians, and operators dramatically more productive without weakening trust or accountability."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <section className="border-b border-neutral-200 pb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            tylertanaka.com
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            AI is making it cheaper than ever to build companies. I'm focused on
            what still creates real, defensible advantage, especially in
            consumer health.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Tyler Tanaka is an MIT Sloan MBA focused on consumer health,
            consumer AI, and AI tools reshaping sales, marketing, finance, and
            analytics.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            This is a public research notebook: working notes on small AI-native
            teams, software leverage, and where durable advantage still comes
            from distribution, trust, workflow depth, and wedge quality.
          </p>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              AI Operator Stack
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Tools I keep coming back to when evaluating AI-native execution.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              The core question is simple: if AI makes company building cheaper,
              what still matters? This stack reflects the tools that feel most
              relevant in practice.
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

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {group.tools.map((tool) => (
                    <article
                      key={tool.name}
                      className="rounded-2xl border border-neutral-200 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <Mark label={tool.mark} />
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                            {tool.category}
                          </p>
                          <h4 className="mt-3 text-xl font-medium tracking-tight">
                            {tool.name}
                          </h4>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-700">
                        <div>
                          <p className="font-medium text-neutral-950">
                            What I'm testing
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

        <section className="border-t border-neutral-200 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Companies I'm Tracking
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Selected Series A and B consumer health companies on my radar.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Not a market map. A short list of companies that clarify where
              consumer health is becoming more longitudinal, more software-led,
              and more tightly tied to payer or clinical infrastructure.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {trackedCompanies.map((company) => (
              <article
                key={company.name}
                className="rounded-2xl border border-neutral-200 p-6"
              >
                <div className="flex items-start gap-4">
                  <Mark label={company.mark} />
                  <div>
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
                <p className="mt-5 text-sm leading-6 text-neutral-700">
                  {company.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-200 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Trends I'm Following
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                Themes that matter more than any single company.
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                The company list is a snapshot. The trend work is the deeper
                layer: recurring patterns that shape what should exist, what
                scales, and where real edges may emerge.
              </p>
            </div>

            <div className="space-y-6">
              {trends.map((trend, index) => (
                <article
                  key={trend.title}
                  className="border-l border-neutral-200 pl-6"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-neutral-950">
                    {trend.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">
                    {trend.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-16 sm:pt-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Building a public research process around AI-native operators and
              consumer health.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700">
              I'm Tyler Tanaka, an MIT Sloan MBA using this site to document the
              companies, tools, and market shifts that matter most to me. My
              focus is consumer health, especially where software, clinical
              infrastructure, and AI can improve access, lower coordination
              costs, and create better user experiences.
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              I care most about what happens when small teams can rent more of
              the operating stack, move faster with AI, and still build durable
              businesses through distribution, trust, and workflow depth. This
              site is meant to stay polished, but intentionally unfinished.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

