# 📊 MacroTerminal

**Live panel makroekonomiczny do podejmowania decyzji inwestycyjnych.**

🔗 **[→ Otwórz panel](https://TWOJ_USERNAME.github.io/macro-terminal/)**

## Co robi?

Agreguje dane z wielu źródeł i odpowiada na jedno pytanie: **Czy teraz kupować ETF?**

### 4 zakładki:

| Zakładka | Co znajdziesz |
|----------|---------------|
| 🎯 CO KUPIĆ? | Wyrok (KUP/TRZYMAJ/UNIKAJ) + VIX + Fear&Greed + historia analogii (2009/2020/2021) |
| 📊 WSKAŹNIKI | Wszystkie makro: Fed Rate, CPI, Sahm, Yield Curve, HY Spread, ISM PMI, CAPE itd. |
| 💼 PORTFEL | 5 portfeli ETF, harmonogram DCA 2026, tabela ETF z ryzykiem SRI |
| ⚙️ DANE | Status źródeł, log zdarzeń, diagnostyka |

### Źródła danych (live):
- **stooq.com** — SP500, VIX, złoto, ropa, BTC, USD/PLN, WIG20 itd.
- **FRED (St. Louis Fed)** — 21 serii makro: stopy, inflacja, bezrobocie, spreads
- **CNN / feargreedmeter.com** — Fear & Greed Index
- **alternative.me** — Crypto Fear & Greed (14-day history)
- **TradingEconomics** — Fed Rate 3.75%, ISM PMI 52.4 (zweryfikowane Mar 2026)

### Sygnały w modelu decyzyjnym:
VIX (waga 3) · Fear&Greed (2) · Dual Momentum SP500 vs IB01 (3) · CAPE (1) · Buffett Indicator (1) · Sahm Rule (3) · Yield Curve (2) · HY Spread (2) · ISM PMI (1) · Fed Rate (1) · CPI (1)

## Jak uruchomić lokalnie?

```bash
# Wystarczy otworzyć index.html — to jeden plik, zero dependencies
open index.html

# Lub przez prosty serwer (lepszy CORS):
python3 -m http.server 8080
# → http://localhost:8080
```

## GitHub Pages — deployment

```bash
git init
git add index.html README.md .nojekyll
git commit -m "MacroTerminal v23"
git branch -M main
git remote add origin https://github.com/TWOJ_USERNAME/macro-terminal.git
git push -u origin main
```

Następnie w Settings → Pages → Source: `main` branch, `/ (root)`.

Panel będzie dostępny pod: `https://TWOJ_USERNAME.github.io/macro-terminal/`

## Uwagi

- Dane odświeżają się automatycznie co 10 minut
- FRED ładuje się ~20-30s (21 serii CSV, batched)
- Stooq.com może blokować przy dużym ruchu → dane pokazują "…" (są fallbacki)
- Działa najlepiej na szerokim ekranie (min. 1200px)

## Disclaimer

Panel służy wyłącznie celom informacyjnym i edukacyjnym. Nie jest poradą inwestycyjną.
