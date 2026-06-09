# Portfolio — Sydney Adjou-Moumouni

Portfolio statique généré avec [Next.js](https://nextjs.org), hébergé sur GitHub Pages.

URL : **https://sydgael.github.io/cv-online/**

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000/cv-online](http://localhost:3000/cv-online).

## Déploiement sur GitHub Pages

### 1. Activer GitHub Pages dans les settings du repo

- Aller dans **Settings → Pages**
- Source : **GitHub Actions**

### 2. Pusher le code

```bash
git add .
git commit -m "votre message"
git push
```

Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement sur chaque push vers `master` ou `main`. Il :

1. Installe les dépendances
2. Copie le CV PDF dans `public/`
3. Génère le site statique (`out/`)
4. Déploie sur GitHub Pages

Le site est disponible à `https://sydgael.github.io/cv-online/` quelques secondes après le push.

### Déploiement manuel (optionnel)

Depuis l'onglet **Actions** du repo, cliquer sur **Deploy to GitHub Pages** → **Run workflow**.

## Build local

```bash
npm run build
```

Le site statique est généré dans le dossier `out/`.
