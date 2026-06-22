export const revalidate = 0;

import Link from 'next/link';
import { countriesList } from '@/data/countries-list';

export const metadata = {
  title: 'Country Academy - 世界の国々を学ぶ',
  description: '世界の国々の政治体制、経済、文化を深く理解する Country Academy',
};

export default function CountriesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl">🌍</span>
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'rgba(26,26,46,0.9)' }}
          >
            Country Academy
          </h1>
        </div>
        <p
          className="text-sm text-gray-600"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          世界の国々の政治・経済・文化・言語を深く理解し、グローバルな視点を養います。
          各国の詳細情報をセクション別に学習できます。
        </p>
      </div>

      {/* グリッド表示 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {countriesList.map((country) => {
          // カウントリーレポートはスキップ（外部リンク）
          if (country.id === 'countries-report') {
            return (
              <a
                key={country.id}
                href={country.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="w-full rounded-2xl overflow-hidden border-2 relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    aspectRatio: '1/1',
                    borderColor: 'rgba(102,126,234,0.2)',
                    background: 'linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.05) 100%)',
                    boxShadow: '0 4px 12px rgba(26,122,166,0.2)',
                  }}
                >
                  <img
                    src={country.icon}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-black/40 transition-all duration-300 pointer-events-none"
                    style={{ background: 'transparent' }}
                  />
                </div>
                <p className="text-xs font-bold mt-2 text-center leading-tight" style={{ color: 'rgba(26,26,46,0.75)' }}>
                  {country.name}
                </p>
              </a>
            );
          }

          return (
            <Link
              key={country.id}
              href={`/countries/${country.id}`}
              className="group"
            >
              <div
                className="w-full rounded-2xl overflow-hidden border-2 relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  aspectRatio: '1/1',
                  borderColor: 'rgba(102,126,234,0.2)',
                  background: 'linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.05) 100%)',
                  boxShadow: '0 4px 12px rgba(26,122,166,0.2)',
                }}
              >
                <img
                  src={country.icon}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-black/40 transition-all duration-300 pointer-events-none"
                  style={{ background: 'transparent' }}
                />
              </div>
              <p className="text-xs font-bold mt-2 text-center leading-tight" style={{ color: 'rgba(26,26,46,0.75)' }}>
                {country.name}
              </p>
            </Link>
          );
        })}
      </div>

      {/* 説明セクション */}
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        <div className="rounded-lg p-4 bg-blue-50 border border-blue-200">
          <h3 className="font-bold text-blue-900 mb-2">政治体制</h3>
          <p className="text-sm text-blue-800">
            各国の政府構造、統治制度、歴史的背景について深く学びます。
          </p>
        </div>
        <div className="rounded-lg p-4 bg-green-50 border border-green-200">
          <h3 className="font-bold text-green-900 mb-2">経済・産業</h3>
          <p className="text-sm text-green-800">
            GDP、主要産業、国際貿易、経済的課題について学習します。
          </p>
        </div>
        <div className="rounded-lg p-4 bg-purple-50 border border-purple-200">
          <h3 className="font-bold text-purple-900 mb-2">文化・言語</h3>
          <p className="text-sm text-purple-800">
            伝統文化、言語体系、現代文化、観光地について探索します。
          </p>
        </div>
      </div>
    </div>
  );
}
