import type { Metadata } from 'next';
import ProgressClient from './ProgressClient';

export const metadata: Metadata = {
  title: '学習レポート | マネぼうアカデミー',
  description: '累計講義数・連続学習日数・実績トロフィー・メモ一覧など、あなたの学習記録をまとめて確認できます。',
};

export default function ProgressPage() {
  return <ProgressClient />;
}
