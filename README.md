# Tecnologias utilizadas

- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Apollo Client (GraphQL)
- Prisma ORM
- Tailwind

## Mudanças que foram necessárias

Ao acompanhar o desenvolvimento dessa aplicação, notei que alguns pacotes estavam muito desatualisados, deprecados ou até mesmo não existiam mais, com isso tive que fazer algumas adaptações pois haviam várias breaking changes, as principais delas foram em relação a autenticação, ao apollo federation e gateway, além do nextjs.

## Funcionalidades

### Serviço de compras (purchases)

- [Admin] Cadastro de produtos
- [Admin] Listagem de produtos

- [Auth] Listagem de compras

- [Public] Compra de um produto
- [Public] Lista produtos disponíveis p/ compra

### Serviço de sala de aula (classroom)

- [Admin] Listar matrículas
- [Admin] Listar alunos
- [Admin] Listar cursos
- [Admin] Cadastrar cursos

- [Auth] Listar cursos que tenho acesso
- [Auth] Acessar conteúdo do curso

---

- [ ] Importar telas do Tailwind
- [ ] URL de Logout no Auth0
- [ ] Query das minhas matrículas
- [ ] Query de produtos
- [ ] Mutation de realizar matrícula
