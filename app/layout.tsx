import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://starda2casino.vercel.app/'

export const metadata: Metadata = {
  title:
    'Starda Casino официальный сайт — играть онлайн, рабочее зеркало и бонусы',
  description:
    'Starda Casino — официальный сайт и рабочее зеркало. Играйте онлайн в слоты, получайте бонусы за регистрацию. Старда казино — быстрый вход, честные выплаты и поддержка 24/7.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'starda casino',
    'starda casino официальный сайт',
    'starda casino зеркало',
    'старда казино',
    'старда казино играть',
    'старда казино онлайн',
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Starda Casino',
    title:
      'Starda Casino официальный сайт — играть онлайн, рабочее зеркало и бонусы',
    description:
      'Starda Casino — официальный сайт и рабочее зеркало. Играйте онлайн в слоты, получайте бонусы за регистрацию. Старда казино — быстрый вход, честные выплаты и поддержка 24/7.',
    locale: 'ru_RU',
    images: [
      {
        url: `${SITE_URL}images/hero.jpg`,
        width: 640,
        height: 480,
        alt: 'Starda Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Starda Casino официальный сайт — играть онлайн, рабочее зеркало и бонусы',
    description:
      'Starda Casino — официальный сайт и рабочее зеркало. Играйте онлайн в слоты, получайте бонусы за регистрацию. Старда казино — быстрый вход, честные выплаты и поддержка 24/7.',
    images: [`${SITE_URL}images/hero.jpg`],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="yandex-verification" content="61dea2e57579ab0c" />
        {/* Дополнительные пользовательские теги */}
        <meta name="author" content="Starda Casino" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="ru" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Starda Casino',
              url: SITE_URL,
              inLanguage: 'ru-RU',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
