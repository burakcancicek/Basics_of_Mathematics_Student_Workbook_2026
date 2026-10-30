# MathAtlas – Kurulum ve kullanım

Bu klasör, hocanın orijinal `exercises/` ve `solutions/` dosyalarını korur. Yeni eklenen `index.html`, `style.css`, `app.js`, `topics.json` dosyaları web arayüzünü oluşturur.

## GitHub'a yükleme
1. Kendi **mevcut fork** deponu aç. Yeni depo oluşturma; hocanın fork bağlantısı korunmalı.
2. ZIP içindeki **tüm dosya ve klasörleri** deponun köküne ekle. `exercises/` ve `solutions/` klasörlerini silme.
3. GitHub `Add file` → `Upload files` kullanabilir veya Git ile commit/push yapabilirsin. GitHub web yükleyicisinde klasörlerin yapısını koruduğunu kontrol et.
4. `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch` → `main` → `/ (root)` → `Save`.
5. GitHub Pages başarılı olunca `https://burakcancicek.github.io/Basics_of_Mathematics_Student_Workbook_2026/` adresini aç.
6. `Settings` → `General` → `Features` → `Issues` seçeneğini ayrıca etkinleştir.
7. Okul e-postasından hocaya **GitHub repository** bağlantısını gönder; Pages linki repository linkinin yerini tutmaz.

## Dil ve çözüm durumu
- 🇬🇧 EN, 🇹🇷 TR, 🇵🇱 PL arayüz dilini değiştirir. **Hocanın özgün soru metinleri İngilizce kalır**; otomatik çevrilmiş gibi gösterilmez.
- Görsel laboratuvar, örnek matris/vektör/parabol gösterir. Bunlar **hocanın alıştırmalarının çözümü değildir**.
- `Mark as studied` durumu yalnızca o tarayıcıda `localStorage` içinde saklanır; hocanın notlandırmasına veya GitHub dosyalarına aktarılmaz.
- 180 çözüm dosyası orijinalde boştur; çözümler kullanıcı tarafından doldurulmalıdır.
- Markdown ve matematik formüllerini görüntülemek için CDN üzerinden Marked, DOMPurify ve MathJax yüklenir; internet gerekir.
- `index.html` dosyasını bilgisayarda çift tıklamak, tarayıcı güvenlik kısıtları nedeniyle JSON/Markdown fetch işlemlerini engelleyebilir. GitHub Pages veya yerel HTTP sunucusu kullan.

## Çözüm formatı
Her `solutions/.../problem_XX_solution.md` dosyasında:
1. Problem Statement
2. Theoretical Background and Concepts
3. Detailed Step-by-Step Solution
4. Verification and Consistency Checks

Önce doğru soruyu `exercises/` içinden okuyup çözümü doğrula. Hazır site tek başına ödevlerin tamamlandığı anlamına gelmez.

## Yeni öğrenme özellikleri
- **Adım adım çözüm:** `solutions/` içindeki dolu Markdown dosyası, başlıklarına göre adım adım gösterilir. Dosya boşsa sahte cevap oluşturulmaz.
- **Çocuk gibi anlat:** Üç dilde sade bir kavramsal açıklama açılır. Bu açıklama soruya özel çözüm yerine geçmez.
- **Renkli işlemler:** Matrislerde ve görsel örneklerde farklı renklerle öğeler ayırt edilir.
- **Hareketli grafik:** Görsel laboratuvarındaki parabol grafiği otomatik hareket ettirilebilir.

Not: Her gerçek soruya özel animasyon ve basit açıklama eklemek için o sorunun matematiksel çözümünü ayrıca hazırlamak gerekir. Bu sürüm genel öğrenme araçları içerir.
