---
title: "Cara Insert Gambar di Jekyll"
excerpt: "Panduan lengkap cara menambahkan gambar di blog Jekyll"
header:
  teaser: /assets/images/tipsit.png
tags: 
  - tutorial
  - jekyll
categories:
  - Tutorial
toc: true
---

## Cara Insert Gambar di Jekyll

Ada beberapa cara untuk menambahkan gambar di Jekyll:

### 1. Markdown Standar

```markdown
![Deskripsi Gambar](/assets/images/nama-gambar.jpg)
```

**Contoh:**

![Logo TipsIT](/assets/images/tipsit.png)

---

### 2. Dengan Ukuran Tertentu (HTML)

```html
<img src="/assets/images/tipsit.png" alt="Logo" width="200">
```

**Contoh:**

<img src="/assets/images/tipsit.png" alt="Logo TipsIT" width="150">

---

### 3. Gambar dengan Link

```markdown
[![Deskripsi](/assets/images/gambar.jpg)](https://link-tujuan.com)
```

---

### 4. Menggunakan Figure (Rekomendasi)

Minimal Mistakes memiliki helper `figure` untuk gambar yang lebih bagus:

```markdown
{% raw %}{% include figure image_path="/assets/images/tipsit.png" alt="Deskripsi" caption="Caption gambar di sini" %}{% endraw %}
```

**Contoh:**

{% include figure image_path="/assets/images/tipsit.png" alt="Logo TipsIT" caption="Logo blog TipsIT" %}

---

### 5. Gallery Gambar

Untuk menampilkan beberapa gambar sekaligus:

```markdown
{% raw %}{% include gallery id="gallery1" layout="half" caption="Gallery caption" %}
  - url: /assets/images/mm-customizable-feature.png
    image_path: /assets/images/mm-customizable-feature.png
    alt: "Gambar 1"
    title: "Title 1"
  - url: /assets/images/mm-responsive-feature.png
    image_path: /assets/images/mm-responsive-feature.png
    alt: "Gambar 2"
    title: "Title 2"
{% endinclude %}{% endraw %}
```

---

## Tips Penyimpanan Gambar

1. **Simpan di folder**: `assets/images/`
2. **Format yang didukung**: JPG, PNG, GIF, WebP, SVG
3. **Optimasi gambar** sebelum upload untuk kecepatan loading
4. **Gunakan nama file** yang deskriptif tanpa spasi (gunakan `-` atau `_`)

## Contoh Lengkap di Post

```markdown
---
title: "Judul Post"
header:
  teaser: /assets/images/teaser.jpg
  overlay_image: /assets/images/header.jpg
  og_image: /assets/images/og-image.jpg
---

Konten post dengan gambar inline:

![Gambar](/assets/images/gambar.jpg)
```

---

Selamat mencoba! 🎉