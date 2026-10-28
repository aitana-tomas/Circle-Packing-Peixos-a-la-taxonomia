# Peixos · Circle packing taxonòmic

Visualització interactiva de la taxonomia de peixos basada en D3.js.

## Estructura

- `index.html`: estructura de la pàgina.
- `css/styles.css`: estils.
- `js/main.js`: visualització, jerarquia, zoom i consulta d'imatges.
- `js/data.js`: dades incorporades que utilitza l'aplicació en executar-se.
- `js/info.js`: botons i panells informatius.
- `data/peces.csv`: còpia del CSV original per consultar-lo o reutilitzar-lo.
- `data/descriptions.json`: còpia de les descripcions taxonòmiques.

## Provar al Windows

1. Descomprimeix tota la carpeta.
2. Fes doble clic a `INICIAR_LOCAL.bat`.
3. Mantén oberta la finestra del servidor mentre facis servir la pàgina.
4. S'obrirà `http://127.0.0.1:8765/`.

Cal tenir Python instal·lat (el llançador `py` o l'ordre `python`). També cal connexió a internet per carregar D3.js i consultar fotografies a Wikipedia/Wikimedia Commons.

La visualització no fa `fetch()` dels fitxers CSV/JSON en temps d'execució: les dades necessàries estan incloses a `js/data.js`. Això evita els errors CORS en obrir `index.html` directament i manté `data/peces.csv` i `data/descriptions.json` disponibles com a fitxers de dades separats.

## Publicar amb GitHub Pages

1. Puja el contingut d'aquesta carpeta al nivell arrel del repositori (on queda `index.html`).
2. A GitHub, ves a **Settings → Pages**.
3. Selecciona **Deploy from a branch**, la branca `main` i la carpeta `/ (root)`.
4. Desa i espera que GitHub Pages indiqui l'URL publicada.

D3.js i les fotografies es carreguen des d'internet; no cal executar un servidor propi després de publicar la web.
