const operatorStack = [
  {
    title: "Sales & Marketing",
    tools: [
      {
        name: "Placeholder Tool",
        category: "Prospecting",
        testing: "How well it can automate outbound research and first-draft messaging.",
        take: "Placeholder view on workflow fit, output quality, and where human review still matters."
      },
      {
        name: "Placeholder Tool",
        category: "Campaign Operations",
        testing: "Whether it can reduce repetitive execution work without sacrificing brand quality.",
        take: "Placeholder view on ease of setup, team adoption, and measurable leverage."
      }
    ]
  },
  {
    title: "Finance & Analytics",
    tools: [
      {
        name: "Placeholder Tool",
        category: "Financial Planning",
        testing: "If it can speed up forecast creation, scenario planning, and reporting.",
        take: "Placeholder view on accuracy, auditability, and usefulness for decision-making."
      },
      {
        name: "Placeholder Tool",
        category: "Business Intelligence",
        testing: "How well it turns raw operating data into fast, trustworthy answers.",
        take: "Placeholder view on data clarity, reliability, and executive usefulness."
      }
    ]
  },
  {
    title: "Research & Diligence",
    tools: [
      {
        name: "Placeholder Tool",
        category: "Market Mapping",
        testing: "Whether it can accelerate landscape analysis and structured synthesis.",
        take: "Placeholder view on source quality, speed, and signal-to-noise ratio."
      },
      {
        name: "Placeholder Tool",
        category: "Company Analysis",
        testing: "How well it supports diligence workflows across product, market, and traction.",
        take: "Placeholder view on where it sharpens judgment versus where it still misses nuance."
      }
    ]
  },
  {
    title: "Founder Productivity",
    tools: [
      {
        name: "Placeholder Tool",
        category: "Meeting Workflow",
        testing: "If it can compress note-taking, follow-ups, and decision tracking.",
        take: "Placeholder view on daily usefulness, friction, and staying power."
      },
      {
        name: "Placeholder Tool",
        category: "Writing & Planning",
        testing: "How well it helps with memos, strategic thinking, and operating cadence.",
        take: "Placeholder view on thought partnership quality and practical time savings."
      }
    ]
  }
];

const trackedCompanies = [
  "Placeholder company in AI-native workflow software",
  "Placeholder company in consumer health infrastructure",
  "Placeholder company in consumer AI experiences",
  "Placeholder company in AI finance tooling"
];

const trends = [
  "How AI operators are reshaping lean company building across small teams.",
  "Where consumer AI products are crossing from novelty into repeat behavior.",
  "How vertical AI tools are changing the economics of sales, marketing, and finance work.",
  "What durable advantages emerge when software acts more like an informed teammate."
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
            Researching how AI changes company building, consumer behavior, and
            modern operating work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Tyler Tanaka is an MIT Sloan MBA and venture investor focused on
            AI-enabled company building, consumer health, consumer AI, and AI
            tools for sales, marketing, and finance.
          </p>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              AI Operator Stack
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Tools I'm testing across the modern operator workflow.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Placeholder research notes on products that may expand what lean
              teams can do in sales, finance, diligence, and day-to-day founder
              execution.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {operatorStack.map((group) => (
              <div key={group.title}>
                <div className="flex items-end justify-between gap-4 border-b border-neutral-200 pb-4">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {group.title}
                  </h3>
                  <p className="text-sm text-neutral-500">Placeholder tools</p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {group.tools.map((tool, index) => (
                    <article
                      key={`${group.title}-${index}`}
                      className="rounded-2xl border border-neutral-200 p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
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
                          <p className="font-medium text-neutral-950">
                            My take
                          </p>
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Companies I'm Tracking
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight">
                Placeholder watchlist across AI, consumer, and operating tools.
              </h2>
              <div className="mt-8 space-y-4">
                {trackedCompanies.map((company) => (
                  <div
                    key={company}
                    className="border-b border-neutral-200 pb-4 text-neutral-700"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Trends I&apos;m Following
              </p>
              <div className="mt-8 space-y-4">
                {trends.map((trend) => (
                  <div
                    key={trend}
                    className="rounded-2xl border border-neutral-200 p-5 text-neutral-700"
                  >
                    {trend}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-16 sm:pt-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              A simple place to publish research, notes, and evolving views.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700">
              Placeholder bio copy for Tyler Tanaka. This section can introduce
              investing background, research interests, operating perspective,
              and what kinds of themes or companies are most compelling right
              now.
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              Placeholder closing copy for contact details, writing cadence, or
              a short note on what this site will document over time.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
