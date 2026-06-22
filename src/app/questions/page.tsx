import type { Metadata } from 'next';
import QuestionsClient from './QuestionsClient';

export const metadata: Metadata = {
  title: 'よくある質問 | マネぼうアカデミー',
  description: 'マネぼうアカデミーのよくある質問。アプリの使い方・進捗保存・NISA・投資・実績・メモ・シェア機能について解説します。',
};

export default function QuestionsPage() {
  return <QuestionsClient />;
}
