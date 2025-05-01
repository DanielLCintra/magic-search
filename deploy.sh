#!/bin/bash

set -e

npm install
npm run build

# Gera saída estática
npx next export

# Inicializa Terraform e aplica
cd infra
terraform init
terraform apply -auto-approve

# Sobe arquivos exportados no S3
aws s3 sync ../out s3://meu-site-magic-search --delete
