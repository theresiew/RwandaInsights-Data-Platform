import { statsCards, gdpData, sectorData, populationData } from "../data/rwandaData";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

const COLORS = ["#0066CC", "#00A550", "#FAD201", "#E53E3E"];

const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          🇷🇼 Rwanda National Dashboard
        </h1>
        <p className="text-gray-500 text-lg">
          Key economic and demographic indicators for Rwanda — updated 2023
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statsCards.map((card, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">{card.icon}</span>
              <span className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${card.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {card.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {card.change}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{card.title}</p>
            <p className="text-3xl font-bold text-gray-800">{card.value}</p>
          </div>
        ))}
      </div>

      {/* GDP + Population Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* GDP Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">GDP Growth Rate (%)</h2>
          <p className="text-sm text-gray-400 mb-6">Annual GDP growth 2015–2023</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={gdpData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="gdp"
                stroke="#0066CC"
                strokeWidth={3}
                dot={{ fill: "#0066CC", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Population Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Population Growth (Millions)</h2>
          <p className="text-sm text-gray-400 mb-6">Rwanda population 2015–2023</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={populationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[10, 15]} />
              <Tooltip />
              <Bar dataKey="population" fill="#00A550" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Sector + Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">GDP by Sector (%)</h2>
          <p className="text-sm text-gray-400 mb-6">Economic sector contribution 2023</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={sectorData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
              >
                {sectorData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Key Insights</h2>
          <p className="text-sm text-gray-400 mb-6">Notable trends and observations</p>
          <div className="space-y-4">
            {[
              { icon: "📈", title: "Strong Recovery", desc: "Rwanda bounced back with 10.9% GDP growth in 2021 after COVID-19 caused a -3.4% contraction in 2020.", color: "bg-blue-50 border-blue-200" },
              { icon: "👥", title: "Growing Population", desc: "Population grew from 11.3M in 2015 to 14M in 2023, a 24% increase over 8 years.", color: "bg-green-50 border-green-200" },
              { icon: "🏥", title: "Better Health", desc: "Life expectancy increased from 66 to 71 years between 2015 and 2023.", color: "bg-yellow-50 border-yellow-200" },
              { icon: "📚", title: "Education Progress", desc: "Primary school enrollment reached 98%, one of the highest rates in East Africa.", color: "bg-purple-50 border-purple-200" },
            ].map((insight, i) => (
              <div key={i} className={`flex gap-3 p-3 rounded-xl border ${insight.color}`}>
                <span className="text-2xl">{insight.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{insight.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{insight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;