'use client';

import { CountryProfile } from '@/data/countries-profile';
import { useState } from 'react';

interface CountryProfileCardProps {
  country: CountryProfile;
  onClose?: () => void;
}

export default function CountryProfileCard({ country, onClose }: CountryProfileCardProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{country.flagEmoji}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{country.countryName}</h2>
              {country.countryNameEnglish && (
                <p className="text-sm text-gray-600">{country.countryNameEnglish}</p>
              )}
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
          )}
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {country.countryCode}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
              {country.region}
            </span>
          </div>
        </div>
      </div>

      {/* セクション一覧 */}
      <div className="divide-y">
        {country.sections.map((section) => (
          <div key={section.id} className="border-b border-gray-100 last:border-b-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
                    {section.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{section.title}</h3>
              </div>
              <div
                className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                  expandedSection === section.id ? 'rotate-180' : ''
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </button>

            {/* 展開内容 */}
            {expandedSection === section.id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* フッター */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          全 {country.sections.length} セクション
        </p>
      </div>
    </div>
  );
}
