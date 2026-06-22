export const revalidate = 0;

import { countriesProfile, getCountryProfile, CountryId } from '@/data/countries-profile';
import { countriesList } from '@/data/countries-list';
import CountryProfileCard from '@/components/CountryProfileCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CountryPageProps {
  params: {
    countryId: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(countriesProfile).map((countryId) => ({
    countryId,
  }));
}

export async function generateMetadata({ params }: CountryPageProps) {
  const country = getCountryProfile(params.countryId as CountryId);

  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The country you are looking for does not exist.',
    };
  }

  return {
    title: `${country.countryName} - Country Academy`,
    description: `${country.countryName}の政治、経済、文化を詳しく学ぶ。${country.region}地域。`,
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  const country = getCountryProfile(params.countryId as CountryId);

  if (!country) {
    notFound();
  }

  const currentIndex = Object.keys(countriesProfile).indexOf(params.countryId);
  const prevCountry = currentIndex > 0 ? Object.keys(countriesProfile)[currentIndex - 1] : null;
  const nextCountry = currentIndex < Object.keys(countriesProfile).length - 1 ? Object.keys(countriesProfile)[currentIndex + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* パンくず */}
      <div className="mb-4 flex items-center gap-2 text-xs text-gray-600">
        <Link href="/countries" className="hover:text-blue-600 transition-colors">
          Country Academy
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-900">{country.countryName}</span>
      </div>

      {/* メイン */}
      <CountryProfileCard country={country} />

      {/* ナビゲーション */}
      <div className="mt-6 flex gap-3">
        {prevCountry && (
          <Link
            href={`/countries/${prevCountry}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-semibold text-center transition-colors"
          >
            ← 前へ
          </Link>
        )}
        <Link
          href="/countries"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors"
        >
          一覧に戻る
        </Link>
        {nextCountry && (
          <Link
            href={`/countries/${nextCountry}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-semibold text-center transition-colors"
          >
            次へ →
          </Link>
        )}
      </div>

      {/* 関連国リスト */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-3 text-gray-900">同じ地域の国々</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.values(countriesProfile)
            .filter(c => c.region === country.region && c.countryId !== country.countryId)
            .map(relatedCountry => (
              <Link
                key={relatedCountry.countryId}
                href={`/countries/${relatedCountry.countryId}`}
                className="p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="text-2xl mb-2">{relatedCountry.flagEmoji}</div>
                <p className="text-sm font-semibold text-gray-900">{relatedCountry.countryName}</p>
                <p className="text-xs text-gray-600">{relatedCountry.region}</p>
              </Link>
            ))}
        </div>
        {Object.values(countriesProfile).filter(c => c.region === country.region && c.countryId !== country.countryId).length === 0 && (
          <p className="text-sm text-gray-600">この地域には他の国はありません</p>
        )}
      </div>
    </div>
  );
}
