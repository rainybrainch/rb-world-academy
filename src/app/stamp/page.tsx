import { type Metadata } from 'next';
import StampClient from './StampClient';

export const metadata: Metadata = {
  title: 'スタンプカード | マネぼうアカデミー',
  description: '対面授業のデイリーコードを入力してスタンプを集めよう。10個でクーポン獲得。実績バッジも解除できます。',
};

interface Props {
  searchParams: Promise<{ admin?: string }>;
}

export default async function StampPage({ searchParams }: Props) {
  const params = await searchParams;
  const isAdmin = params.admin === 'manebou';

  return <StampClient isAdmin={isAdmin} />;
}
