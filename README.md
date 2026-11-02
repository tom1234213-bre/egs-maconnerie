# EGS Maçonnerie : site web

Site vitrine d'EGS Maçonnerie (Abdel Guenniche), maçonnerie, charpente et rénovation à Salon-de-Provence.
Next.js 16 (App Router), entièrement statique, déployé sur Vercel.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # vérifie que tout compile
```

## Informations de l'entreprise

Reprises de l'ancien site Wix (egsabdelguenniche.wixsite.com/egsentreprise13) et de la fiche
maconnerieinfo.com : téléphone, e-mail, SIRET, adresse, parcours, prestations, zone. Tout est dans `lib/site.ts`.

Reste à confirmer avec l'entreprise :

| Élément | Où le changer |
| --- | --- |
| Capital social et greffe (RCS) de la SAS EGS : absents du registre public | `lib/site.ts` (`legal`) |
| Communes des réalisations (vraies photos, lieux inconnus) | `lib/projects.ts` |
| Engagements (48 h, 30+ maisons…) | `lib/content.ts` |
| Domaine définitif | variable `NEXT_PUBLIC_SITE_URL` sur Vercel |

Les réalisations et le portrait utilisent les vraies photos d'EGS (`c-*.jpg`, `abdel.jpg`, reprises de
l'ancien site Wix, en basse définition). Le reste est en photos libres (Unsplash, plus une charpente du
domaine public). Pour ajouter des photos : déposer les fichiers dans
`public/images/` (en .jpg), puis lancer `npm run images` pour mettre à jour `lib/images.ts`.

## Formulaire de devis

`/devis` envoie la demande à `/api/devis`. Pour recevoir les demandes par e-mail,
définir sur Vercel :

- `RESEND_API_KEY` : clé Resend
- `DEVIS_TO` : adresse qui reçoit les demandes
- `DEVIS_FROM` : expéditeur sur un domaine vérifié (ex. `Site EGS <devis@egs-maconnerie.fr>`)

Sans ces variables, le formulaire ouvre la messagerie du visiteur avec la demande pré-remplie.

## SEO

- Une page par savoir-faire (`/savoir-faire/...`) et par commune (`/zones-intervention/...`)
- Données structurées : entreprise locale (GeneralContractor), services, FAQ, fil d'Ariane
- `sitemap.xml`, `robots.txt`, image de partage générée, métadonnées par page
- Après la mise en ligne sur le domaine définitif : déclarer le site dans Google Search Console
  et créer la fiche Google Business Profile (c'est elle qui compte le plus pour « maçon Salon-de-Provence »)

## Direction artistique

- Couleurs : chaux `#f2eee7`, pierre `#d8ccb7`, basalte `#171512`, ocre `#9a4b22` (accent rare)
- Typographies : Novecento Sans Wide (titres courts, repères), Creato Display (textes), licences libres
- Signature : le mur qui se monte assise par assise à l'ouverture, et le fil à plomb
- Effets inspirés de React Bits (SplitText, CountUp, SpotlightCard, Masonry, LogoLoop),
  joués une fois à l'apparition, jamais pilotés par le défilement, coupés si l'utilisateur
  a demandé à réduire les animations
