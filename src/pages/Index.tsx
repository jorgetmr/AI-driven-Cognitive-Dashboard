"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, MessageSquare, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', score: 65 },
  { name: 'Tue', score: 59 },
  { name: 'Wed', score: 80 },
  { name: 'Thu', score: 81 },
  { name: 'Fri', score: 56 },
  { name: 'Sat', score: 95 },
  { name: 'Sun', score: 90 },
];

const Index = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1">Your cognitive wellness overview for today.</p>
        </div>
        <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
          <Zap size={16} className="fill-indigo-700" />
          <span>5 Day Streak!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat Cards */}
        <motion.div variants={item} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Brain className="text-blue-600" size={24} />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Cognitive Score</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">842</p>
        </motion.div>

        <motion.div variants={item} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-xl">
              <Activity className="text-purple-600" size={24} />
            </div>
            <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-full">Target: 45m</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Mindful Minutes</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">32m</p>
        </motion.div>

        <motion.div variants={item} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-xl">
              <MessageSquare className="text-orange-600" size={24} />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+3</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Reflections</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
        </motion.div>

        <motion.div variants={item} className="bg-gradient-to-br from-indigo-600 to-violet-600 p-6 rounded-2xl shadow-lg text-white">
          <h3 className="text-indigo-100 text-sm font-medium mb-1">Daily Challenge</h3>
          <p className="text-lg font-bold mb-4">Pattern Recognition</p>
          <Link to="/puzzles" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
            Start Now <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <motion.div variants={item} className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Cognitive Performance</h3>
            <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-1 text-slate-600 focus:ring-0">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1e293b' }}
                />
                <Area type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recent Activity / Suggestions */}
        <motion.div variants={item} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4">Recommended</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                  <Activity size={16} />
                </div>
                <span className="font-medium text-slate-700">Breathing</span>
              </div>
              <p className="text-sm text-slate-500">Take 2 minutes to reset your focus.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                  <MessageSquare size={16} />
                </div>
                <span className="font-medium text-slate-700">Reflection</span>
              </div>
              <p className="text-sm text-slate-500">Log your thoughts on today's challenge.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;