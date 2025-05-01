#!/bin/bash

set -e

npm install
npm run build

# A pasta ./out já será gerada automaticamente pelo build com 'output: export'

cd terraform
terraform init
terraform apply -auto-approve

# Sobe arquivos exportados no S3
aws s3 sync ../out s3://meu-site-magic-search --delete
