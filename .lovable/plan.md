

## Plano Completo de Ajustes

### 1. Secao "Quem Somos" - Foto sem faixa azul no desktop

**Problema**: A foto vertical (vinidigital-about-new.jpg) ocupa a tela inteira no desktop porque usa `w-full h-auto` sem nenhuma restricao de altura. O layout de 2 colunas (`lg:grid-cols-2`) faz a foto crescer demais.

**Solucao**: Limitar a altura maxima do container da imagem no desktop com `max-h-[500px]` e usar `object-contain` para que a foto caiba inteira sem cortar. Remover `bg-navy` do container (que causa a faixa azul) e usar `bg-transparent`. Tambem alinhar o container com `flex items-center justify-center` para centralizar a foto.

### 2. Secao CFTV - Foto repetida

**Problema**: O usuario diz que uma foto esta aparecendo 2 vezes no carrossel. Olhando o codigo, `cftvWork5` aparece so 1 vez, mas visualmente `cftvWork6` ou `cftvWork7` podem ser muito parecidas com `cftvWork5`.

**Solucao**: Substituir uma das fotos parecidas (cftvWork6) por uma imagem diferente que ja existe no projeto mas nao esta sendo usada (cftv-work-3.jpg ou cftv-work-4.jpg). Importar `cftvWork3` ou `cftvWork4` e trocar no array.

### 3. Videos da secao "ViniDigital em Acao" - Substituir e renomear

**Problema**: O usuario quer substituir o 1o video por um novo que ele enviou (VID-20260225-WA0206.mp4) e renomear todos os subtitulos.

**Solucao**:
- Copiar o video enviado para `public/videos/trabalho-institucional.mp4`
- Atualizar o array `works` com novos nomes:
  1. "Instalacao Institucional" - video novo (trabalho-institucional.mp4)
  2. "Voou de Drone" - trabalho-novo-1.mp4
  3. "Eletrica de Elite" - trabalho-action-3.mp4
  4. "Voando na Pratica" - trabalho-novo-2.mp4

### 4. Video de fundo - Otimizacao de carregamento

**Problema**: O video demora 8-10 segundos pra aparecer. O `index.html` ja tem preload e o video inline, mas o `oncanplay` pode nao disparar rapido o suficiente no Chrome/Samsung Internet.

**Solucao**: 
- Trocar `oncanplay` por `onloadeddata` que dispara mais cedo
- Adicionar um fallback com JavaScript inline que forca o play e a opacidade apos 2 segundos caso o evento nao dispare
- Verificar se o `<link rel="preload" as="video">` esta correto (alguns browsers ignoram preload de video; usar `as="fetch"` com `type="video/mp4"` como alternativa)

### 5. Organizacao de videos em pasta dedicada

**Problema**: Todos os videos estao em `public/videos/` misturados. O usuario quer facilitar o carregamento.

**Solucao**: Os videos ja estao em `public/videos/` que e a pasta correta. Nao ha necessidade de criar subpastas pois isso nao melhora performance. O que melhora e:
- Garantir `preload="metadata"` em todos os videos secundarios (ja esta)
- Adicionar `loading="lazy"` onde possivel (videos nao suportam nativamente, mas manter fora do viewport inicial ajuda)

---

### Arquivos alterados

| Arquivo | Mudanca |
|---|---|
| `src/components/AboutSection.tsx` | Limitar altura da foto no desktop, remover bg-navy, centralizar |
| `src/components/ServicesSection.tsx` | Trocar foto duplicada do CFTV por outra |
| `src/components/WorksSection.tsx` | Novos nomes + novo video |
| `index.html` | Fallback JS para o video de fundo carregar mais rapido |
| `public/videos/` | Copiar video novo do usuario |

