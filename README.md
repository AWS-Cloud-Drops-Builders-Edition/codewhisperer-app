# Programação em par turbinada por IA: Crie uma aplicação com Amazon CodeWhisperer

## Criar uma aplicação React

```
npx create-react-app galeria-imagens
```

```
cd galeria-imagens
```

## Inicializar o Amplify

```
amplify init
```

```
npm install aws-amplify @aws-amplify/ui-react
```

## Adiconar Autenticação

```
amplify add auth
```

```
 Do you want to use the default authentication and security configuration? (Use arrow keys)
❯ Default configuration
```

```
 How do you want users to be able to sign in?
❯ Email
```

```
 Do you want to configure advanced settings? (Use arrow keys)
❯ No, I am done
```

## Adicionar Armazenamento

```
amplify add storage
```

```
? Select from one of the below mentioned services: (Use arrow keys)
❯ Content (Images, audio, video, etc.)
```

```
? Provide a friendly name for your resource that will be used to label this category in the project: › s3624b6beb
```

```
? Provide bucket name: › galeriaimagens4fad021583e44209adbd5f102bc527af
```

```
? Who should have access: …  (Use arrow keys or type to filter)
❯ Auth and guest users
```

```
? What kind of access do you want for Authenticated users? …  (Use arrow keys or type to filter)
 ● create/update
 ● read
 ● delete
```

```
? What kind of access do you want for Guest users? …  (Use arrow keys or type to filter)
 ○ create/update
 ● read
 ○ delete
```

```
✔ Do you want to add a Lambda Trigger for your S3 Bucket? (y/N) · n
```

## Deploy Recursos do Amplify

```
amplify push
```

```
⠸ Fetching updates to backend environment: dev from the cloud.⠋ Building resource auth/galeri
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name          │ Operation │ Provider plugin   │
├──────────┼────────────────────────┼───────────┼───────────────────┤
│ Auth     │ galeriaimagens94c6dbb8 │ Create    │ awscloudformation │
├──────────┼────────────────────────┼───────────┼───────────────────┤
│ Storage  │ s3624b6beb             │ Create    │ awscloudformation │
└──────────┴────────────────────────┴───────────┴───────────────────┘
✔ Are you sure you want to continue? (Y/n) · yes
```
