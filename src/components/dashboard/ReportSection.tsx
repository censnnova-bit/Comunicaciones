import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from 'recharts';
import { TrendingUp, Users, Award, Target, Share2, BarChart3 } from 'lucide-react';

const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];
const PIE_COLORS = ['#1877F2', '#E1306C', '#000000', '#0A66C2', '#00F2EA'];

// Data for Community Growth
const communityData = [
  { year: '2022', followers: 85672 },
  { year: '2023', followers: 90180 },
  { year: '2024', followers: 94768 },
];

// Data for Engagement
const engagementData = [
  { year: '2022', rate: 0.45 },
  { year: '2023', rate: 0.51 },
  { year: '2024', rate: 0.44 },
];

const benchmarkData = [
  { name: 'CENS', value: 0.44, fill: '#82ca9d' },
  { name: 'ESSA', value: 0.33, fill: '#8884d8' },
  { name: 'EPM', value: 0.09, fill: '#8884d8' },
  { name: 'Celsia', value: 0.14, fill: '#8884d8' },
];

const contentData = [
  { name: 'Facebook', value: 51, fill: '#1877F2' },
  { name: 'Instagram', value: 22, fill: '#E1306C' },
  { name: 'X', value: 15, fill: '#000000' },
  { name: 'LinkedIn', value: 9, fill: '#0A66C2' },
  { name: 'TikTok', value: 3, fill: '#000000' }, // TikTok black/custom
];

const dependenciesData = [
  { name: 'Gestión Comercial', value: 330 },
  { name: 'Gerencia General', value: 261 },
  { name: 'Distribución', value: 240 },
  { name: 'Servicios Corp', value: 56 },
  { name: 'Gestión O...', value: 40 },
  { name: 'Proyectos', value: 45 },
  { name: 'Subestaciones', value: 34 },
];

export const ReportSection = () => {
  return (
    <div className="space-y-8">
        
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">CENS Annual Social Media Report</h2>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">2024 Analysis</span>
      </div>

      {/* Row 1: Community Growth & Engagement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Community Growth */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <div className="flex justify-between items-start mb-6">
               <div>
                   <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                     <Users className="text-blue-500" size={20} />
                     Crecimiento de la comunidad
                   </h3>
                   <p className="text-sm text-gray-500 mt-1">Total followers across all platforms</p>
               </div>
               <div className="text-right">
                   <div className="text-xs text-gray-500">Meta 2025</div>
                   <div className="text-xl font-bold text-green-600">99,506</div>
                   <div className="text-xs text-green-600 font-medium">+5% Growth Target</div>
               </div>
           </div>
           
           <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={communityData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                 <XAxis dataKey="year" axisLine={false} tickLine={false} />
                 <YAxis axisLine={false} tickLine={false} />
                 <Tooltip cursor={{fill: '#f3f4f6'}} />
                 <Bar dataKey="followers" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={60}>
                    {communityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
           <div className="mt-4 p-4 bg-gray-50 rounded-lg flex justify-between items-center">
               <div className="text-sm">
                   <span className="block text-gray-500">Meta Clientes en RRSS</span>
                   <span className="font-bold text-gray-800">127,200</span>
                   <span className="text-xs text-gray-400 ml-1">(40% of 318,000)</span>
               </div>
                <TrendingUp className="text-green-500" />
           </div>
        </div>

        {/* Engagement RRSS */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
               <div>
                   <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                     <Award className="text-purple-500" size={20} />
                     Engagement RRSS
                   </h3>
                   <p className="text-sm text-gray-500 mt-1">Interaction & Commitment Level</p>
               </div>
           </div>

           <div className="grid grid-cols-3 gap-4 mb-4">
               {engagementData.map((item, i) => (
                   <div key={i} className="text-center p-3 rounded-lg bg-blue-50/50">
                       <span className="block text-xs text-gray-500 mb-1">{item.year}</span>
                       <span className="text-xl font-bold text-blue-700">{item.rate}%</span>
                   </div>
               ))}
           </div>
           
           <div className="h-40">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={engagementData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                 <XAxis dataKey="year" axisLine={false} tickLine={false} />
                 <YAxis axisLine={false} tickLine={false} domain={[0, 0.6]} />
                 <Tooltip />
                 <Area type="monotone" dataKey="rate" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
               </AreaChart>
             </ResponsiveContainer>
           </div>

           <div className="grid grid-cols-2 gap-4 mt-4 text-center">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="text-xs text-green-600 mb-1">Meta 2025</div>
                  <div className="font-bold text-green-800">0.46%</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="text-xs text-purple-600 mb-1">Meta Ambiciosa</div>
                  <div className="font-bold text-purple-800">0.55%</div>
              </div>
           </div>
        </div>

      </div>

      {/* Row 2: Benchmark & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Content Distribution (Pie Chart) - Takes 1/3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Share2 className="text-orange-500" size={20} />
                Contenido RRSS 2024
            </h3>
            <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={contentData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {contentData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <div className="text-2xl font-bold">{contentData.reduce((a, b) => a + b.value, 0)}%</div>
                    <div className="text-xs text-gray-500">Distribution</div>
                </div>
            </div>
            
        </div>

         {/* Benchmark - Takes 2/3 */}
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Target className="text-red-500" size={20} />
                Benchmark Engagement RRSS 2024
            </h3>
            <p className="text-sm text-gray-500 mb-6">Comparativa con empresas del sector</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benchmarkData.map((item, index) => (
                    <div key={index} className={`p-4 rounded-xl border ${item.name === 'CENS' ? 'bg-green-50 border-green-200 shadow-sm' : 'bg-white border-gray-100'}`}>
                        <div className="text-sm text-gray-500 mb-2">{item.name}</div>
                        <div className={`text-3xl font-bold ${item.name === 'CENS' ? 'text-green-600' : 'text-gray-800'}`}>
                            {item.value}%
                        </div>
                        <div className="text-xs text-gray-400 mt-2">Engagement Rate</div>
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Industry Insight</span>
                <p className="text-sm text-gray-700 mt-1">
                    Para empresas de energía, el promedio general en 2024 fue de <span className="font-bold">0.22%</span>. CENS se mantiene por encima del promedio del sector.
                </p>
            </div>
        </div>
      </div>

      {/* Row 3: Dependencies */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-indigo-500" size={20} />
                Dependencias en las RRSS
            </h3>
            
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={dependenciesData.sort((a, b) => b.value - a.value)}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.3} />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" width={120} tick={{fontSize: 12}} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20}>
                           {dependenciesData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'][index % 5] || '#e0e7ff'} />
                           ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Top 20 Temáticas</h4>
                <div className="flex flex-wrap gap-2">
                    {["Gestión Comercial", "Gerencia General", "Distribución", "Servicios Coporativos", "Proyectos", "Subestaciones", "Inversión", "Trabajos", "Desconexiones", "Usuarios", "SOMOS", "Reino de...", "Contenido...", "Am..."].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200 transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
      </div>

    </div>
  );
};
