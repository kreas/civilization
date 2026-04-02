import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql';

let _db: LibSQLDatabase | undefined;

export function getDb(): LibSQLDatabase {
  if (!_db) {
    _db = drizzle({
      connection: {
        url: process.env.TURSO_DATABASE_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN!,
      },
    });
  }
  return _db;
}

export const db = new Proxy({} as LibSQLDatabase, {
  get(_target, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
