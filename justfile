EXEC := "docker compose exec node"
NPM := EXEC + " npm"
ACE := EXEC + " node ace"

ace *arguments:
  {{ACE}} {{arguments}}

npm +arguments:
  {{NPM}} {{arguments}}

migrate:
  {{ACE}} migration:run

install:
  {{NPM}} install

dev:
  {{NPM}} run dev
