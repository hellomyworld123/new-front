import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const { locale } = router

  const toggleLocale = () => {
    const newLocale = locale === 'fr' ? 'ar' : 'fr'
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <header className="fixed w-full bg-noir/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Sahâr Nail Care" width={50} height={50} />
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gold hover:text-rose transition-colors">
            Accueil
          </Link>
          <Link href="/admin" className="text-gold hover:text-rose transition-colors">
            Admin
          </Link>
          <button
            onClick={toggleLocale}
            className="text-gold hover:text-rose transition-colors"
          >
            {locale === 'fr' ? 'عربي' : 'FR'}
          </button>
        </div>
      </nav>
    </header>
  )
} 