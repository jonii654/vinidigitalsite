
## Plano de Ajustes Visuais e Novos Videos

### 1. Foto cortada no desktop (ShowcaseBanner)
O banner "Tecnologia que transforma" usa `object-contain` no mobile e `object-cover` no desktop, cortando a imagem. Vou mudar para `object-contain` em todas as telas e remover a altura fixa, deixando o container se adaptar ao tamanho natural da imagem (sem cortar).

### 2. Secao "Quem somos" (AboutSection)
Remover a altura fixa `h-[450px]` do container e deixar o carrossel se adaptar ao formato da foto. Usar `w-full` no `<img>` sem `absolute inset-0` para que a moldura acompanhe o tamanho real da imagem.

### 3. Secao "Nossos Servicos" (ServicesSection + ServiceCarousel)
Atualmente os containers de midia tem altura fixa (`h-[280px] md:h-[380px]`) com posicionamento absoluto e `object-contain`, o que gera espacos azuis sobrando.

Vou mudar a abordagem para ser igual a secao "ViniDigital em Acao":
- Remover alturas fixas do container de midia
- Usar `w-full` nas imagens/videos sem posicionamento absoluto
- Adicionar borda laranja `border-2 border-primary` e `rounded-2xl`
- Atualizar o `ServiceCarousel` para usar o mesmo padrao (sem `absolute`, sem `h-full` fixo)

### 4. Secao "ViniDigital em Acao" (WorksSection)
- Copiar os 2 videos enviados pelo usuario para `public/videos/`
- Substituir o 2o video (`trabalho-new.mp4`) pelos 2 novos videos
- A secao passara a ter 4 videos no total (grid `md:grid-cols-4` ou `md:grid-cols-2 lg:grid-cols-4`)

### Arquivos alterados

| Arquivo | Mudanca |
|---|---|
| `src/components/ShowcaseBanner.tsx` | Remover `object-cover` no desktop, usar `object-contain` sempre, adaptar altura ao conteudo |
| `src/components/AboutSection.tsx` | Remover `h-[450px]` fixo, moldura se adapta a foto |
| `src/components/ServicesSection.tsx` | Remover alturas fixas, usar layout fluido com borda laranja |
| `src/components/ServiceCarousel.tsx` | Remover posicionamento absoluto, usar `w-full` para adaptacao natural |
| `src/components/WorksSection.tsx` | Adicionar 2 novos videos (total 4), ajustar grid |
| `public/videos/` | Copiar os 2 novos videos do usuario |
