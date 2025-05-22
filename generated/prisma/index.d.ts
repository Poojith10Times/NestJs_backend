
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Api
 * 
 */
export type Api = $Result.DefaultSelection<Prisma.$ApiPayload>
/**
 * Model ApiToken
 * 
 */
export type ApiToken = $Result.DefaultSelection<Prisma.$ApiTokenPayload>
/**
 * Model UserApiAccess
 * 
 */
export type UserApiAccess = $Result.DefaultSelection<Prisma.$UserApiAccessPayload>
/**
 * Model ApiUsageLog
 * 
 */
export type ApiUsageLog = $Result.DefaultSelection<Prisma.$ApiUsageLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api`: Exposes CRUD operations for the **Api** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apis
    * const apis = await prisma.api.findMany()
    * ```
    */
  get api(): Prisma.ApiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiToken`: Exposes CRUD operations for the **ApiToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiTokens
    * const apiTokens = await prisma.apiToken.findMany()
    * ```
    */
  get apiToken(): Prisma.ApiTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userApiAccess`: Exposes CRUD operations for the **UserApiAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserApiAccesses
    * const userApiAccesses = await prisma.userApiAccess.findMany()
    * ```
    */
  get userApiAccess(): Prisma.UserApiAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiUsageLog`: Exposes CRUD operations for the **ApiUsageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiUsageLogs
    * const apiUsageLogs = await prisma.apiUsageLog.findMany()
    * ```
    */
  get apiUsageLog(): Prisma.ApiUsageLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Api: 'Api',
    ApiToken: 'ApiToken',
    UserApiAccess: 'UserApiAccess',
    ApiUsageLog: 'ApiUsageLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "api" | "apiToken" | "userApiAccess" | "apiUsageLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Api: {
        payload: Prisma.$ApiPayload<ExtArgs>
        fields: Prisma.ApiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findFirst: {
            args: Prisma.ApiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findMany: {
            args: Prisma.ApiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          create: {
            args: Prisma.ApiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          createMany: {
            args: Prisma.ApiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          delete: {
            args: Prisma.ApiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          update: {
            args: Prisma.ApiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          deleteMany: {
            args: Prisma.ApiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          upsert: {
            args: Prisma.ApiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          aggregate: {
            args: Prisma.ApiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi>
          }
          groupBy: {
            args: Prisma.ApiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCountAggregateOutputType> | number
          }
        }
      }
      ApiToken: {
        payload: Prisma.$ApiTokenPayload<ExtArgs>
        fields: Prisma.ApiTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findFirst: {
            args: Prisma.ApiTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findMany: {
            args: Prisma.ApiTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          create: {
            args: Prisma.ApiTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          createMany: {
            args: Prisma.ApiTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          delete: {
            args: Prisma.ApiTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          update: {
            args: Prisma.ApiTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          deleteMany: {
            args: Prisma.ApiTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          upsert: {
            args: Prisma.ApiTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          aggregate: {
            args: Prisma.ApiTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiToken>
          }
          groupBy: {
            args: Prisma.ApiTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ApiTokenCountAggregateOutputType> | number
          }
        }
      }
      UserApiAccess: {
        payload: Prisma.$UserApiAccessPayload<ExtArgs>
        fields: Prisma.UserApiAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserApiAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserApiAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>
          }
          findFirst: {
            args: Prisma.UserApiAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserApiAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>
          }
          findMany: {
            args: Prisma.UserApiAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>[]
          }
          create: {
            args: Prisma.UserApiAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>
          }
          createMany: {
            args: Prisma.UserApiAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserApiAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>[]
          }
          delete: {
            args: Prisma.UserApiAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>
          }
          update: {
            args: Prisma.UserApiAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserApiAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserApiAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserApiAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>[]
          }
          upsert: {
            args: Prisma.UserApiAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiAccessPayload>
          }
          aggregate: {
            args: Prisma.UserApiAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserApiAccess>
          }
          groupBy: {
            args: Prisma.UserApiAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserApiAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserApiAccessCountArgs<ExtArgs>
            result: $Utils.Optional<UserApiAccessCountAggregateOutputType> | number
          }
        }
      }
      ApiUsageLog: {
        payload: Prisma.$ApiUsageLogPayload<ExtArgs>
        fields: Prisma.ApiUsageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiUsageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiUsageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          findFirst: {
            args: Prisma.ApiUsageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiUsageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          findMany: {
            args: Prisma.ApiUsageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          create: {
            args: Prisma.ApiUsageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          createMany: {
            args: Prisma.ApiUsageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiUsageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          delete: {
            args: Prisma.ApiUsageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          update: {
            args: Prisma.ApiUsageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiUsageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUsageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUsageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiUsageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          aggregate: {
            args: Prisma.ApiUsageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiUsageLog>
          }
          groupBy: {
            args: Prisma.ApiUsageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiUsageLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    api?: ApiOmit
    apiToken?: ApiTokenOmit
    userApiAccess?: UserApiAccessOmit
    apiUsageLog?: ApiUsageLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    apiTokens: number
    apiAccesses: number
    usageLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiTokens?: boolean | UserCountOutputTypeCountApiTokensArgs
    apiAccesses?: boolean | UserCountOutputTypeCountApiAccessesArgs
    usageLogs?: boolean | UserCountOutputTypeCountUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
  }


  /**
   * Count Type ApiCountOutputType
   */

  export type ApiCountOutputType = {
    userApiAccesses: number
    usageLogs: number
  }

  export type ApiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userApiAccesses?: boolean | ApiCountOutputTypeCountUserApiAccessesArgs
    usageLogs?: boolean | ApiCountOutputTypeCountUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCountOutputType
     */
    select?: ApiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountUserApiAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiAccessWhereInput
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    password_hash: string | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    password_hash: string | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password_hash: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password_hash?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password_hash?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password_hash?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    name: string | null
    password_hash: string | null
    status: $Enums.Status | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    apiTokens?: boolean | User$apiTokensArgs<ExtArgs>
    apiAccesses?: boolean | User$apiAccessesArgs<ExtArgs>
    usageLogs?: boolean | User$usageLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password_hash" | "status" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiTokens?: boolean | User$apiTokensArgs<ExtArgs>
    apiAccesses?: boolean | User$apiAccessesArgs<ExtArgs>
    usageLogs?: boolean | User$usageLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      apiTokens: Prisma.$ApiTokenPayload<ExtArgs>[]
      apiAccesses: Prisma.$UserApiAccessPayload<ExtArgs>[]
      usageLogs: Prisma.$ApiUsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      name: string | null
      password_hash: string | null
      status: $Enums.Status | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiTokens<T extends User$apiTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$apiTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiAccesses<T extends User$apiAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$apiAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageLogs<T extends User$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Status'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.apiTokens
   */
  export type User$apiTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    where?: ApiTokenWhereInput
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    cursor?: ApiTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * User.apiAccesses
   */
  export type User$apiAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    where?: UserApiAccessWhereInput
    orderBy?: UserApiAccessOrderByWithRelationInput | UserApiAccessOrderByWithRelationInput[]
    cursor?: UserApiAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserApiAccessScalarFieldEnum | UserApiAccessScalarFieldEnum[]
  }

  /**
   * User.usageLogs
   */
  export type User$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    where?: ApiUsageLogWhereInput
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    cursor?: ApiUsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Api
   */

  export type AggregateApi = {
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  export type ApiAvgAggregateOutputType = {
    id: number | null
    default_daily_limit: number | null
  }

  export type ApiSumAggregateOutputType = {
    id: bigint | null
    default_daily_limit: number | null
  }

  export type ApiMinAggregateOutputType = {
    id: bigint | null
    api_name: string | null
    slug: string | null
    default_daily_limit: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApiMaxAggregateOutputType = {
    id: bigint | null
    api_name: string | null
    slug: string | null
    default_daily_limit: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApiCountAggregateOutputType = {
    id: number
    api_name: number
    slug: number
    default_daily_limit: number
    basic_parameters: number
    advanced_parameters: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ApiAvgAggregateInputType = {
    id?: true
    default_daily_limit?: true
  }

  export type ApiSumAggregateInputType = {
    id?: true
    default_daily_limit?: true
  }

  export type ApiMinAggregateInputType = {
    id?: true
    api_name?: true
    slug?: true
    default_daily_limit?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ApiMaxAggregateInputType = {
    id?: true
    api_name?: true
    slug?: true
    default_daily_limit?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ApiCountAggregateInputType = {
    id?: true
    api_name?: true
    slug?: true
    default_daily_limit?: true
    basic_parameters?: true
    advanced_parameters?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ApiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Api to aggregate.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apis
    **/
    _count?: true | ApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiMaxAggregateInputType
  }

  export type GetApiAggregateType<T extends ApiAggregateArgs> = {
        [P in keyof T & keyof AggregateApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi[P]>
      : GetScalarType<T[P], AggregateApi[P]>
  }




  export type ApiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiWhereInput
    orderBy?: ApiOrderByWithAggregationInput | ApiOrderByWithAggregationInput[]
    by: ApiScalarFieldEnum[] | ApiScalarFieldEnum
    having?: ApiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCountAggregateInputType | true
    _avg?: ApiAvgAggregateInputType
    _sum?: ApiSumAggregateInputType
    _min?: ApiMinAggregateInputType
    _max?: ApiMaxAggregateInputType
  }

  export type ApiGroupByOutputType = {
    id: bigint
    api_name: string
    slug: string
    default_daily_limit: number
    basic_parameters: JsonValue
    advanced_parameters: JsonValue | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  type GetApiGroupByPayload<T extends ApiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiGroupByOutputType[P]>
            : GetScalarType<T[P], ApiGroupByOutputType[P]>
        }
      >
    >


  export type ApiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_name?: boolean
    slug?: boolean
    default_daily_limit?: boolean
    basic_parameters?: boolean
    advanced_parameters?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    userApiAccesses?: boolean | Api$userApiAccessesArgs<ExtArgs>
    usageLogs?: boolean | Api$usageLogsArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type ApiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_name?: boolean
    slug?: boolean
    default_daily_limit?: boolean
    basic_parameters?: boolean
    advanced_parameters?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["api"]>

  export type ApiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_name?: boolean
    slug?: boolean
    default_daily_limit?: boolean
    basic_parameters?: boolean
    advanced_parameters?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["api"]>

  export type ApiSelectScalar = {
    id?: boolean
    api_name?: boolean
    slug?: boolean
    default_daily_limit?: boolean
    basic_parameters?: boolean
    advanced_parameters?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ApiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "api_name" | "slug" | "default_daily_limit" | "basic_parameters" | "advanced_parameters" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["api"]>
  export type ApiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userApiAccesses?: boolean | Api$userApiAccessesArgs<ExtArgs>
    usageLogs?: boolean | Api$usageLogsArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Api"
    objects: {
      userApiAccesses: Prisma.$UserApiAccessPayload<ExtArgs>[]
      usageLogs: Prisma.$ApiUsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      api_name: string
      slug: string
      default_daily_limit: number
      basic_parameters: Prisma.JsonValue
      advanced_parameters: Prisma.JsonValue | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["api"]>
    composites: {}
  }

  type ApiGetPayload<S extends boolean | null | undefined | ApiDefaultArgs> = $Result.GetResult<Prisma.$ApiPayload, S>

  type ApiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCountAggregateInputType | true
    }

  export interface ApiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Api'], meta: { name: 'Api' } }
    /**
     * Find zero or one Api that matches the filter.
     * @param {ApiFindUniqueArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiFindUniqueArgs>(args: SelectSubset<T, ApiFindUniqueArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiFindUniqueOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiFindFirstArgs>(args?: SelectSubset<T, ApiFindFirstArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apis
     * const apis = await prisma.api.findMany()
     * 
     * // Get first 10 Apis
     * const apis = await prisma.api.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiWithIdOnly = await prisma.api.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiFindManyArgs>(args?: SelectSubset<T, ApiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api.
     * @param {ApiCreateArgs} args - Arguments to create a Api.
     * @example
     * // Create one Api
     * const Api = await prisma.api.create({
     *   data: {
     *     // ... data to create a Api
     *   }
     * })
     * 
     */
    create<T extends ApiCreateArgs>(args: SelectSubset<T, ApiCreateArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apis.
     * @param {ApiCreateManyArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCreateManyArgs>(args?: SelectSubset<T, ApiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apis and returns the data saved in the database.
     * @param {ApiCreateManyAndReturnArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api.
     * @param {ApiDeleteArgs} args - Arguments to delete one Api.
     * @example
     * // Delete one Api
     * const Api = await prisma.api.delete({
     *   where: {
     *     // ... filter to delete one Api
     *   }
     * })
     * 
     */
    delete<T extends ApiDeleteArgs>(args: SelectSubset<T, ApiDeleteArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api.
     * @param {ApiUpdateArgs} args - Arguments to update one Api.
     * @example
     * // Update one Api
     * const api = await prisma.api.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUpdateArgs>(args: SelectSubset<T, ApiUpdateArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apis.
     * @param {ApiDeleteManyArgs} args - Arguments to filter Apis to delete.
     * @example
     * // Delete a few Apis
     * const { count } = await prisma.api.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiDeleteManyArgs>(args?: SelectSubset<T, ApiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUpdateManyArgs>(args: SelectSubset<T, ApiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis and returns the data updated in the database.
     * @param {ApiUpdateManyAndReturnArgs} args - Arguments to update many Apis.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api.
     * @param {ApiUpsertArgs} args - Arguments to update or create a Api.
     * @example
     * // Update or create a Api
     * const api = await prisma.api.upsert({
     *   create: {
     *     // ... data to create a Api
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api we want to update
     *   }
     * })
     */
    upsert<T extends ApiUpsertArgs>(args: SelectSubset<T, ApiUpsertArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCountArgs} args - Arguments to filter Apis to count.
     * @example
     * // Count the number of Apis
     * const count = await prisma.api.count({
     *   where: {
     *     // ... the filter for the Apis we want to count
     *   }
     * })
    **/
    count<T extends ApiCountArgs>(
      args?: Subset<T, ApiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiAggregateArgs>(args: Subset<T, ApiAggregateArgs>): Prisma.PrismaPromise<GetApiAggregateType<T>>

    /**
     * Group by Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiGroupByArgs['orderBy'] }
        : { orderBy?: ApiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Api model
   */
  readonly fields: ApiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Api.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userApiAccesses<T extends Api$userApiAccessesArgs<ExtArgs> = {}>(args?: Subset<T, Api$userApiAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageLogs<T extends Api$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, Api$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Api model
   */
  interface ApiFieldRefs {
    readonly id: FieldRef<"Api", 'BigInt'>
    readonly api_name: FieldRef<"Api", 'String'>
    readonly slug: FieldRef<"Api", 'String'>
    readonly default_daily_limit: FieldRef<"Api", 'Int'>
    readonly basic_parameters: FieldRef<"Api", 'Json'>
    readonly advanced_parameters: FieldRef<"Api", 'Json'>
    readonly is_active: FieldRef<"Api", 'Boolean'>
    readonly created_at: FieldRef<"Api", 'DateTime'>
    readonly updated_at: FieldRef<"Api", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Api findUnique
   */
  export type ApiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api findUniqueOrThrow
   */
  export type ApiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api findFirst
   */
  export type ApiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api findFirstOrThrow
   */
  export type ApiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api findMany
   */
  export type ApiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Apis to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api create
   */
  export type ApiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The data needed to create a Api.
     */
    data: XOR<ApiCreateInput, ApiUncheckedCreateInput>
  }

  /**
   * Api createMany
   */
  export type ApiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apis.
     */
    data: ApiCreateManyInput | ApiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Api createManyAndReturn
   */
  export type ApiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * The data used to create many Apis.
     */
    data: ApiCreateManyInput | ApiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Api update
   */
  export type ApiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The data needed to update a Api.
     */
    data: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
    /**
     * Choose, which Api to update.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api updateMany
   */
  export type ApiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apis.
     */
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyInput>
    /**
     * Filter which Apis to update
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to update.
     */
    limit?: number
  }

  /**
   * Api updateManyAndReturn
   */
  export type ApiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * The data used to update Apis.
     */
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyInput>
    /**
     * Filter which Apis to update
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to update.
     */
    limit?: number
  }

  /**
   * Api upsert
   */
  export type ApiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The filter to search for the Api to update in case it exists.
     */
    where: ApiWhereUniqueInput
    /**
     * In case the Api found by the `where` argument doesn't exist, create a new Api with this data.
     */
    create: XOR<ApiCreateInput, ApiUncheckedCreateInput>
    /**
     * In case the Api was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
  }

  /**
   * Api delete
   */
  export type ApiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter which Api to delete.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api deleteMany
   */
  export type ApiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apis to delete
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to delete.
     */
    limit?: number
  }

  /**
   * Api.userApiAccesses
   */
  export type Api$userApiAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    where?: UserApiAccessWhereInput
    orderBy?: UserApiAccessOrderByWithRelationInput | UserApiAccessOrderByWithRelationInput[]
    cursor?: UserApiAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserApiAccessScalarFieldEnum | UserApiAccessScalarFieldEnum[]
  }

  /**
   * Api.usageLogs
   */
  export type Api$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    where?: ApiUsageLogWhereInput
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    cursor?: ApiUsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * Api without action
   */
  export type ApiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
  }


  /**
   * Model ApiToken
   */

  export type AggregateApiToken = {
    _count: ApiTokenCountAggregateOutputType | null
    _avg: ApiTokenAvgAggregateOutputType | null
    _sum: ApiTokenSumAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  export type ApiTokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ApiTokenSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type ApiTokenMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    token: string | null
    is_active: boolean | null
    created_at: Date | null
    last_used_at: Date | null
    refreshed_at: Date | null
  }

  export type ApiTokenMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    token: string | null
    is_active: boolean | null
    created_at: Date | null
    last_used_at: Date | null
    refreshed_at: Date | null
  }

  export type ApiTokenCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    is_active: number
    created_at: number
    last_used_at: number
    refreshed_at: number
    _all: number
  }


  export type ApiTokenAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ApiTokenSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ApiTokenMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    is_active?: true
    created_at?: true
    last_used_at?: true
    refreshed_at?: true
  }

  export type ApiTokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    is_active?: true
    created_at?: true
    last_used_at?: true
    refreshed_at?: true
  }

  export type ApiTokenCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    is_active?: true
    created_at?: true
    last_used_at?: true
    refreshed_at?: true
    _all?: true
  }

  export type ApiTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiToken to aggregate.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiTokens
    **/
    _count?: true | ApiTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiTokenMaxAggregateInputType
  }

  export type GetApiTokenAggregateType<T extends ApiTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateApiToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiToken[P]>
      : GetScalarType<T[P], AggregateApiToken[P]>
  }




  export type ApiTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiTokenWhereInput
    orderBy?: ApiTokenOrderByWithAggregationInput | ApiTokenOrderByWithAggregationInput[]
    by: ApiTokenScalarFieldEnum[] | ApiTokenScalarFieldEnum
    having?: ApiTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiTokenCountAggregateInputType | true
    _avg?: ApiTokenAvgAggregateInputType
    _sum?: ApiTokenSumAggregateInputType
    _min?: ApiTokenMinAggregateInputType
    _max?: ApiTokenMaxAggregateInputType
  }

  export type ApiTokenGroupByOutputType = {
    id: bigint
    user_id: bigint
    token: string
    is_active: boolean
    created_at: Date
    last_used_at: Date | null
    refreshed_at: Date | null
    _count: ApiTokenCountAggregateOutputType | null
    _avg: ApiTokenAvgAggregateOutputType | null
    _sum: ApiTokenSumAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  type GetApiTokenGroupByPayload<T extends ApiTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
        }
      >
    >


  export type ApiTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
    refreshed_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
    refreshed_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
    refreshed_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
    refreshed_at?: boolean
  }

  export type ApiTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "is_active" | "created_at" | "last_used_at" | "refreshed_at", ExtArgs["result"]["apiToken"]>
  export type ApiTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      token: string
      is_active: boolean
      created_at: Date
      last_used_at: Date | null
      refreshed_at: Date | null
    }, ExtArgs["result"]["apiToken"]>
    composites: {}
  }

  type ApiTokenGetPayload<S extends boolean | null | undefined | ApiTokenDefaultArgs> = $Result.GetResult<Prisma.$ApiTokenPayload, S>

  type ApiTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiTokenCountAggregateInputType | true
    }

  export interface ApiTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiToken'], meta: { name: 'ApiToken' } }
    /**
     * Find zero or one ApiToken that matches the filter.
     * @param {ApiTokenFindUniqueArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiTokenFindUniqueArgs>(args: SelectSubset<T, ApiTokenFindUniqueArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiTokenFindUniqueOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiTokenFindFirstArgs>(args?: SelectSubset<T, ApiTokenFindFirstArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiTokens
     * const apiTokens = await prisma.apiToken.findMany()
     * 
     * // Get first 10 ApiTokens
     * const apiTokens = await prisma.apiToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiTokenFindManyArgs>(args?: SelectSubset<T, ApiTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiToken.
     * @param {ApiTokenCreateArgs} args - Arguments to create a ApiToken.
     * @example
     * // Create one ApiToken
     * const ApiToken = await prisma.apiToken.create({
     *   data: {
     *     // ... data to create a ApiToken
     *   }
     * })
     * 
     */
    create<T extends ApiTokenCreateArgs>(args: SelectSubset<T, ApiTokenCreateArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiTokens.
     * @param {ApiTokenCreateManyArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiTokenCreateManyArgs>(args?: SelectSubset<T, ApiTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiTokens and returns the data saved in the database.
     * @param {ApiTokenCreateManyAndReturnArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiTokens and only return the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiToken.
     * @param {ApiTokenDeleteArgs} args - Arguments to delete one ApiToken.
     * @example
     * // Delete one ApiToken
     * const ApiToken = await prisma.apiToken.delete({
     *   where: {
     *     // ... filter to delete one ApiToken
     *   }
     * })
     * 
     */
    delete<T extends ApiTokenDeleteArgs>(args: SelectSubset<T, ApiTokenDeleteArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiToken.
     * @param {ApiTokenUpdateArgs} args - Arguments to update one ApiToken.
     * @example
     * // Update one ApiToken
     * const apiToken = await prisma.apiToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiTokenUpdateArgs>(args: SelectSubset<T, ApiTokenUpdateArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiTokens.
     * @param {ApiTokenDeleteManyArgs} args - Arguments to filter ApiTokens to delete.
     * @example
     * // Delete a few ApiTokens
     * const { count } = await prisma.apiToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiTokenDeleteManyArgs>(args?: SelectSubset<T, ApiTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiTokens
     * const apiToken = await prisma.apiToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiTokenUpdateManyArgs>(args: SelectSubset<T, ApiTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiTokens and returns the data updated in the database.
     * @param {ApiTokenUpdateManyAndReturnArgs} args - Arguments to update many ApiTokens.
     * @example
     * // Update many ApiTokens
     * const apiToken = await prisma.apiToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiTokens and only return the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiToken.
     * @param {ApiTokenUpsertArgs} args - Arguments to update or create a ApiToken.
     * @example
     * // Update or create a ApiToken
     * const apiToken = await prisma.apiToken.upsert({
     *   create: {
     *     // ... data to create a ApiToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiToken we want to update
     *   }
     * })
     */
    upsert<T extends ApiTokenUpsertArgs>(args: SelectSubset<T, ApiTokenUpsertArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenCountArgs} args - Arguments to filter ApiTokens to count.
     * @example
     * // Count the number of ApiTokens
     * const count = await prisma.apiToken.count({
     *   where: {
     *     // ... the filter for the ApiTokens we want to count
     *   }
     * })
    **/
    count<T extends ApiTokenCountArgs>(
      args?: Subset<T, ApiTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiTokenAggregateArgs>(args: Subset<T, ApiTokenAggregateArgs>): Prisma.PrismaPromise<GetApiTokenAggregateType<T>>

    /**
     * Group by ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiTokenGroupByArgs['orderBy'] }
        : { orderBy?: ApiTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiToken model
   */
  readonly fields: ApiTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiToken model
   */
  interface ApiTokenFieldRefs {
    readonly id: FieldRef<"ApiToken", 'BigInt'>
    readonly user_id: FieldRef<"ApiToken", 'BigInt'>
    readonly token: FieldRef<"ApiToken", 'String'>
    readonly is_active: FieldRef<"ApiToken", 'Boolean'>
    readonly created_at: FieldRef<"ApiToken", 'DateTime'>
    readonly last_used_at: FieldRef<"ApiToken", 'DateTime'>
    readonly refreshed_at: FieldRef<"ApiToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiToken findUnique
   */
  export type ApiTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findUniqueOrThrow
   */
  export type ApiTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findFirst
   */
  export type ApiTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findFirstOrThrow
   */
  export type ApiTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findMany
   */
  export type ApiTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiTokens to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken create
   */
  export type ApiTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiToken.
     */
    data: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
  }

  /**
   * ApiToken createMany
   */
  export type ApiTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiToken createManyAndReturn
   */
  export type ApiTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiToken update
   */
  export type ApiTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiToken.
     */
    data: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
    /**
     * Choose, which ApiToken to update.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken updateMany
   */
  export type ApiTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiTokens.
     */
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyInput>
    /**
     * Filter which ApiTokens to update
     */
    where?: ApiTokenWhereInput
    /**
     * Limit how many ApiTokens to update.
     */
    limit?: number
  }

  /**
   * ApiToken updateManyAndReturn
   */
  export type ApiTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * The data used to update ApiTokens.
     */
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyInput>
    /**
     * Filter which ApiTokens to update
     */
    where?: ApiTokenWhereInput
    /**
     * Limit how many ApiTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiToken upsert
   */
  export type ApiTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiToken to update in case it exists.
     */
    where: ApiTokenWhereUniqueInput
    /**
     * In case the ApiToken found by the `where` argument doesn't exist, create a new ApiToken with this data.
     */
    create: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
    /**
     * In case the ApiToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
  }

  /**
   * ApiToken delete
   */
  export type ApiTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter which ApiToken to delete.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken deleteMany
   */
  export type ApiTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiTokens to delete
     */
    where?: ApiTokenWhereInput
    /**
     * Limit how many ApiTokens to delete.
     */
    limit?: number
  }

  /**
   * ApiToken without action
   */
  export type ApiTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
  }


  /**
   * Model UserApiAccess
   */

  export type AggregateUserApiAccess = {
    _count: UserApiAccessCountAggregateOutputType | null
    _avg: UserApiAccessAvgAggregateOutputType | null
    _sum: UserApiAccessSumAggregateOutputType | null
    _min: UserApiAccessMinAggregateOutputType | null
    _max: UserApiAccessMaxAggregateOutputType | null
  }

  export type UserApiAccessAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    api_id: number | null
    daily_limit: number | null
  }

  export type UserApiAccessSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    api_id: bigint | null
    daily_limit: number | null
  }

  export type UserApiAccessMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    api_id: bigint | null
    daily_limit: number | null
    has_access: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserApiAccessMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    api_id: bigint | null
    daily_limit: number | null
    has_access: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserApiAccessCountAggregateOutputType = {
    id: number
    user_id: number
    api_id: number
    daily_limit: number
    has_access: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserApiAccessAvgAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    daily_limit?: true
  }

  export type UserApiAccessSumAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    daily_limit?: true
  }

  export type UserApiAccessMinAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    daily_limit?: true
    has_access?: true
    created_at?: true
    updated_at?: true
  }

  export type UserApiAccessMaxAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    daily_limit?: true
    has_access?: true
    created_at?: true
    updated_at?: true
  }

  export type UserApiAccessCountAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    daily_limit?: true
    has_access?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserApiAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiAccess to aggregate.
     */
    where?: UserApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiAccesses to fetch.
     */
    orderBy?: UserApiAccessOrderByWithRelationInput | UserApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserApiAccesses
    **/
    _count?: true | UserApiAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserApiAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserApiAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserApiAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserApiAccessMaxAggregateInputType
  }

  export type GetUserApiAccessAggregateType<T extends UserApiAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserApiAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserApiAccess[P]>
      : GetScalarType<T[P], AggregateUserApiAccess[P]>
  }




  export type UserApiAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiAccessWhereInput
    orderBy?: UserApiAccessOrderByWithAggregationInput | UserApiAccessOrderByWithAggregationInput[]
    by: UserApiAccessScalarFieldEnum[] | UserApiAccessScalarFieldEnum
    having?: UserApiAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserApiAccessCountAggregateInputType | true
    _avg?: UserApiAccessAvgAggregateInputType
    _sum?: UserApiAccessSumAggregateInputType
    _min?: UserApiAccessMinAggregateInputType
    _max?: UserApiAccessMaxAggregateInputType
  }

  export type UserApiAccessGroupByOutputType = {
    id: bigint
    user_id: bigint
    api_id: bigint
    daily_limit: number
    has_access: boolean
    created_at: Date
    updated_at: Date
    _count: UserApiAccessCountAggregateOutputType | null
    _avg: UserApiAccessAvgAggregateOutputType | null
    _sum: UserApiAccessSumAggregateOutputType | null
    _min: UserApiAccessMinAggregateOutputType | null
    _max: UserApiAccessMaxAggregateOutputType | null
  }

  type GetUserApiAccessGroupByPayload<T extends UserApiAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserApiAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserApiAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserApiAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserApiAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserApiAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    daily_limit?: boolean
    has_access?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiAccess"]>

  export type UserApiAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    daily_limit?: boolean
    has_access?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiAccess"]>

  export type UserApiAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    daily_limit?: boolean
    has_access?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiAccess"]>

  export type UserApiAccessSelectScalar = {
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    daily_limit?: boolean
    has_access?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserApiAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "api_id" | "daily_limit" | "has_access" | "created_at" | "updated_at", ExtArgs["result"]["userApiAccess"]>
  export type UserApiAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type UserApiAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type UserApiAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }

  export type $UserApiAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserApiAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      api: Prisma.$ApiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      api_id: bigint
      daily_limit: number
      has_access: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userApiAccess"]>
    composites: {}
  }

  type UserApiAccessGetPayload<S extends boolean | null | undefined | UserApiAccessDefaultArgs> = $Result.GetResult<Prisma.$UserApiAccessPayload, S>

  type UserApiAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserApiAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserApiAccessCountAggregateInputType | true
    }

  export interface UserApiAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserApiAccess'], meta: { name: 'UserApiAccess' } }
    /**
     * Find zero or one UserApiAccess that matches the filter.
     * @param {UserApiAccessFindUniqueArgs} args - Arguments to find a UserApiAccess
     * @example
     * // Get one UserApiAccess
     * const userApiAccess = await prisma.userApiAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserApiAccessFindUniqueArgs>(args: SelectSubset<T, UserApiAccessFindUniqueArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserApiAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserApiAccessFindUniqueOrThrowArgs} args - Arguments to find a UserApiAccess
     * @example
     * // Get one UserApiAccess
     * const userApiAccess = await prisma.userApiAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserApiAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, UserApiAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiAccessFindFirstArgs} args - Arguments to find a UserApiAccess
     * @example
     * // Get one UserApiAccess
     * const userApiAccess = await prisma.userApiAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserApiAccessFindFirstArgs>(args?: SelectSubset<T, UserApiAccessFindFirstArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiAccessFindFirstOrThrowArgs} args - Arguments to find a UserApiAccess
     * @example
     * // Get one UserApiAccess
     * const userApiAccess = await prisma.userApiAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserApiAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, UserApiAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserApiAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserApiAccesses
     * const userApiAccesses = await prisma.userApiAccess.findMany()
     * 
     * // Get first 10 UserApiAccesses
     * const userApiAccesses = await prisma.userApiAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userApiAccessWithIdOnly = await prisma.userApiAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserApiAccessFindManyArgs>(args?: SelectSubset<T, UserApiAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserApiAccess.
     * @param {UserApiAccessCreateArgs} args - Arguments to create a UserApiAccess.
     * @example
     * // Create one UserApiAccess
     * const UserApiAccess = await prisma.userApiAccess.create({
     *   data: {
     *     // ... data to create a UserApiAccess
     *   }
     * })
     * 
     */
    create<T extends UserApiAccessCreateArgs>(args: SelectSubset<T, UserApiAccessCreateArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserApiAccesses.
     * @param {UserApiAccessCreateManyArgs} args - Arguments to create many UserApiAccesses.
     * @example
     * // Create many UserApiAccesses
     * const userApiAccess = await prisma.userApiAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserApiAccessCreateManyArgs>(args?: SelectSubset<T, UserApiAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserApiAccesses and returns the data saved in the database.
     * @param {UserApiAccessCreateManyAndReturnArgs} args - Arguments to create many UserApiAccesses.
     * @example
     * // Create many UserApiAccesses
     * const userApiAccess = await prisma.userApiAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserApiAccesses and only return the `id`
     * const userApiAccessWithIdOnly = await prisma.userApiAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserApiAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, UserApiAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserApiAccess.
     * @param {UserApiAccessDeleteArgs} args - Arguments to delete one UserApiAccess.
     * @example
     * // Delete one UserApiAccess
     * const UserApiAccess = await prisma.userApiAccess.delete({
     *   where: {
     *     // ... filter to delete one UserApiAccess
     *   }
     * })
     * 
     */
    delete<T extends UserApiAccessDeleteArgs>(args: SelectSubset<T, UserApiAccessDeleteArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserApiAccess.
     * @param {UserApiAccessUpdateArgs} args - Arguments to update one UserApiAccess.
     * @example
     * // Update one UserApiAccess
     * const userApiAccess = await prisma.userApiAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserApiAccessUpdateArgs>(args: SelectSubset<T, UserApiAccessUpdateArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserApiAccesses.
     * @param {UserApiAccessDeleteManyArgs} args - Arguments to filter UserApiAccesses to delete.
     * @example
     * // Delete a few UserApiAccesses
     * const { count } = await prisma.userApiAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserApiAccessDeleteManyArgs>(args?: SelectSubset<T, UserApiAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserApiAccesses
     * const userApiAccess = await prisma.userApiAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserApiAccessUpdateManyArgs>(args: SelectSubset<T, UserApiAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiAccesses and returns the data updated in the database.
     * @param {UserApiAccessUpdateManyAndReturnArgs} args - Arguments to update many UserApiAccesses.
     * @example
     * // Update many UserApiAccesses
     * const userApiAccess = await prisma.userApiAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserApiAccesses and only return the `id`
     * const userApiAccessWithIdOnly = await prisma.userApiAccess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserApiAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, UserApiAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserApiAccess.
     * @param {UserApiAccessUpsertArgs} args - Arguments to update or create a UserApiAccess.
     * @example
     * // Update or create a UserApiAccess
     * const userApiAccess = await prisma.userApiAccess.upsert({
     *   create: {
     *     // ... data to create a UserApiAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserApiAccess we want to update
     *   }
     * })
     */
    upsert<T extends UserApiAccessUpsertArgs>(args: SelectSubset<T, UserApiAccessUpsertArgs<ExtArgs>>): Prisma__UserApiAccessClient<$Result.GetResult<Prisma.$UserApiAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserApiAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiAccessCountArgs} args - Arguments to filter UserApiAccesses to count.
     * @example
     * // Count the number of UserApiAccesses
     * const count = await prisma.userApiAccess.count({
     *   where: {
     *     // ... the filter for the UserApiAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserApiAccessCountArgs>(
      args?: Subset<T, UserApiAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserApiAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserApiAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserApiAccessAggregateArgs>(args: Subset<T, UserApiAccessAggregateArgs>): Prisma.PrismaPromise<GetUserApiAccessAggregateType<T>>

    /**
     * Group by UserApiAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserApiAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserApiAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserApiAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserApiAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserApiAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserApiAccess model
   */
  readonly fields: UserApiAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserApiAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserApiAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserApiAccess model
   */
  interface UserApiAccessFieldRefs {
    readonly id: FieldRef<"UserApiAccess", 'BigInt'>
    readonly user_id: FieldRef<"UserApiAccess", 'BigInt'>
    readonly api_id: FieldRef<"UserApiAccess", 'BigInt'>
    readonly daily_limit: FieldRef<"UserApiAccess", 'Int'>
    readonly has_access: FieldRef<"UserApiAccess", 'Boolean'>
    readonly created_at: FieldRef<"UserApiAccess", 'DateTime'>
    readonly updated_at: FieldRef<"UserApiAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserApiAccess findUnique
   */
  export type UserApiAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserApiAccess to fetch.
     */
    where: UserApiAccessWhereUniqueInput
  }

  /**
   * UserApiAccess findUniqueOrThrow
   */
  export type UserApiAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserApiAccess to fetch.
     */
    where: UserApiAccessWhereUniqueInput
  }

  /**
   * UserApiAccess findFirst
   */
  export type UserApiAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserApiAccess to fetch.
     */
    where?: UserApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiAccesses to fetch.
     */
    orderBy?: UserApiAccessOrderByWithRelationInput | UserApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiAccesses.
     */
    cursor?: UserApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiAccesses.
     */
    distinct?: UserApiAccessScalarFieldEnum | UserApiAccessScalarFieldEnum[]
  }

  /**
   * UserApiAccess findFirstOrThrow
   */
  export type UserApiAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserApiAccess to fetch.
     */
    where?: UserApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiAccesses to fetch.
     */
    orderBy?: UserApiAccessOrderByWithRelationInput | UserApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiAccesses.
     */
    cursor?: UserApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiAccesses.
     */
    distinct?: UserApiAccessScalarFieldEnum | UserApiAccessScalarFieldEnum[]
  }

  /**
   * UserApiAccess findMany
   */
  export type UserApiAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserApiAccesses to fetch.
     */
    where?: UserApiAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiAccesses to fetch.
     */
    orderBy?: UserApiAccessOrderByWithRelationInput | UserApiAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserApiAccesses.
     */
    cursor?: UserApiAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiAccesses.
     */
    skip?: number
    distinct?: UserApiAccessScalarFieldEnum | UserApiAccessScalarFieldEnum[]
  }

  /**
   * UserApiAccess create
   */
  export type UserApiAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a UserApiAccess.
     */
    data: XOR<UserApiAccessCreateInput, UserApiAccessUncheckedCreateInput>
  }

  /**
   * UserApiAccess createMany
   */
  export type UserApiAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserApiAccesses.
     */
    data: UserApiAccessCreateManyInput | UserApiAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserApiAccess createManyAndReturn
   */
  export type UserApiAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * The data used to create many UserApiAccesses.
     */
    data: UserApiAccessCreateManyInput | UserApiAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApiAccess update
   */
  export type UserApiAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a UserApiAccess.
     */
    data: XOR<UserApiAccessUpdateInput, UserApiAccessUncheckedUpdateInput>
    /**
     * Choose, which UserApiAccess to update.
     */
    where: UserApiAccessWhereUniqueInput
  }

  /**
   * UserApiAccess updateMany
   */
  export type UserApiAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserApiAccesses.
     */
    data: XOR<UserApiAccessUpdateManyMutationInput, UserApiAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserApiAccesses to update
     */
    where?: UserApiAccessWhereInput
    /**
     * Limit how many UserApiAccesses to update.
     */
    limit?: number
  }

  /**
   * UserApiAccess updateManyAndReturn
   */
  export type UserApiAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * The data used to update UserApiAccesses.
     */
    data: XOR<UserApiAccessUpdateManyMutationInput, UserApiAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserApiAccesses to update
     */
    where?: UserApiAccessWhereInput
    /**
     * Limit how many UserApiAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApiAccess upsert
   */
  export type UserApiAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the UserApiAccess to update in case it exists.
     */
    where: UserApiAccessWhereUniqueInput
    /**
     * In case the UserApiAccess found by the `where` argument doesn't exist, create a new UserApiAccess with this data.
     */
    create: XOR<UserApiAccessCreateInput, UserApiAccessUncheckedCreateInput>
    /**
     * In case the UserApiAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserApiAccessUpdateInput, UserApiAccessUncheckedUpdateInput>
  }

  /**
   * UserApiAccess delete
   */
  export type UserApiAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
    /**
     * Filter which UserApiAccess to delete.
     */
    where: UserApiAccessWhereUniqueInput
  }

  /**
   * UserApiAccess deleteMany
   */
  export type UserApiAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiAccesses to delete
     */
    where?: UserApiAccessWhereInput
    /**
     * Limit how many UserApiAccesses to delete.
     */
    limit?: number
  }

  /**
   * UserApiAccess without action
   */
  export type UserApiAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiAccess
     */
    select?: UserApiAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiAccess
     */
    omit?: UserApiAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiAccessInclude<ExtArgs> | null
  }


  /**
   * Model ApiUsageLog
   */

  export type AggregateApiUsageLog = {
    _count: ApiUsageLogCountAggregateOutputType | null
    _avg: ApiUsageLogAvgAggregateOutputType | null
    _sum: ApiUsageLogSumAggregateOutputType | null
    _min: ApiUsageLogMinAggregateOutputType | null
    _max: ApiUsageLogMaxAggregateOutputType | null
  }

  export type ApiUsageLogAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    api_id: number | null
    status_code: number | null
    api_response_time: number | null
  }

  export type ApiUsageLogSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    api_id: bigint | null
    status_code: number | null
    api_response_time: number | null
  }

  export type ApiUsageLogMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    api_id: bigint | null
    endpoint: string | null
    ip_address: string | null
    status_code: number | null
    created_at: Date | null
    updated_at: Date | null
    api_response_time: number | null
  }

  export type ApiUsageLogMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    api_id: bigint | null
    endpoint: string | null
    ip_address: string | null
    status_code: number | null
    created_at: Date | null
    updated_at: Date | null
    api_response_time: number | null
  }

  export type ApiUsageLogCountAggregateOutputType = {
    id: number
    user_id: number
    api_id: number
    endpoint: number
    payload: number
    ip_address: number
    status_code: number
    created_at: number
    updated_at: number
    api_response_time: number
    _all: number
  }


  export type ApiUsageLogAvgAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    status_code?: true
    api_response_time?: true
  }

  export type ApiUsageLogSumAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    status_code?: true
    api_response_time?: true
  }

  export type ApiUsageLogMinAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    endpoint?: true
    ip_address?: true
    status_code?: true
    created_at?: true
    updated_at?: true
    api_response_time?: true
  }

  export type ApiUsageLogMaxAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    endpoint?: true
    ip_address?: true
    status_code?: true
    created_at?: true
    updated_at?: true
    api_response_time?: true
  }

  export type ApiUsageLogCountAggregateInputType = {
    id?: true
    user_id?: true
    api_id?: true
    endpoint?: true
    payload?: true
    ip_address?: true
    status_code?: true
    created_at?: true
    updated_at?: true
    api_response_time?: true
    _all?: true
  }

  export type ApiUsageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsageLog to aggregate.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiUsageLogs
    **/
    _count?: true | ApiUsageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiUsageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiUsageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiUsageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiUsageLogMaxAggregateInputType
  }

  export type GetApiUsageLogAggregateType<T extends ApiUsageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiUsageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiUsageLog[P]>
      : GetScalarType<T[P], AggregateApiUsageLog[P]>
  }




  export type ApiUsageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
    orderBy?: ApiUsageLogOrderByWithAggregationInput | ApiUsageLogOrderByWithAggregationInput[]
    by: ApiUsageLogScalarFieldEnum[] | ApiUsageLogScalarFieldEnum
    having?: ApiUsageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiUsageLogCountAggregateInputType | true
    _avg?: ApiUsageLogAvgAggregateInputType
    _sum?: ApiUsageLogSumAggregateInputType
    _min?: ApiUsageLogMinAggregateInputType
    _max?: ApiUsageLogMaxAggregateInputType
  }

  export type ApiUsageLogGroupByOutputType = {
    id: bigint
    user_id: bigint
    api_id: bigint
    endpoint: string
    payload: JsonValue | null
    ip_address: string
    status_code: number | null
    created_at: Date
    updated_at: Date
    api_response_time: number | null
    _count: ApiUsageLogCountAggregateOutputType | null
    _avg: ApiUsageLogAvgAggregateOutputType | null
    _sum: ApiUsageLogSumAggregateOutputType | null
    _min: ApiUsageLogMinAggregateOutputType | null
    _max: ApiUsageLogMaxAggregateOutputType | null
  }

  type GetApiUsageLogGroupByPayload<T extends ApiUsageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiUsageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiUsageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiUsageLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiUsageLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiUsageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    endpoint?: boolean
    payload?: boolean
    ip_address?: boolean
    status_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    api_response_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    endpoint?: boolean
    payload?: boolean
    ip_address?: boolean
    status_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    api_response_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    endpoint?: boolean
    payload?: boolean
    ip_address?: boolean
    status_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    api_response_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectScalar = {
    id?: boolean
    user_id?: boolean
    api_id?: boolean
    endpoint?: boolean
    payload?: boolean
    ip_address?: boolean
    status_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    api_response_time?: boolean
  }

  export type ApiUsageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "api_id" | "endpoint" | "payload" | "ip_address" | "status_code" | "created_at" | "updated_at" | "api_response_time", ExtArgs["result"]["apiUsageLog"]>
  export type ApiUsageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }

  export type $ApiUsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiUsageLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      api: Prisma.$ApiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      api_id: bigint
      endpoint: string
      payload: Prisma.JsonValue | null
      ip_address: string
      status_code: number | null
      created_at: Date
      updated_at: Date
      api_response_time: number | null
    }, ExtArgs["result"]["apiUsageLog"]>
    composites: {}
  }

  type ApiUsageLogGetPayload<S extends boolean | null | undefined | ApiUsageLogDefaultArgs> = $Result.GetResult<Prisma.$ApiUsageLogPayload, S>

  type ApiUsageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiUsageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiUsageLogCountAggregateInputType | true
    }

  export interface ApiUsageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiUsageLog'], meta: { name: 'ApiUsageLog' } }
    /**
     * Find zero or one ApiUsageLog that matches the filter.
     * @param {ApiUsageLogFindUniqueArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiUsageLogFindUniqueArgs>(args: SelectSubset<T, ApiUsageLogFindUniqueArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiUsageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiUsageLogFindUniqueOrThrowArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiUsageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiUsageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindFirstArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiUsageLogFindFirstArgs>(args?: SelectSubset<T, ApiUsageLogFindFirstArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindFirstOrThrowArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiUsageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiUsageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiUsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiUsageLogs
     * const apiUsageLogs = await prisma.apiUsageLog.findMany()
     * 
     * // Get first 10 ApiUsageLogs
     * const apiUsageLogs = await prisma.apiUsageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiUsageLogFindManyArgs>(args?: SelectSubset<T, ApiUsageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiUsageLog.
     * @param {ApiUsageLogCreateArgs} args - Arguments to create a ApiUsageLog.
     * @example
     * // Create one ApiUsageLog
     * const ApiUsageLog = await prisma.apiUsageLog.create({
     *   data: {
     *     // ... data to create a ApiUsageLog
     *   }
     * })
     * 
     */
    create<T extends ApiUsageLogCreateArgs>(args: SelectSubset<T, ApiUsageLogCreateArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiUsageLogs.
     * @param {ApiUsageLogCreateManyArgs} args - Arguments to create many ApiUsageLogs.
     * @example
     * // Create many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiUsageLogCreateManyArgs>(args?: SelectSubset<T, ApiUsageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiUsageLogs and returns the data saved in the database.
     * @param {ApiUsageLogCreateManyAndReturnArgs} args - Arguments to create many ApiUsageLogs.
     * @example
     * // Create many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiUsageLogs and only return the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiUsageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiUsageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiUsageLog.
     * @param {ApiUsageLogDeleteArgs} args - Arguments to delete one ApiUsageLog.
     * @example
     * // Delete one ApiUsageLog
     * const ApiUsageLog = await prisma.apiUsageLog.delete({
     *   where: {
     *     // ... filter to delete one ApiUsageLog
     *   }
     * })
     * 
     */
    delete<T extends ApiUsageLogDeleteArgs>(args: SelectSubset<T, ApiUsageLogDeleteArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiUsageLog.
     * @param {ApiUsageLogUpdateArgs} args - Arguments to update one ApiUsageLog.
     * @example
     * // Update one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUsageLogUpdateArgs>(args: SelectSubset<T, ApiUsageLogUpdateArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiUsageLogs.
     * @param {ApiUsageLogDeleteManyArgs} args - Arguments to filter ApiUsageLogs to delete.
     * @example
     * // Delete a few ApiUsageLogs
     * const { count } = await prisma.apiUsageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiUsageLogDeleteManyArgs>(args?: SelectSubset<T, ApiUsageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUsageLogUpdateManyArgs>(args: SelectSubset<T, ApiUsageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsageLogs and returns the data updated in the database.
     * @param {ApiUsageLogUpdateManyAndReturnArgs} args - Arguments to update many ApiUsageLogs.
     * @example
     * // Update many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiUsageLogs and only return the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiUsageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUsageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiUsageLog.
     * @param {ApiUsageLogUpsertArgs} args - Arguments to update or create a ApiUsageLog.
     * @example
     * // Update or create a ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.upsert({
     *   create: {
     *     // ... data to create a ApiUsageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiUsageLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiUsageLogUpsertArgs>(args: SelectSubset<T, ApiUsageLogUpsertArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogCountArgs} args - Arguments to filter ApiUsageLogs to count.
     * @example
     * // Count the number of ApiUsageLogs
     * const count = await prisma.apiUsageLog.count({
     *   where: {
     *     // ... the filter for the ApiUsageLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiUsageLogCountArgs>(
      args?: Subset<T, ApiUsageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiUsageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiUsageLogAggregateArgs>(args: Subset<T, ApiUsageLogAggregateArgs>): Prisma.PrismaPromise<GetApiUsageLogAggregateType<T>>

    /**
     * Group by ApiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiUsageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiUsageLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiUsageLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiUsageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiUsageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiUsageLog model
   */
  readonly fields: ApiUsageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiUsageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiUsageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiUsageLog model
   */
  interface ApiUsageLogFieldRefs {
    readonly id: FieldRef<"ApiUsageLog", 'BigInt'>
    readonly user_id: FieldRef<"ApiUsageLog", 'BigInt'>
    readonly api_id: FieldRef<"ApiUsageLog", 'BigInt'>
    readonly endpoint: FieldRef<"ApiUsageLog", 'String'>
    readonly payload: FieldRef<"ApiUsageLog", 'Json'>
    readonly ip_address: FieldRef<"ApiUsageLog", 'String'>
    readonly status_code: FieldRef<"ApiUsageLog", 'Int'>
    readonly created_at: FieldRef<"ApiUsageLog", 'DateTime'>
    readonly updated_at: FieldRef<"ApiUsageLog", 'DateTime'>
    readonly api_response_time: FieldRef<"ApiUsageLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApiUsageLog findUnique
   */
  export type ApiUsageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog findUniqueOrThrow
   */
  export type ApiUsageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog findFirst
   */
  export type ApiUsageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsageLogs.
     */
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog findFirstOrThrow
   */
  export type ApiUsageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsageLogs.
     */
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog findMany
   */
  export type ApiUsageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLogs to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog create
   */
  export type ApiUsageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiUsageLog.
     */
    data: XOR<ApiUsageLogCreateInput, ApiUsageLogUncheckedCreateInput>
  }

  /**
   * ApiUsageLog createMany
   */
  export type ApiUsageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiUsageLogs.
     */
    data: ApiUsageLogCreateManyInput | ApiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiUsageLog createManyAndReturn
   */
  export type ApiUsageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiUsageLogs.
     */
    data: ApiUsageLogCreateManyInput | ApiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsageLog update
   */
  export type ApiUsageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiUsageLog.
     */
    data: XOR<ApiUsageLogUpdateInput, ApiUsageLogUncheckedUpdateInput>
    /**
     * Choose, which ApiUsageLog to update.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog updateMany
   */
  export type ApiUsageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiUsageLogs.
     */
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsageLogs to update
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to update.
     */
    limit?: number
  }

  /**
   * ApiUsageLog updateManyAndReturn
   */
  export type ApiUsageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiUsageLogs.
     */
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsageLogs to update
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsageLog upsert
   */
  export type ApiUsageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiUsageLog to update in case it exists.
     */
    where: ApiUsageLogWhereUniqueInput
    /**
     * In case the ApiUsageLog found by the `where` argument doesn't exist, create a new ApiUsageLog with this data.
     */
    create: XOR<ApiUsageLogCreateInput, ApiUsageLogUncheckedCreateInput>
    /**
     * In case the ApiUsageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUsageLogUpdateInput, ApiUsageLogUncheckedUpdateInput>
  }

  /**
   * ApiUsageLog delete
   */
  export type ApiUsageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter which ApiUsageLog to delete.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog deleteMany
   */
  export type ApiUsageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsageLogs to delete
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiUsageLog without action
   */
  export type ApiUsageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password_hash: 'password_hash',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApiScalarFieldEnum: {
    id: 'id',
    api_name: 'api_name',
    slug: 'slug',
    default_daily_limit: 'default_daily_limit',
    basic_parameters: 'basic_parameters',
    advanced_parameters: 'advanced_parameters',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ApiScalarFieldEnum = (typeof ApiScalarFieldEnum)[keyof typeof ApiScalarFieldEnum]


  export const ApiTokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    is_active: 'is_active',
    created_at: 'created_at',
    last_used_at: 'last_used_at',
    refreshed_at: 'refreshed_at'
  };

  export type ApiTokenScalarFieldEnum = (typeof ApiTokenScalarFieldEnum)[keyof typeof ApiTokenScalarFieldEnum]


  export const UserApiAccessScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    api_id: 'api_id',
    daily_limit: 'daily_limit',
    has_access: 'has_access',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserApiAccessScalarFieldEnum = (typeof UserApiAccessScalarFieldEnum)[keyof typeof UserApiAccessScalarFieldEnum]


  export const ApiUsageLogScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    api_id: 'api_id',
    endpoint: 'endpoint',
    payload: 'payload',
    ip_address: 'ip_address',
    status_code: 'status_code',
    created_at: 'created_at',
    updated_at: 'updated_at',
    api_response_time: 'api_response_time'
  };

  export type ApiUsageLogScalarFieldEnum = (typeof ApiUsageLogScalarFieldEnum)[keyof typeof ApiUsageLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password_hash?: StringNullableFilter<"User"> | string | null
    status?: EnumStatusNullableFilter<"User"> | $Enums.Status | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    apiTokens?: ApiTokenListRelationFilter
    apiAccesses?: UserApiAccessListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    apiTokens?: ApiTokenOrderByRelationAggregateInput
    apiAccesses?: UserApiAccessOrderByRelationAggregateInput
    usageLogs?: ApiUsageLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password_hash?: StringNullableFilter<"User"> | string | null
    status?: EnumStatusNullableFilter<"User"> | $Enums.Status | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    apiTokens?: ApiTokenListRelationFilter
    apiAccesses?: UserApiAccessListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumStatusNullableWithAggregatesFilter<"User"> | $Enums.Status | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApiWhereInput = {
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    id?: BigIntFilter<"Api"> | bigint | number
    api_name?: StringFilter<"Api"> | string
    slug?: StringFilter<"Api"> | string
    default_daily_limit?: IntFilter<"Api"> | number
    basic_parameters?: JsonFilter<"Api">
    advanced_parameters?: JsonNullableFilter<"Api">
    is_active?: BoolFilter<"Api"> | boolean
    created_at?: DateTimeFilter<"Api"> | Date | string
    updated_at?: DateTimeFilter<"Api"> | Date | string
    userApiAccesses?: UserApiAccessListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }

  export type ApiOrderByWithRelationInput = {
    id?: SortOrder
    api_name?: SortOrder
    slug?: SortOrder
    default_daily_limit?: SortOrder
    basic_parameters?: SortOrder
    advanced_parameters?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userApiAccesses?: UserApiAccessOrderByRelationAggregateInput
    usageLogs?: ApiUsageLogOrderByRelationAggregateInput
  }

  export type ApiWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    api_name?: string
    slug?: string
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    default_daily_limit?: IntFilter<"Api"> | number
    basic_parameters?: JsonFilter<"Api">
    advanced_parameters?: JsonNullableFilter<"Api">
    is_active?: BoolFilter<"Api"> | boolean
    created_at?: DateTimeFilter<"Api"> | Date | string
    updated_at?: DateTimeFilter<"Api"> | Date | string
    userApiAccesses?: UserApiAccessListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }, "id" | "api_name" | "slug">

  export type ApiOrderByWithAggregationInput = {
    id?: SortOrder
    api_name?: SortOrder
    slug?: SortOrder
    default_daily_limit?: SortOrder
    basic_parameters?: SortOrder
    advanced_parameters?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ApiCountOrderByAggregateInput
    _avg?: ApiAvgOrderByAggregateInput
    _max?: ApiMaxOrderByAggregateInput
    _min?: ApiMinOrderByAggregateInput
    _sum?: ApiSumOrderByAggregateInput
  }

  export type ApiScalarWhereWithAggregatesInput = {
    AND?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    OR?: ApiScalarWhereWithAggregatesInput[]
    NOT?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Api"> | bigint | number
    api_name?: StringWithAggregatesFilter<"Api"> | string
    slug?: StringWithAggregatesFilter<"Api"> | string
    default_daily_limit?: IntWithAggregatesFilter<"Api"> | number
    basic_parameters?: JsonWithAggregatesFilter<"Api">
    advanced_parameters?: JsonNullableWithAggregatesFilter<"Api">
    is_active?: BoolWithAggregatesFilter<"Api"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Api"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Api"> | Date | string
  }

  export type ApiTokenWhereInput = {
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    id?: BigIntFilter<"ApiToken"> | bigint | number
    user_id?: BigIntFilter<"ApiToken"> | bigint | number
    token?: StringFilter<"ApiToken"> | string
    is_active?: BoolFilter<"ApiToken"> | boolean
    created_at?: DateTimeFilter<"ApiToken"> | Date | string
    last_used_at?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
    refreshed_at?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApiTokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrderInput | SortOrder
    refreshed_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    token?: string
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    user_id?: BigIntFilter<"ApiToken"> | bigint | number
    is_active?: BoolFilter<"ApiToken"> | boolean
    created_at?: DateTimeFilter<"ApiToken"> | Date | string
    last_used_at?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
    refreshed_at?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type ApiTokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrderInput | SortOrder
    refreshed_at?: SortOrderInput | SortOrder
    _count?: ApiTokenCountOrderByAggregateInput
    _avg?: ApiTokenAvgOrderByAggregateInput
    _max?: ApiTokenMaxOrderByAggregateInput
    _min?: ApiTokenMinOrderByAggregateInput
    _sum?: ApiTokenSumOrderByAggregateInput
  }

  export type ApiTokenScalarWhereWithAggregatesInput = {
    AND?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    OR?: ApiTokenScalarWhereWithAggregatesInput[]
    NOT?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ApiToken"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"ApiToken"> | bigint | number
    token?: StringWithAggregatesFilter<"ApiToken"> | string
    is_active?: BoolWithAggregatesFilter<"ApiToken"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ApiToken"> | Date | string
    last_used_at?: DateTimeNullableWithAggregatesFilter<"ApiToken"> | Date | string | null
    refreshed_at?: DateTimeNullableWithAggregatesFilter<"ApiToken"> | Date | string | null
  }

  export type UserApiAccessWhereInput = {
    AND?: UserApiAccessWhereInput | UserApiAccessWhereInput[]
    OR?: UserApiAccessWhereInput[]
    NOT?: UserApiAccessWhereInput | UserApiAccessWhereInput[]
    id?: BigIntFilter<"UserApiAccess"> | bigint | number
    user_id?: BigIntFilter<"UserApiAccess"> | bigint | number
    api_id?: BigIntFilter<"UserApiAccess"> | bigint | number
    daily_limit?: IntFilter<"UserApiAccess"> | number
    has_access?: BoolFilter<"UserApiAccess"> | boolean
    created_at?: DateTimeFilter<"UserApiAccess"> | Date | string
    updated_at?: DateTimeFilter<"UserApiAccess"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }

  export type UserApiAccessOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    daily_limit?: SortOrder
    has_access?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    api?: ApiOrderByWithRelationInput
  }

  export type UserApiAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id_api_id?: UserApiAccessUser_idApi_idCompoundUniqueInput
    AND?: UserApiAccessWhereInput | UserApiAccessWhereInput[]
    OR?: UserApiAccessWhereInput[]
    NOT?: UserApiAccessWhereInput | UserApiAccessWhereInput[]
    user_id?: BigIntFilter<"UserApiAccess"> | bigint | number
    api_id?: BigIntFilter<"UserApiAccess"> | bigint | number
    daily_limit?: IntFilter<"UserApiAccess"> | number
    has_access?: BoolFilter<"UserApiAccess"> | boolean
    created_at?: DateTimeFilter<"UserApiAccess"> | Date | string
    updated_at?: DateTimeFilter<"UserApiAccess"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }, "id" | "user_id_api_id">

  export type UserApiAccessOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    daily_limit?: SortOrder
    has_access?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserApiAccessCountOrderByAggregateInput
    _avg?: UserApiAccessAvgOrderByAggregateInput
    _max?: UserApiAccessMaxOrderByAggregateInput
    _min?: UserApiAccessMinOrderByAggregateInput
    _sum?: UserApiAccessSumOrderByAggregateInput
  }

  export type UserApiAccessScalarWhereWithAggregatesInput = {
    AND?: UserApiAccessScalarWhereWithAggregatesInput | UserApiAccessScalarWhereWithAggregatesInput[]
    OR?: UserApiAccessScalarWhereWithAggregatesInput[]
    NOT?: UserApiAccessScalarWhereWithAggregatesInput | UserApiAccessScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserApiAccess"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"UserApiAccess"> | bigint | number
    api_id?: BigIntWithAggregatesFilter<"UserApiAccess"> | bigint | number
    daily_limit?: IntWithAggregatesFilter<"UserApiAccess"> | number
    has_access?: BoolWithAggregatesFilter<"UserApiAccess"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"UserApiAccess"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserApiAccess"> | Date | string
  }

  export type ApiUsageLogWhereInput = {
    AND?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    OR?: ApiUsageLogWhereInput[]
    NOT?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    user_id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    api_id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    endpoint?: StringFilter<"ApiUsageLog"> | string
    payload?: JsonNullableFilter<"ApiUsageLog">
    ip_address?: StringFilter<"ApiUsageLog"> | string
    status_code?: IntNullableFilter<"ApiUsageLog"> | number | null
    created_at?: DateTimeFilter<"ApiUsageLog"> | Date | string
    updated_at?: DateTimeFilter<"ApiUsageLog"> | Date | string
    api_response_time?: IntNullableFilter<"ApiUsageLog"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }

  export type ApiUsageLogOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    endpoint?: SortOrder
    payload?: SortOrderInput | SortOrder
    ip_address?: SortOrder
    status_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    api_response_time?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    api?: ApiOrderByWithRelationInput
  }

  export type ApiUsageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    OR?: ApiUsageLogWhereInput[]
    NOT?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    user_id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    api_id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    endpoint?: StringFilter<"ApiUsageLog"> | string
    payload?: JsonNullableFilter<"ApiUsageLog">
    ip_address?: StringFilter<"ApiUsageLog"> | string
    status_code?: IntNullableFilter<"ApiUsageLog"> | number | null
    created_at?: DateTimeFilter<"ApiUsageLog"> | Date | string
    updated_at?: DateTimeFilter<"ApiUsageLog"> | Date | string
    api_response_time?: IntNullableFilter<"ApiUsageLog"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }, "id">

  export type ApiUsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    endpoint?: SortOrder
    payload?: SortOrderInput | SortOrder
    ip_address?: SortOrder
    status_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    api_response_time?: SortOrderInput | SortOrder
    _count?: ApiUsageLogCountOrderByAggregateInput
    _avg?: ApiUsageLogAvgOrderByAggregateInput
    _max?: ApiUsageLogMaxOrderByAggregateInput
    _min?: ApiUsageLogMinOrderByAggregateInput
    _sum?: ApiUsageLogSumOrderByAggregateInput
  }

  export type ApiUsageLogScalarWhereWithAggregatesInput = {
    AND?: ApiUsageLogScalarWhereWithAggregatesInput | ApiUsageLogScalarWhereWithAggregatesInput[]
    OR?: ApiUsageLogScalarWhereWithAggregatesInput[]
    NOT?: ApiUsageLogScalarWhereWithAggregatesInput | ApiUsageLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ApiUsageLog"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"ApiUsageLog"> | bigint | number
    api_id?: BigIntWithAggregatesFilter<"ApiUsageLog"> | bigint | number
    endpoint?: StringWithAggregatesFilter<"ApiUsageLog"> | string
    payload?: JsonNullableWithAggregatesFilter<"ApiUsageLog">
    ip_address?: StringWithAggregatesFilter<"ApiUsageLog"> | string
    status_code?: IntNullableWithAggregatesFilter<"ApiUsageLog"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"ApiUsageLog"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ApiUsageLog"> | Date | string
    api_response_time?: IntNullableWithAggregatesFilter<"ApiUsageLog"> | number | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: ApiTokenCreateNestedManyWithoutUserInput
    apiAccesses?: UserApiAccessCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: ApiTokenUncheckedCreateNestedManyWithoutUserInput
    apiAccesses?: UserApiAccessUncheckedCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: ApiTokenUpdateManyWithoutUserNestedInput
    apiAccesses?: UserApiAccessUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: ApiTokenUncheckedUpdateManyWithoutUserNestedInput
    apiAccesses?: UserApiAccessUncheckedUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreateInput = {
    id?: bigint | number
    api_name: string
    slug: string
    default_daily_limit?: number
    basic_parameters: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userApiAccesses?: UserApiAccessCreateNestedManyWithoutApiInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateInput = {
    id?: bigint | number
    api_name: string
    slug: string
    default_daily_limit?: number
    basic_parameters: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userApiAccesses?: UserApiAccessUncheckedCreateNestedManyWithoutApiInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userApiAccesses?: UserApiAccessUpdateManyWithoutApiNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userApiAccesses?: UserApiAccessUncheckedUpdateManyWithoutApiNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiCreateManyInput = {
    id?: bigint | number
    api_name: string
    slug: string
    default_daily_limit?: number
    basic_parameters: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApiUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenCreateInput = {
    id?: bigint | number
    token: string
    is_active?: boolean
    created_at?: Date | string
    last_used_at?: Date | string | null
    refreshed_at?: Date | string | null
    user: UserCreateNestedOneWithoutApiTokensInput
  }

  export type ApiTokenUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    token: string
    is_active?: boolean
    created_at?: Date | string
    last_used_at?: Date | string | null
    refreshed_at?: Date | string | null
  }

  export type ApiTokenUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutApiTokensNestedInput
  }

  export type ApiTokenUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiTokenCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    token: string
    is_active?: boolean
    created_at?: Date | string
    last_used_at?: Date | string | null
    refreshed_at?: Date | string | null
  }

  export type ApiTokenUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiTokenUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserApiAccessCreateInput = {
    id?: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutApiAccessesInput
    api: ApiCreateNestedOneWithoutUserApiAccessesInput
  }

  export type UserApiAccessUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    api_id: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserApiAccessUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiAccessesNestedInput
    api?: ApiUpdateOneRequiredWithoutUserApiAccessesNestedInput
  }

  export type UserApiAccessUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiAccessCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    api_id: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserApiAccessUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiAccessUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogCreateInput = {
    id?: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
    user: UserCreateNestedOneWithoutUsageLogsInput
    api: ApiCreateNestedOneWithoutUsageLogsInput
  }

  export type ApiUsageLogUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    api_id: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
  }

  export type ApiUsageLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutUsageLogsNestedInput
    api?: ApiUpdateOneRequiredWithoutUsageLogsNestedInput
  }

  export type ApiUsageLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiUsageLogCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    api_id: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
  }

  export type ApiUsageLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiUsageLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApiTokenListRelationFilter = {
    every?: ApiTokenWhereInput
    some?: ApiTokenWhereInput
    none?: ApiTokenWhereInput
  }

  export type UserApiAccessListRelationFilter = {
    every?: UserApiAccessWhereInput
    some?: UserApiAccessWhereInput
    none?: UserApiAccessWhereInput
  }

  export type ApiUsageLogListRelationFilter = {
    every?: ApiUsageLogWhereInput
    some?: ApiUsageLogWhereInput
    none?: ApiUsageLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserApiAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiUsageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApiCountOrderByAggregateInput = {
    id?: SortOrder
    api_name?: SortOrder
    slug?: SortOrder
    default_daily_limit?: SortOrder
    basic_parameters?: SortOrder
    advanced_parameters?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApiAvgOrderByAggregateInput = {
    id?: SortOrder
    default_daily_limit?: SortOrder
  }

  export type ApiMaxOrderByAggregateInput = {
    id?: SortOrder
    api_name?: SortOrder
    slug?: SortOrder
    default_daily_limit?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApiMinOrderByAggregateInput = {
    id?: SortOrder
    api_name?: SortOrder
    slug?: SortOrder
    default_daily_limit?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApiSumOrderByAggregateInput = {
    id?: SortOrder
    default_daily_limit?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApiTokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
    refreshed_at?: SortOrder
  }

  export type ApiTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ApiTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
    refreshed_at?: SortOrder
  }

  export type ApiTokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
    refreshed_at?: SortOrder
  }

  export type ApiTokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ApiScalarRelationFilter = {
    is?: ApiWhereInput
    isNot?: ApiWhereInput
  }

  export type UserApiAccessUser_idApi_idCompoundUniqueInput = {
    user_id: bigint | number
    api_id: bigint | number
  }

  export type UserApiAccessCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    daily_limit?: SortOrder
    has_access?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserApiAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    daily_limit?: SortOrder
  }

  export type UserApiAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    daily_limit?: SortOrder
    has_access?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserApiAccessMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    daily_limit?: SortOrder
    has_access?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserApiAccessSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    daily_limit?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ApiUsageLogCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    endpoint?: SortOrder
    payload?: SortOrder
    ip_address?: SortOrder
    status_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    api_response_time?: SortOrder
  }

  export type ApiUsageLogAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    status_code?: SortOrder
    api_response_time?: SortOrder
  }

  export type ApiUsageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    endpoint?: SortOrder
    ip_address?: SortOrder
    status_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    api_response_time?: SortOrder
  }

  export type ApiUsageLogMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    endpoint?: SortOrder
    ip_address?: SortOrder
    status_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    api_response_time?: SortOrder
  }

  export type ApiUsageLogSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    api_id?: SortOrder
    status_code?: SortOrder
    api_response_time?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ApiTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiTokenCreateWithoutUserInput, ApiTokenUncheckedCreateWithoutUserInput> | ApiTokenCreateWithoutUserInput[] | ApiTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutUserInput | ApiTokenCreateOrConnectWithoutUserInput[]
    createMany?: ApiTokenCreateManyUserInputEnvelope
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
  }

  export type UserApiAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApiAccessCreateWithoutUserInput, UserApiAccessUncheckedCreateWithoutUserInput> | UserApiAccessCreateWithoutUserInput[] | UserApiAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutUserInput | UserApiAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserApiAccessCreateManyUserInputEnvelope
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
  }

  export type ApiUsageLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type ApiTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiTokenCreateWithoutUserInput, ApiTokenUncheckedCreateWithoutUserInput> | ApiTokenCreateWithoutUserInput[] | ApiTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutUserInput | ApiTokenCreateOrConnectWithoutUserInput[]
    createMany?: ApiTokenCreateManyUserInputEnvelope
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
  }

  export type UserApiAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApiAccessCreateWithoutUserInput, UserApiAccessUncheckedCreateWithoutUserInput> | UserApiAccessCreateWithoutUserInput[] | UserApiAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutUserInput | UserApiAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserApiAccessCreateManyUserInputEnvelope
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
  }

  export type ApiUsageLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApiTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiTokenCreateWithoutUserInput, ApiTokenUncheckedCreateWithoutUserInput> | ApiTokenCreateWithoutUserInput[] | ApiTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutUserInput | ApiTokenCreateOrConnectWithoutUserInput[]
    upsert?: ApiTokenUpsertWithWhereUniqueWithoutUserInput | ApiTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiTokenCreateManyUserInputEnvelope
    set?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    disconnect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    delete?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    update?: ApiTokenUpdateWithWhereUniqueWithoutUserInput | ApiTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiTokenUpdateManyWithWhereWithoutUserInput | ApiTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
  }

  export type UserApiAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApiAccessCreateWithoutUserInput, UserApiAccessUncheckedCreateWithoutUserInput> | UserApiAccessCreateWithoutUserInput[] | UserApiAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutUserInput | UserApiAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserApiAccessUpsertWithWhereUniqueWithoutUserInput | UserApiAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApiAccessCreateManyUserInputEnvelope
    set?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    disconnect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    delete?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    update?: UserApiAccessUpdateWithWhereUniqueWithoutUserInput | UserApiAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApiAccessUpdateManyWithWhereWithoutUserInput | UserApiAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApiAccessScalarWhereInput | UserApiAccessScalarWhereInput[]
  }

  export type ApiUsageLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutUserInput | ApiUsageLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutUserInput | ApiUsageLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutUserInput | ApiUsageLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type ApiTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiTokenCreateWithoutUserInput, ApiTokenUncheckedCreateWithoutUserInput> | ApiTokenCreateWithoutUserInput[] | ApiTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutUserInput | ApiTokenCreateOrConnectWithoutUserInput[]
    upsert?: ApiTokenUpsertWithWhereUniqueWithoutUserInput | ApiTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiTokenCreateManyUserInputEnvelope
    set?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    disconnect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    delete?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    update?: ApiTokenUpdateWithWhereUniqueWithoutUserInput | ApiTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiTokenUpdateManyWithWhereWithoutUserInput | ApiTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
  }

  export type UserApiAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApiAccessCreateWithoutUserInput, UserApiAccessUncheckedCreateWithoutUserInput> | UserApiAccessCreateWithoutUserInput[] | UserApiAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutUserInput | UserApiAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserApiAccessUpsertWithWhereUniqueWithoutUserInput | UserApiAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApiAccessCreateManyUserInputEnvelope
    set?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    disconnect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    delete?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    update?: UserApiAccessUpdateWithWhereUniqueWithoutUserInput | UserApiAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApiAccessUpdateManyWithWhereWithoutUserInput | UserApiAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApiAccessScalarWhereInput | UserApiAccessScalarWhereInput[]
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutUserInput | ApiUsageLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutUserInput | ApiUsageLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutUserInput | ApiUsageLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type UserApiAccessCreateNestedManyWithoutApiInput = {
    create?: XOR<UserApiAccessCreateWithoutApiInput, UserApiAccessUncheckedCreateWithoutApiInput> | UserApiAccessCreateWithoutApiInput[] | UserApiAccessUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutApiInput | UserApiAccessCreateOrConnectWithoutApiInput[]
    createMany?: UserApiAccessCreateManyApiInputEnvelope
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
  }

  export type ApiUsageLogCreateNestedManyWithoutApiInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiInput, ApiUsageLogUncheckedCreateWithoutApiInput> | ApiUsageLogCreateWithoutApiInput[] | ApiUsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiInput | ApiUsageLogCreateOrConnectWithoutApiInput[]
    createMany?: ApiUsageLogCreateManyApiInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type UserApiAccessUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<UserApiAccessCreateWithoutApiInput, UserApiAccessUncheckedCreateWithoutApiInput> | UserApiAccessCreateWithoutApiInput[] | UserApiAccessUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutApiInput | UserApiAccessCreateOrConnectWithoutApiInput[]
    createMany?: UserApiAccessCreateManyApiInputEnvelope
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
  }

  export type ApiUsageLogUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiInput, ApiUsageLogUncheckedCreateWithoutApiInput> | ApiUsageLogCreateWithoutApiInput[] | ApiUsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiInput | ApiUsageLogCreateOrConnectWithoutApiInput[]
    createMany?: ApiUsageLogCreateManyApiInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserApiAccessUpdateManyWithoutApiNestedInput = {
    create?: XOR<UserApiAccessCreateWithoutApiInput, UserApiAccessUncheckedCreateWithoutApiInput> | UserApiAccessCreateWithoutApiInput[] | UserApiAccessUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutApiInput | UserApiAccessCreateOrConnectWithoutApiInput[]
    upsert?: UserApiAccessUpsertWithWhereUniqueWithoutApiInput | UserApiAccessUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: UserApiAccessCreateManyApiInputEnvelope
    set?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    disconnect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    delete?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    update?: UserApiAccessUpdateWithWhereUniqueWithoutApiInput | UserApiAccessUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: UserApiAccessUpdateManyWithWhereWithoutApiInput | UserApiAccessUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: UserApiAccessScalarWhereInput | UserApiAccessScalarWhereInput[]
  }

  export type ApiUsageLogUpdateManyWithoutApiNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiInput, ApiUsageLogUncheckedCreateWithoutApiInput> | ApiUsageLogCreateWithoutApiInput[] | ApiUsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiInput | ApiUsageLogCreateOrConnectWithoutApiInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutApiInput | ApiUsageLogUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: ApiUsageLogCreateManyApiInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutApiInput | ApiUsageLogUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutApiInput | ApiUsageLogUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type UserApiAccessUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<UserApiAccessCreateWithoutApiInput, UserApiAccessUncheckedCreateWithoutApiInput> | UserApiAccessCreateWithoutApiInput[] | UserApiAccessUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiAccessCreateOrConnectWithoutApiInput | UserApiAccessCreateOrConnectWithoutApiInput[]
    upsert?: UserApiAccessUpsertWithWhereUniqueWithoutApiInput | UserApiAccessUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: UserApiAccessCreateManyApiInputEnvelope
    set?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    disconnect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    delete?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    connect?: UserApiAccessWhereUniqueInput | UserApiAccessWhereUniqueInput[]
    update?: UserApiAccessUpdateWithWhereUniqueWithoutApiInput | UserApiAccessUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: UserApiAccessUpdateManyWithWhereWithoutApiInput | UserApiAccessUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: UserApiAccessScalarWhereInput | UserApiAccessScalarWhereInput[]
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutApiInput, ApiUsageLogUncheckedCreateWithoutApiInput> | ApiUsageLogCreateWithoutApiInput[] | ApiUsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutApiInput | ApiUsageLogCreateOrConnectWithoutApiInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutApiInput | ApiUsageLogUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: ApiUsageLogCreateManyApiInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutApiInput | ApiUsageLogUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutApiInput | ApiUsageLogUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiTokensInput = {
    create?: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiTokensNestedInput = {
    create?: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiTokensInput
    upsert?: UserUpsertWithoutApiTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiTokensInput, UserUpdateWithoutApiTokensInput>, UserUncheckedUpdateWithoutApiTokensInput>
  }

  export type UserCreateNestedOneWithoutApiAccessesInput = {
    create?: XOR<UserCreateWithoutApiAccessesInput, UserUncheckedCreateWithoutApiAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type ApiCreateNestedOneWithoutUserApiAccessesInput = {
    create?: XOR<ApiCreateWithoutUserApiAccessesInput, ApiUncheckedCreateWithoutUserApiAccessesInput>
    connectOrCreate?: ApiCreateOrConnectWithoutUserApiAccessesInput
    connect?: ApiWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutApiAccessesNestedInput = {
    create?: XOR<UserCreateWithoutApiAccessesInput, UserUncheckedCreateWithoutApiAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiAccessesInput
    upsert?: UserUpsertWithoutApiAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiAccessesInput, UserUpdateWithoutApiAccessesInput>, UserUncheckedUpdateWithoutApiAccessesInput>
  }

  export type ApiUpdateOneRequiredWithoutUserApiAccessesNestedInput = {
    create?: XOR<ApiCreateWithoutUserApiAccessesInput, ApiUncheckedCreateWithoutUserApiAccessesInput>
    connectOrCreate?: ApiCreateOrConnectWithoutUserApiAccessesInput
    upsert?: ApiUpsertWithoutUserApiAccessesInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutUserApiAccessesInput, ApiUpdateWithoutUserApiAccessesInput>, ApiUncheckedUpdateWithoutUserApiAccessesInput>
  }

  export type UserCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ApiCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<ApiCreateWithoutUsageLogsInput, ApiUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiCreateOrConnectWithoutUsageLogsInput
    connect?: ApiWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUsageLogsNestedInput = {
    create?: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageLogsInput
    upsert?: UserUpsertWithoutUsageLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsageLogsInput, UserUpdateWithoutUsageLogsInput>, UserUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ApiUpdateOneRequiredWithoutUsageLogsNestedInput = {
    create?: XOR<ApiCreateWithoutUsageLogsInput, ApiUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiCreateOrConnectWithoutUsageLogsInput
    upsert?: ApiUpsertWithoutUsageLogsInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutUsageLogsInput, ApiUpdateWithoutUsageLogsInput>, ApiUncheckedUpdateWithoutUsageLogsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ApiTokenCreateWithoutUserInput = {
    id?: bigint | number
    token: string
    is_active?: boolean
    created_at?: Date | string
    last_used_at?: Date | string | null
    refreshed_at?: Date | string | null
  }

  export type ApiTokenUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    token: string
    is_active?: boolean
    created_at?: Date | string
    last_used_at?: Date | string | null
    refreshed_at?: Date | string | null
  }

  export type ApiTokenCreateOrConnectWithoutUserInput = {
    where: ApiTokenWhereUniqueInput
    create: XOR<ApiTokenCreateWithoutUserInput, ApiTokenUncheckedCreateWithoutUserInput>
  }

  export type ApiTokenCreateManyUserInputEnvelope = {
    data: ApiTokenCreateManyUserInput | ApiTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserApiAccessCreateWithoutUserInput = {
    id?: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    api: ApiCreateNestedOneWithoutUserApiAccessesInput
  }

  export type UserApiAccessUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    api_id: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserApiAccessCreateOrConnectWithoutUserInput = {
    where: UserApiAccessWhereUniqueInput
    create: XOR<UserApiAccessCreateWithoutUserInput, UserApiAccessUncheckedCreateWithoutUserInput>
  }

  export type UserApiAccessCreateManyUserInputEnvelope = {
    data: UserApiAccessCreateManyUserInput | UserApiAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiUsageLogCreateWithoutUserInput = {
    id?: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
    api: ApiCreateNestedOneWithoutUsageLogsInput
  }

  export type ApiUsageLogUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    api_id: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
  }

  export type ApiUsageLogCreateOrConnectWithoutUserInput = {
    where: ApiUsageLogWhereUniqueInput
    create: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageLogCreateManyUserInputEnvelope = {
    data: ApiUsageLogCreateManyUserInput | ApiUsageLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiTokenWhereUniqueInput
    update: XOR<ApiTokenUpdateWithoutUserInput, ApiTokenUncheckedUpdateWithoutUserInput>
    create: XOR<ApiTokenCreateWithoutUserInput, ApiTokenUncheckedCreateWithoutUserInput>
  }

  export type ApiTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiTokenWhereUniqueInput
    data: XOR<ApiTokenUpdateWithoutUserInput, ApiTokenUncheckedUpdateWithoutUserInput>
  }

  export type ApiTokenUpdateManyWithWhereWithoutUserInput = {
    where: ApiTokenScalarWhereInput
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiTokenScalarWhereInput = {
    AND?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
    OR?: ApiTokenScalarWhereInput[]
    NOT?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
    id?: BigIntFilter<"ApiToken"> | bigint | number
    user_id?: BigIntFilter<"ApiToken"> | bigint | number
    token?: StringFilter<"ApiToken"> | string
    is_active?: BoolFilter<"ApiToken"> | boolean
    created_at?: DateTimeFilter<"ApiToken"> | Date | string
    last_used_at?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
    refreshed_at?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
  }

  export type UserApiAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: UserApiAccessWhereUniqueInput
    update: XOR<UserApiAccessUpdateWithoutUserInput, UserApiAccessUncheckedUpdateWithoutUserInput>
    create: XOR<UserApiAccessCreateWithoutUserInput, UserApiAccessUncheckedCreateWithoutUserInput>
  }

  export type UserApiAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: UserApiAccessWhereUniqueInput
    data: XOR<UserApiAccessUpdateWithoutUserInput, UserApiAccessUncheckedUpdateWithoutUserInput>
  }

  export type UserApiAccessUpdateManyWithWhereWithoutUserInput = {
    where: UserApiAccessScalarWhereInput
    data: XOR<UserApiAccessUpdateManyMutationInput, UserApiAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type UserApiAccessScalarWhereInput = {
    AND?: UserApiAccessScalarWhereInput | UserApiAccessScalarWhereInput[]
    OR?: UserApiAccessScalarWhereInput[]
    NOT?: UserApiAccessScalarWhereInput | UserApiAccessScalarWhereInput[]
    id?: BigIntFilter<"UserApiAccess"> | bigint | number
    user_id?: BigIntFilter<"UserApiAccess"> | bigint | number
    api_id?: BigIntFilter<"UserApiAccess"> | bigint | number
    daily_limit?: IntFilter<"UserApiAccess"> | number
    has_access?: BoolFilter<"UserApiAccess"> | boolean
    created_at?: DateTimeFilter<"UserApiAccess"> | Date | string
    updated_at?: DateTimeFilter<"UserApiAccess"> | Date | string
  }

  export type ApiUsageLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiUsageLogWhereUniqueInput
    update: XOR<ApiUsageLogUpdateWithoutUserInput, ApiUsageLogUncheckedUpdateWithoutUserInput>
    create: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiUsageLogWhereUniqueInput
    data: XOR<ApiUsageLogUpdateWithoutUserInput, ApiUsageLogUncheckedUpdateWithoutUserInput>
  }

  export type ApiUsageLogUpdateManyWithWhereWithoutUserInput = {
    where: ApiUsageLogScalarWhereInput
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiUsageLogScalarWhereInput = {
    AND?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
    OR?: ApiUsageLogScalarWhereInput[]
    NOT?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
    id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    user_id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    api_id?: BigIntFilter<"ApiUsageLog"> | bigint | number
    endpoint?: StringFilter<"ApiUsageLog"> | string
    payload?: JsonNullableFilter<"ApiUsageLog">
    ip_address?: StringFilter<"ApiUsageLog"> | string
    status_code?: IntNullableFilter<"ApiUsageLog"> | number | null
    created_at?: DateTimeFilter<"ApiUsageLog"> | Date | string
    updated_at?: DateTimeFilter<"ApiUsageLog"> | Date | string
    api_response_time?: IntNullableFilter<"ApiUsageLog"> | number | null
  }

  export type UserApiAccessCreateWithoutApiInput = {
    id?: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutApiAccessesInput
  }

  export type UserApiAccessUncheckedCreateWithoutApiInput = {
    id?: bigint | number
    user_id: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserApiAccessCreateOrConnectWithoutApiInput = {
    where: UserApiAccessWhereUniqueInput
    create: XOR<UserApiAccessCreateWithoutApiInput, UserApiAccessUncheckedCreateWithoutApiInput>
  }

  export type UserApiAccessCreateManyApiInputEnvelope = {
    data: UserApiAccessCreateManyApiInput | UserApiAccessCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type ApiUsageLogCreateWithoutApiInput = {
    id?: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
    user: UserCreateNestedOneWithoutUsageLogsInput
  }

  export type ApiUsageLogUncheckedCreateWithoutApiInput = {
    id?: bigint | number
    user_id: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
  }

  export type ApiUsageLogCreateOrConnectWithoutApiInput = {
    where: ApiUsageLogWhereUniqueInput
    create: XOR<ApiUsageLogCreateWithoutApiInput, ApiUsageLogUncheckedCreateWithoutApiInput>
  }

  export type ApiUsageLogCreateManyApiInputEnvelope = {
    data: ApiUsageLogCreateManyApiInput | ApiUsageLogCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type UserApiAccessUpsertWithWhereUniqueWithoutApiInput = {
    where: UserApiAccessWhereUniqueInput
    update: XOR<UserApiAccessUpdateWithoutApiInput, UserApiAccessUncheckedUpdateWithoutApiInput>
    create: XOR<UserApiAccessCreateWithoutApiInput, UserApiAccessUncheckedCreateWithoutApiInput>
  }

  export type UserApiAccessUpdateWithWhereUniqueWithoutApiInput = {
    where: UserApiAccessWhereUniqueInput
    data: XOR<UserApiAccessUpdateWithoutApiInput, UserApiAccessUncheckedUpdateWithoutApiInput>
  }

  export type UserApiAccessUpdateManyWithWhereWithoutApiInput = {
    where: UserApiAccessScalarWhereInput
    data: XOR<UserApiAccessUpdateManyMutationInput, UserApiAccessUncheckedUpdateManyWithoutApiInput>
  }

  export type ApiUsageLogUpsertWithWhereUniqueWithoutApiInput = {
    where: ApiUsageLogWhereUniqueInput
    update: XOR<ApiUsageLogUpdateWithoutApiInput, ApiUsageLogUncheckedUpdateWithoutApiInput>
    create: XOR<ApiUsageLogCreateWithoutApiInput, ApiUsageLogUncheckedCreateWithoutApiInput>
  }

  export type ApiUsageLogUpdateWithWhereUniqueWithoutApiInput = {
    where: ApiUsageLogWhereUniqueInput
    data: XOR<ApiUsageLogUpdateWithoutApiInput, ApiUsageLogUncheckedUpdateWithoutApiInput>
  }

  export type ApiUsageLogUpdateManyWithWhereWithoutApiInput = {
    where: ApiUsageLogScalarWhereInput
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyWithoutApiInput>
  }

  export type UserCreateWithoutApiTokensInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiAccesses?: UserApiAccessCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiTokensInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiAccesses?: UserApiAccessUncheckedCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
  }

  export type UserUpsertWithoutApiTokensInput = {
    update: XOR<UserUpdateWithoutApiTokensInput, UserUncheckedUpdateWithoutApiTokensInput>
    create: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiTokensInput, UserUncheckedUpdateWithoutApiTokensInput>
  }

  export type UserUpdateWithoutApiTokensInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiAccesses?: UserApiAccessUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiTokensInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiAccesses?: UserApiAccessUncheckedUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApiAccessesInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: ApiTokenCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiAccessesInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: ApiTokenUncheckedCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiAccessesInput, UserUncheckedCreateWithoutApiAccessesInput>
  }

  export type ApiCreateWithoutUserApiAccessesInput = {
    id?: bigint | number
    api_name: string
    slug: string
    default_daily_limit?: number
    basic_parameters: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    usageLogs?: ApiUsageLogCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutUserApiAccessesInput = {
    id?: bigint | number
    api_name: string
    slug: string
    default_daily_limit?: number
    basic_parameters: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutUserApiAccessesInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutUserApiAccessesInput, ApiUncheckedCreateWithoutUserApiAccessesInput>
  }

  export type UserUpsertWithoutApiAccessesInput = {
    update: XOR<UserUpdateWithoutApiAccessesInput, UserUncheckedUpdateWithoutApiAccessesInput>
    create: XOR<UserCreateWithoutApiAccessesInput, UserUncheckedCreateWithoutApiAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiAccessesInput, UserUncheckedUpdateWithoutApiAccessesInput>
  }

  export type UserUpdateWithoutApiAccessesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: ApiTokenUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiAccessesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: ApiTokenUncheckedUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiUpsertWithoutUserApiAccessesInput = {
    update: XOR<ApiUpdateWithoutUserApiAccessesInput, ApiUncheckedUpdateWithoutUserApiAccessesInput>
    create: XOR<ApiCreateWithoutUserApiAccessesInput, ApiUncheckedCreateWithoutUserApiAccessesInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutUserApiAccessesInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutUserApiAccessesInput, ApiUncheckedUpdateWithoutUserApiAccessesInput>
  }

  export type ApiUpdateWithoutUserApiAccessesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLogs?: ApiUsageLogUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutUserApiAccessesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutApiNestedInput
  }

  export type UserCreateWithoutUsageLogsInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: ApiTokenCreateNestedManyWithoutUserInput
    apiAccesses?: UserApiAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsageLogsInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password_hash?: string | null
    status?: $Enums.Status | null
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: ApiTokenUncheckedCreateNestedManyWithoutUserInput
    apiAccesses?: UserApiAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsageLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
  }

  export type ApiCreateWithoutUsageLogsInput = {
    id?: bigint | number
    api_name: string
    slug: string
    default_daily_limit?: number
    basic_parameters: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userApiAccesses?: UserApiAccessCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutUsageLogsInput = {
    id?: bigint | number
    api_name: string
    slug: string
    default_daily_limit?: number
    basic_parameters: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userApiAccesses?: UserApiAccessUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutUsageLogsInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutUsageLogsInput, ApiUncheckedCreateWithoutUsageLogsInput>
  }

  export type UserUpsertWithoutUsageLogsInput = {
    update: XOR<UserUpdateWithoutUsageLogsInput, UserUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsageLogsInput, UserUncheckedUpdateWithoutUsageLogsInput>
  }

  export type UserUpdateWithoutUsageLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: ApiTokenUpdateManyWithoutUserNestedInput
    apiAccesses?: UserApiAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsageLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: ApiTokenUncheckedUpdateManyWithoutUserNestedInput
    apiAccesses?: UserApiAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiUpsertWithoutUsageLogsInput = {
    update: XOR<ApiUpdateWithoutUsageLogsInput, ApiUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<ApiCreateWithoutUsageLogsInput, ApiUncheckedCreateWithoutUsageLogsInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutUsageLogsInput, ApiUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ApiUpdateWithoutUsageLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userApiAccesses?: UserApiAccessUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutUsageLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    default_daily_limit?: IntFieldUpdateOperationsInput | number
    basic_parameters?: JsonNullValueInput | InputJsonValue
    advanced_parameters?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userApiAccesses?: UserApiAccessUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiTokenCreateManyUserInput = {
    id?: bigint | number
    token: string
    is_active?: boolean
    created_at?: Date | string
    last_used_at?: Date | string | null
    refreshed_at?: Date | string | null
  }

  export type UserApiAccessCreateManyUserInput = {
    id?: bigint | number
    api_id: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApiUsageLogCreateManyUserInput = {
    id?: bigint | number
    api_id: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
  }

  export type ApiTokenUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiTokenUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiTokenUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserApiAccessUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api?: ApiUpdateOneRequiredWithoutUserApiAccessesNestedInput
  }

  export type UserApiAccessUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiAccessUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
    api?: ApiUpdateOneRequiredWithoutUsageLogsNestedInput
  }

  export type ApiUsageLogUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserApiAccessCreateManyApiInput = {
    id?: bigint | number
    user_id: bigint | number
    daily_limit: number
    has_access?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApiUsageLogCreateManyApiInput = {
    id?: bigint | number
    user_id: bigint | number
    endpoint: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address: string
    status_code?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    api_response_time?: number | null
  }

  export type UserApiAccessUpdateWithoutApiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiAccessesNestedInput
  }

  export type UserApiAccessUncheckedUpdateWithoutApiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiAccessUncheckedUpdateManyWithoutApiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    daily_limit?: IntFieldUpdateOperationsInput | number
    has_access?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogUpdateWithoutApiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutUsageLogsNestedInput
  }

  export type ApiUsageLogUncheckedUpdateWithoutApiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutApiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    endpoint?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    api_response_time?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}