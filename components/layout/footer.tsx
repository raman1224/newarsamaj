// components/layout/footer.tsx
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-muted py-12 px-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img src="/g5.png" alt="Dangol AI Logo" className="h-8 w-8 rounded-full" />
            <div>
              <p className="text-sm font-medium">{t('footer.developedBy')}</p>
              <a
                href="https://raman1224.github.io/DANGOL_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                {t('footer.visit')}
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground max-w-md">
              "{t('footer.quote')}"
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="#" className="text-muted-foreground hover:text-primary">
                {t('footer.social.facebook')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                {t('footer.social.instagram')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                {t('footer.social.youtube')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                {t('footer.social.twitter')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}