---
titulo: ImpactSeed
resumo: Plataforma web que liga startups de impacto a investidores — perfis, filtragem por ODS e validação administrativa.
stack: [C# 12, .NET 8, ASP.NET Core MVC, Entity Framework Core, SignalR, Azure]
ordem: 1
destaque: true
estado: Demo online · PAP
link: https://impactseed.pt/
# repo: https://github.com/...
---

O ImpactSeed é o meu projeto principal — a minha Prova de Aptidão Profissional (PAP). É uma plataforma web que liga startups de impacto social e ambiental a investidores que procuram mais do que retorno financeiro. Está online em domínio próprio, em versão demonstrativa.

## O problema

As startups de impacto têm dificuldade em chegar a investidores alinhados com a sua missão; os investidores, por sua vez, não têm uma forma estruturada de descobrir e acompanhar estes projetos. O ImpactSeed aproxima os dois lados de forma prática, direta e transparente.

## O que faz

- **Apresentação de projetos** — as startups partilham os seus projetos, objetivos e impacto
- **Filtragem inteligente** — os investidores filtram oportunidades por área, estágio ou alinhamento com os Objetivos de Desenvolvimento Sustentável (Agenda 2030)
- **Validação administrativa** — administradores garantem a qualidade e veracidade da informação na plataforma
- **Barreira de entrada baixa** — investimentos a partir de 10€
- **Comunicação em tempo real** entre startups e investidores, com SignalR

## Decisões técnicas

- **ASP.NET Core MVC** como base — server-rendered, simples de manter e rápido
- **Entity Framework Core** para o modelo de dados _(placeholder: SQL Server? migrações? relações principais?)_
- **SignalR** para mensagens e notificações em tempo real
- **Azure** para alojamento _(placeholder: App Service? SQL Database?)_

_(Placeholder: acrescenta capturas de ecrã em `public/projetos/` e referencia-as aqui, resultados da apresentação da PAP, e o que aprendeste no processo.)_
