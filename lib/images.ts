// Dimensions des photos (générées), pour next/image et la grille.
export const imageSizes: Record<string, [number, number]> = {
 "chantier-coulage": [
  2200,
  3301
 ],
 "chantier-crepuscule": [
  2200,
  1652
 ],
 "chantier-ombres": [
  2200,
  1467
 ],
 "geste-outils": [
  2200,
  1461
 ],
 "geste-taille": [
  2200,
  1465
 ],
 "geste-truelle": [
  2200,
  3300
 ],
 "hero-geste": [
  2200,
  1467
 ],
 "hero": [
  2200,
  1650
 ],
 "m-calcaire": [
  2200,
  1467
 ],
 "m-enduit": [
  2200,
  1650
 ],
 "m-escalier": [
  2200,
  2750
 ],
 "m-moellons": [
  2200,
  1654
 ],
 "m-plate": [
  2200,
  2933
 ],
 "m-seche": [
  2200,
  1522
 ],
 "m-taille": [
  2200,
  1467
 ],
 "p-bassin": [
  2200,
  3300
 ],
 "p-calade": [
  2200,
  3300
 ],
 "p-coupole": [
  2200,
  1467
 ],
 "p-dalle": [
  2200,
  1467
 ],
 "p-escalier-vegetal": [
  2200,
  2933
 ],
 "p-escalier": [
  2200,
  3298
 ],
 "p-facade": [
  2200,
  1467
 ],
 "p-marches": [
  2200,
  3298
 ],
 "p-mas": [
  2200,
  3300
 ],
 "p-piscine": [
  2200,
  3300
 ],
 "p-restanques": [
  2200,
  1467
 ],
 "p-tonnelle": [
  2200,
  3298
 ],
 "r-cypres": [
  2200,
  1467
 ],
 "r-gordes": [
  2200,
  1468
 ],
 "r-village": [
  2200,
  1461
 ],
 "sainte-victoire": [
  2200,
  1467
 ],
 "svc-enduit": [
  2200,
  3911
 ],
 "svc-extension": [
  2200,
  3300
 ],
 "svc-generale": [
  2200,
  1467
 ],
 "svc-maison": [
  2200,
  1467
 ],
 "svc-murs": [
  2200,
  1467
 ],
 "svc-ouverture": [
  2200,
  3300
 ],
 "svc-pierre": [
  2200,
  1467
 ],
 "svc-terrasse": [
  2200,
  3300
 ]
};

export const img = (key: string) => ({ src: `/images/${key}.jpg`, width: imageSizes[key]?.[0] ?? 2200, height: imageSizes[key]?.[1] ?? 1467 });
