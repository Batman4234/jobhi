declare global {
  namespace NodeJS {
    interface ProcessEnv {
        SENDINBLUE_USER: string;
        SENDINBLUE_PASS: string;
        NEXT_PUBLIC_FIREBASE_API_KEY: string;
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
        NEXT_PUBLIC_FIREBASE_APP_ID: string;
        NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
        FIREBASE_ADMIN_CLIENT_EMAIL: string;
        FIREBASE_ADMIN_PRIVATE_KEY: string;
    }
  }
}
export {};
