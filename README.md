# Coaching Collective — statyczna witryna

Gotowa responsywna witryna w HTML5, CSS i niewielkim JavaScript. Bez Astro, React, WordPressa ani bazy danych.

## Strony
- `/pl/`, `/en/` — strony główne
- `/pl/malgorzata-grande/` itd. — profile w obu językach (łącznie osiem stron).

## Uruchomienie lokalne
W folderze projektu uruchom `python -m http.server 8000`, następnie otwórz `http://localhost:8000/pl/`. Nie otwieraj podstron dwuklikiem przez `file://`, ponieważ ścieżki są przygotowane pod serwer WWW.

## Wdrożenie
W Cloudflare Pages utwórz projekt dla statycznych plików. Publikuj folder `coaching-collective` bez kompilacji. Domena docelowa w kodzie SEO: `coachingcollective.com` — zmień wszystkie adresy, jeśli docelowa domena będzie inna.

## Zdjęcia
Zdjęcia są demonstracyjne, ładowane z Unsplash (wymagają internetu). Wszystkie adresy znajdują się w `assets/photos.json` oraz w wygenerowanych plikach HTML. Przed publikacją zamień je na własne zdjęcia zapisane lokalnie w `assets/`, wstaw nowe ścieżki do `src` we wszystkich odpowiednich plikach HTML i usuń tymczasowy napis o zdjęciach. Przy niedostępnym zdjęciu ładowany jest lokalny SVG z napisem 'zdjęcie przykładowe'. Uwaga: zapis w `photos.json` służy dokumentacji; sama edycja JSON nie zmienia wygenerowanego HTML.

## Do uzupełnienia
- Zdjęcia i zgody na ich publikację.
- E-mail, telefon, LinkedIn i ceny Agnieszki; ceny Adama (pozostawione jako placeholdery zgodnie z dostarczonym tekstem).
- Ewentualne regulaminy i polityka prywatności zależnie od wdrażanych narzędzi i zasad przetwarzania danych.
- Weryfikacja adresu domeny, Google Search Console, sitemap i metadanych po wdrożeniu.
- Ewentualna osobna strona kontaktu, jeśli będzie wymagana. Obecnie kontakt poprzez podstrony coachów, bez zbierającego dane formularza.

## SEO i dostępność
Każda podstrona ma unikalny title, description, canonical, hreflang PL/EN, OG i treść HTML widoczną bez JavaScript. Dodatkowo jest sitemap.xml, robots.txt, responsywność i klawiaturowa obsługa menu. Wyniki wydajności wymagają pomiaru po wdrożeniu; zewnętrzne zdjęcia należy zastąpić lokalnymi zoptymalizowanymi AVIF/WebP.
