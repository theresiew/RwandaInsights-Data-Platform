import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {
  educationEnrollmentData,
  gdpGrowthData,
  gdpSectorData,
  insightPoints,
  keyStats,
  lifeExpectancyData,
  populationData,
} from "./data/rwandaData";

const sectorColors = ["#f59e0b", "#14b8a6", "#fb7185", "#38bdf8"];

const chartCardClass =
  "rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft";

function formatPercent(value) {
  return `${value}%`;
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <section className="px-6 pb-8 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {keyStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-white backdrop-blur"
              >
                <p className="text-sm text-slate-300">{stat.label}</p>
                <h3 className="mt-3 text-3xl font-semibold">{stat.value}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {stat.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
                Interactive Dashboard
              </p>
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">
                Explore Rwanda&apos;s development trends through connected visual
                stories.
              </h2>
              <p className="text-base leading-7 text-slate-600">
                Each section focuses on a different dimension of national
                progress, combining clear charts with context that makes the
                numbers meaningful.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <article id="economy" className={chartCardClass}>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                      Economy
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                      GDP growth trend
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                    2015-2023
                  </span>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={gdpGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                      <XAxis dataKey="year" stroke="#475569" />
                      <YAxis stroke="#475569" tickFormatter={formatPercent} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Line
                        type="monotone"
                        dataKey="growth"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "#f59e0b" }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </article>

              <article id="population" className={chartCardClass}>
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Population
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    Population growth
                  </h3>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={populationData}>
                      <defs>
                        <linearGradient id="populationFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.45} />
                          <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                      <XAxis dataKey="year" stroke="#475569" />
                      <YAxis stroke="#475569" tickFormatter={(value) => `${value}M`} />
                      <Tooltip formatter={(value) => `${value}M`} />
                      <Area
                        type="monotone"
                        dataKey="population"
                        stroke="#0f766e"
                        fill="url(#populationFill)"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </article>

              <article id="health" className={chartCardClass}>
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                    Health
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    Life expectancy improvements
                  </h3>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={lifeExpectancyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                      <XAxis dataKey="year" stroke="#475569" />
                      <YAxis stroke="#475569" />
                      <Tooltip formatter={(value) => `${value} years`} />
                      <Bar dataKey="expectancy" radius={[10, 10, 0, 0]} fill="#fb7185" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </article>

              <article id="education" className={chartCardClass}>
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                    Education
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    Enrollment by level
                  </h3>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={educationEnrollmentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                      <XAxis dataKey="year" stroke="#475569" />
                      <YAxis stroke="#475569" tickFormatter={formatPercent} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Line type="monotone" dataKey="primary" stroke="#0ea5e9" strokeWidth={3} />
                      <Line type="monotone" dataKey="secondary" stroke="#f97316" strokeWidth={3} />
                      <Line type="monotone" dataKey="tertiary" stroke="#8b5cf6" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white shadow-soft backdrop-blur">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Economic Structure
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  GDP breakdown by sector
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={gdpSectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={108}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {gdpSectorData.map((entry, index) => (
                        <Cell key={entry.name} fill={sectorColors[index % sectorColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-amber-300 to-orange-400 p-6 shadow-soft">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-950/70">
                  Key Insights
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  What the data suggests
                </h3>
              </div>

              <div className="grid gap-4">
                {insightPoints.map((point, index) => (
                  <article
                    key={point}
                    className="rounded-[1.4rem] bg-slate-950/85 p-5 text-slate-100"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                      Insight {index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-200">{point}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
