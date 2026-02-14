'use client';

import { useState, useMemo } from 'react';
import { pigeons, conservationColors, Pigeon } from '@/data/pigeons';
import Image from 'next/image';

const regions = ['All', ...Array.from(new Set(pigeons.map(p => p.region)))];
const conservationStatuses = ['All', 'Least Concern', 'Near Threatened', 'Vulnerable', 'Endangered', 'Critically Endangered', 'Extinct'];

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedConservation, setSelectedConservation] = useState('All');
  const [selectedPigeon, setSelectedPigeon] = useState<Pigeon | null>(null);

  const filteredPigeons = useMemo(() => {
    return pigeons.filter(pigeon => {
      const matchesSearch = 
        pigeon.name.toLowerCase().includes(search.toLowerCase()) ||
        pigeon.scientificName.toLowerCase().includes(search.toLowerCase()) ||
        pigeon.description.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || pigeon.region === selectedRegion;
      const matchesConservation = selectedConservation === 'All' || pigeon.conservation === selectedConservation;
      return matchesSearch && matchesRegion && matchesConservation;
    });
  }, [search, selectedRegion, selectedConservation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              🕊️ Pigeon World
            </h1>
            <p className="text-slate-400 mt-2">Discover the beautiful diversity of pigeons and doves</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              placeholder="Search pigeons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              {regions.map(region => (
                <option key={region} value={region} className="bg-slate-800">{region}</option>
              ))}
            </select>
            <select
              value={selectedConservation}
              onChange={(e) => setSelectedConservation(e.target.value)}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              {conservationStatuses.map(status => (
                <option key={status} value={status} className="bg-slate-800">{status}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300">
            📊 {filteredPigeons.length} species shown
          </span>
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300">
            ✓ {pigeons.filter(p => p.conservation === 'Least Concern').length} Least Concern
          </span>
          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300">
            ⚠️ {pigeons.filter(p => ['Vulnerable', 'Near Threatened'].includes(p.conservation)).length} Threatened
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-500/20 text-gray-300">
            † {pigeons.filter(p => p.conservation === 'Extinct').length} Extinct
          </span>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPigeons.map((pigeon) => (
            <div
              key={pigeon.id}
              onClick={() => setSelectedPigeon(pigeon)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={pigeon.image}
                  alt={pigeon.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${conservationColors[pigeon.conservation]}`}>
                  {pigeon.conservation}
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-white mb-1">{pigeon.name}</h2>
                <p className="text-purple-300 text-sm italic mb-2">{pigeon.scientificName}</p>
                <p className="text-slate-400 text-sm line-clamp-2">{pigeon.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <span>📍 {pigeon.region}</span>
                  <span>•</span>
                  <span>📏 {pigeon.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPigeons.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-slate-500">🕊️ No pigeons found</p>
            <p className="text-slate-600 mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedPigeon && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPigeon(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPigeon(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video relative">
              <Image
                src={selectedPigeon.image}
                alt={selectedPigeon.name}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            <div className="p-6 -mt-16 relative">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${conservationColors[selectedPigeon.conservation]}`}>
                {selectedPigeon.conservation}
              </span>
              <h2 className="text-3xl font-bold text-white mb-1">{selectedPigeon.name}</h2>
              <p className="text-purple-400 italic mb-4">{selectedPigeon.scientificName}</p>
              <p className="text-slate-300 leading-relaxed mb-6">{selectedPigeon.description}</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-slate-500 text-sm">Region</p>
                  <p className="text-white font-medium">{selectedPigeon.region}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-slate-500 text-sm">Size</p>
                  <p className="text-white font-medium">{selectedPigeon.size}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-slate-500 text-sm">Habitat</p>
                  <p className="text-white font-medium text-sm">{selectedPigeon.habitat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>Made with 🕊️ love for pigeons</p>
        <p className="mt-1">Images from Wikimedia Commons</p>
      </footer>
    </div>
  );
}
