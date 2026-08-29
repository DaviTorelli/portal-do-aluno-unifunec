# Portal do Aluno UNIFUNEC

Portal do aluno construído com Next.js 16, React 19, Tailwind CSS 4 e Biome.

## Índice

- [Requisitos](#requisitos)
- [Executando com Bun](#executando-com-bun)
- [Executando com Docker](#executando-com-docker)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)

## Requisitos

- [Bun](https://bun.sh) 1.3.14 ou superior (execução local)
- [Docker](https://docs.docker.com/get-docker/) com Docker Compose (execução em container)

## Executando com Bun

Instale as dependências:

```bash
bun install
```

Inicie o servidor de desenvolvimento:

```bash
bun run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para gerar e rodar a build de produção:

```bash
bun run build
bun run start
```

## Executando com Docker

O `docker-compose.yml` já sobe a aplicação em modo de desenvolvimento usando a imagem oficial do Bun, com o diretório do projeto montado como volume (hot reload funciona normalmente).

```bash
docker compose up
```

A aplicação fica disponível em [http://localhost:3000](http://localhost:3000).

Para rodar em segundo plano e depois parar:

```bash
docker compose up -d
docker compose down
```

Para reconstruir as dependências após alterações no `package.json`:

```bash
docker compose up --force-recreate
```

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `bun run dev` | Servidor de desenvolvimento |
| `bun run build` | Verificação com Biome e build de produção |
| `bun run start` | Servidor de produção (requer build) |
| `bun run lint` | Verificação de lint e formatação |
| `bun run lint:fix` | Corrige problemas de lint automaticamente |
| `bun run format` | Formata o código |

## Estrutura do projeto

```
app/         Rotas e páginas (App Router)
components/  Componentes de UI compartilhados
lib/         Configurações e integrações
utils/       Funções utilitárias
public/      Arquivos estáticos
```
