# Sahâr Nail Care - Frontend

Application web moderne pour le salon de beauté Sahâr Nail Care, développée avec Next.js.

## Fonctionnalités

- 🌐 Support multilingue (Français/Arabe)
- 📱 PWA (Progressive Web App)
- 🎨 Design moderne avec Tailwind CSS
- 📅 Système de réservation avec FullCalendar
- 🔒 Interface d'administration sécurisée
- 📱 Responsive design

## Technologies utilisées

- Next.js 14
- React 18
- Tailwind CSS
- FullCalendar
- next-translate (i18n)
- next-pwa

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/hellomyworld123/new-front.git
cd new-frontend
```

2. Installer les dépendances :
```bash
npm install
```

3. Créer le fichier `.env.local` :
```
NEXT_PUBLIC_API_URL=https://sahar-backend.onrender.com
NEXT_PUBLIC_ADMIN_PASS=sahar123
```

4. Lancer le serveur de développement :
```bash
npm run dev
```

## Structure du projet

```
new-frontend/
├── public/
│   ├── locales/     # Fichiers de traduction
│   ├── manifest.json # Configuration PWA
│   └── assets/      # Images et médias
├── src/
│   ├── app/         # Pages Next.js
│   ├── components/  # Composants React
│   └── lib/         # Utilitaires
└── ...
```

## Déploiement

Le site est déployé sur Vercel. Les variables d'environnement sont configurées dans le dashboard Vercel.

## Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT.
