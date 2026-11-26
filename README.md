# Coaching Collective — GitHub Pages

Wersja przygotowana pod **https://alsikorski.github.io/Coaching-web-page/** (repozytorium `alsikorski/Coaching-web-page`).

## Publikacja
1. Skopiuj **zawartość tego ZIP-a bez tworzenia dodatkowego folderu** do katalogu głównego gałęzi `main`.
2. Zatwierdź zmiany w GitHubie.
3. W Settings → Pages wybierz **Deploy from a branch**, **main**, **/(root)**.
4. Odwiedź https://alsikorski.github.io/Coaching-web-page/ (po opublikowaniu).

## Dostosowania
- Wszystkie wewnętrzne ścieżki mają prefiks `/Coaching-web-page/`.
- Meta refresh w głównym index.html wskazuje na polską stronę.
- Canonical, hreflang, og:url, Schema.org, sitemap i robots.txt wskazują na adres GitHub Pages.
- W katalogu głównym jest `.nojekyll`.
- Zdjęcia i ikony są przechowywane lokalnie w `assets/`.

**Uwaga:** jeżeli przełączysz stronę na własną domenę, ponownie ustaw ścieżki na `/pl/`, `/en/`, `/assets/` i zmień bazę SEO.

## Uruchomienie lokalne
Strona używa prefiksu GitHub Pages. Umieść katalog projektu pod nazwą `Coaching-web-page` w katalogu nadrzędnym i uruchom w nim `python -m http.server 8000`. Otwórz `http://localhost:8000/Coaching-web-page/`.
