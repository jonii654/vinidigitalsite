
# Plano: Adicionar fotos reais e carrosseis nas secoes de servicos

## Resumo
Adicionar imagens reais em todas as secoes de servicos, criar uma secao parallax entre Hero e About, e implementar carrosseis para secoes com multiplas fotos.

---

## 1. Nova secao Parallax entre Hero e About

- Criar um novo componente `ShowcaseBanner.tsx`
- Usar a primeira foto (homem com ferramentas e capacete) como fundo
- Aplicar efeito parallax com `background-attachment: fixed`
- Bordas arredondadas, overlay escuro com gradiente
- Inserir entre `<HeroSection />` e `<AboutSection />` no `Index.tsx`

**Arquivo da foto:** `IMG-20260206-WA0087.jpg` -> `src/assets/showcase-banner.jpg`

---

## 2. Foto na secao Eletrica

- Copiar `IMG-20260205-WA0079.jpg` -> `src/assets/eletrica-work.jpg`
- Atualizar o servico "Eletrica profissional" no `ServicesSection.tsx` para usar essa imagem no lugar do placeholder

---

## 3. Carrossel na secao Smart Home Alexa (2 fotos)

- Copiar as 2 fotos de Echo Dot para `src/assets/`:
  - `IMG-20260206-WA0115.jpg` -> `alexa-work-1.jpg`
  - `IMG-20260206-WA0114.jpg` -> `alexa-work-2.jpg`
- Modificar `ServicesSection.tsx` para suportar array de imagens
- Quando houver mais de 1 imagem, renderizar um carrossel usando o componente Embla Carousel ja instalado
- Carrossel com autoplay, indicadores de posicao (dots), e transicao suave

---

## 4. Carrossel na secao Sistema Solar (3 fotos)

- Copiar as 3 fotos para `src/assets/`:
  - `IMG-20260206-WA0134.jpg` -> `solar-work-1.jpg`
  - `IMG-20260206-WA0131.jpg` -> `solar-work-2.jpg`
  - `IMG-20260206-WA0135.jpg` -> `solar-work-3.jpg`
- Usar o mesmo sistema de carrossel

---

## 5. Carrossel na secao Drones (2 fotos + 1 video)

- Copiar os arquivos para `src/assets/` e `public/videos/`:
  - `IMG-20260205-WA0097_1.jpg` -> `drone-work-1.jpg`
  - `IMG-20260205-WA0096.jpg` -> `drone-work-2.jpg`
  - `VID-20260206-WA0144.mp4` -> `public/videos/drone-video.mp4` (video vai no public para streaming)
- Carrossel com suporte a video embutido (tag `<video>` com controles)

---

## Detalhes tecnicos

### Estrutura de dados atualizada do ServicesSection

Cada servico passara a ter um campo `images` (array) em vez de `image` (unico):

```text
images: [
  { type: "image", src: importedImage, alt: "descricao" },
  { type: "video", src: "/videos/drone-video.mp4", alt: "descricao" }
]
```

### Componente de carrossel interno

- Usar Embla Carousel (ja instalado) dentro do card de imagem do servico
- Dots indicadores na parte inferior
- Autoplay com intervalo de 4 segundos
- Para videos: mostrar com controles, sem autoplay do video

### Secao Parallax (ShowcaseBanner)

- Altura de ~400px
- `background-attachment: fixed` para efeito parallax
- `rounded-2xl` com `overflow-hidden`
- Margem horizontal com `container` e padding

### Arquivos modificados

1. **Novo:** `src/components/ShowcaseBanner.tsx` - banner parallax
2. **Novo:** `src/assets/` - 8 novas imagens copiadas
3. **Novo:** `public/videos/drone-video.mp4` - video do drone
4. **Editado:** `src/components/ServicesSection.tsx` - suporte a carrossel e novas imagens
5. **Editado:** `src/pages/Index.tsx` - inserir ShowcaseBanner entre Hero e About
