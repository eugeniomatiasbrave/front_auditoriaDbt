/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_TITLE: string;
  // Agrega más variables según necesites
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
