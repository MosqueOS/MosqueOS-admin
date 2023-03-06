# MosqueOS Admin

## Getting Started

```
cp .env.example .env
```

```
docker compose up
```

Go to http://localhost:3000

Running a migration

```
docker exec -it mosqueos_app /bin/bash -c "npm run db:migrate"
```

Running database seed

```
docker exec -it mosqueos_app /bin/bash -c "npm run db:seed"
```
