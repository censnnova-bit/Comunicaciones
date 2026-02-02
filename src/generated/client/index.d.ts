
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
 * Model SocialMetric
 * 
 */
export type SocialMetric = $Result.DefaultSelection<Prisma.$SocialMetricPayload>
/**
 * Model SocialPost
 * 
 */
export type SocialPost = $Result.DefaultSelection<Prisma.$SocialPostPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SocialMetrics
 * const socialMetrics = await prisma.socialMetric.findMany()
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
   * // Fetch zero or more SocialMetrics
   * const socialMetrics = await prisma.socialMetric.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.socialMetric`: Exposes CRUD operations for the **SocialMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialMetrics
    * const socialMetrics = await prisma.socialMetric.findMany()
    * ```
    */
  get socialMetric(): Prisma.SocialMetricDelegate<ExtArgs>;

  /**
   * `prisma.socialPost`: Exposes CRUD operations for the **SocialPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialPosts
    * const socialPosts = await prisma.socialPost.findMany()
    * ```
    */
  get socialPost(): Prisma.SocialPostDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    SocialMetric: 'SocialMetric',
    SocialPost: 'SocialPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "socialMetric" | "socialPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SocialMetric: {
        payload: Prisma.$SocialMetricPayload<ExtArgs>
        fields: Prisma.SocialMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>
          }
          findFirst: {
            args: Prisma.SocialMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>
          }
          findMany: {
            args: Prisma.SocialMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>[]
          }
          create: {
            args: Prisma.SocialMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>
          }
          createMany: {
            args: Prisma.SocialMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>[]
          }
          delete: {
            args: Prisma.SocialMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>
          }
          update: {
            args: Prisma.SocialMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>
          }
          deleteMany: {
            args: Prisma.SocialMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMetricPayload>
          }
          aggregate: {
            args: Prisma.SocialMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialMetric>
          }
          groupBy: {
            args: Prisma.SocialMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialMetricCountArgs<ExtArgs>
            result: $Utils.Optional<SocialMetricCountAggregateOutputType> | number
          }
        }
      }
      SocialPost: {
        payload: Prisma.$SocialPostPayload<ExtArgs>
        fields: Prisma.SocialPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findFirst: {
            args: Prisma.SocialPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findMany: {
            args: Prisma.SocialPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          create: {
            args: Prisma.SocialPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          createMany: {
            args: Prisma.SocialPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          delete: {
            args: Prisma.SocialPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          update: {
            args: Prisma.SocialPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          deleteMany: {
            args: Prisma.SocialPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          aggregate: {
            args: Prisma.SocialPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialPost>
          }
          groupBy: {
            args: Prisma.SocialPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialPostCountArgs<ExtArgs>
            result: $Utils.Optional<SocialPostCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model SocialMetric
   */

  export type AggregateSocialMetric = {
    _count: SocialMetricCountAggregateOutputType | null
    _avg: SocialMetricAvgAggregateOutputType | null
    _sum: SocialMetricSumAggregateOutputType | null
    _min: SocialMetricMinAggregateOutputType | null
    _max: SocialMetricMaxAggregateOutputType | null
  }

  export type SocialMetricAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type SocialMetricSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type SocialMetricMinAggregateOutputType = {
    id: number | null
    platform: string | null
    metric: string | null
    value: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type SocialMetricMaxAggregateOutputType = {
    id: number | null
    platform: string | null
    metric: string | null
    value: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type SocialMetricCountAggregateOutputType = {
    id: number
    platform: number
    metric: number
    value: number
    date: number
    createdAt: number
    _all: number
  }


  export type SocialMetricAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type SocialMetricSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type SocialMetricMinAggregateInputType = {
    id?: true
    platform?: true
    metric?: true
    value?: true
    date?: true
    createdAt?: true
  }

  export type SocialMetricMaxAggregateInputType = {
    id?: true
    platform?: true
    metric?: true
    value?: true
    date?: true
    createdAt?: true
  }

  export type SocialMetricCountAggregateInputType = {
    id?: true
    platform?: true
    metric?: true
    value?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type SocialMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMetric to aggregate.
     */
    where?: SocialMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMetrics to fetch.
     */
    orderBy?: SocialMetricOrderByWithRelationInput | SocialMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialMetrics
    **/
    _count?: true | SocialMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMetricMaxAggregateInputType
  }

  export type GetSocialMetricAggregateType<T extends SocialMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialMetric[P]>
      : GetScalarType<T[P], AggregateSocialMetric[P]>
  }




  export type SocialMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMetricWhereInput
    orderBy?: SocialMetricOrderByWithAggregationInput | SocialMetricOrderByWithAggregationInput[]
    by: SocialMetricScalarFieldEnum[] | SocialMetricScalarFieldEnum
    having?: SocialMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialMetricCountAggregateInputType | true
    _avg?: SocialMetricAvgAggregateInputType
    _sum?: SocialMetricSumAggregateInputType
    _min?: SocialMetricMinAggregateInputType
    _max?: SocialMetricMaxAggregateInputType
  }

  export type SocialMetricGroupByOutputType = {
    id: number
    platform: string
    metric: string
    value: number
    date: Date
    createdAt: Date
    _count: SocialMetricCountAggregateOutputType | null
    _avg: SocialMetricAvgAggregateOutputType | null
    _sum: SocialMetricSumAggregateOutputType | null
    _min: SocialMetricMinAggregateOutputType | null
    _max: SocialMetricMaxAggregateOutputType | null
  }

  type GetSocialMetricGroupByPayload<T extends SocialMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialMetricGroupByOutputType[P]>
            : GetScalarType<T[P], SocialMetricGroupByOutputType[P]>
        }
      >
    >


  export type SocialMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    metric?: boolean
    value?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["socialMetric"]>

  export type SocialMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    metric?: boolean
    value?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["socialMetric"]>

  export type SocialMetricSelectScalar = {
    id?: boolean
    platform?: boolean
    metric?: boolean
    value?: boolean
    date?: boolean
    createdAt?: boolean
  }


  export type $SocialMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialMetric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform: string
      metric: string
      value: number
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["socialMetric"]>
    composites: {}
  }

  type SocialMetricGetPayload<S extends boolean | null | undefined | SocialMetricDefaultArgs> = $Result.GetResult<Prisma.$SocialMetricPayload, S>

  type SocialMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialMetricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialMetricCountAggregateInputType | true
    }

  export interface SocialMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialMetric'], meta: { name: 'SocialMetric' } }
    /**
     * Find zero or one SocialMetric that matches the filter.
     * @param {SocialMetricFindUniqueArgs} args - Arguments to find a SocialMetric
     * @example
     * // Get one SocialMetric
     * const socialMetric = await prisma.socialMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialMetricFindUniqueArgs>(args: SelectSubset<T, SocialMetricFindUniqueArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SocialMetric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocialMetricFindUniqueOrThrowArgs} args - Arguments to find a SocialMetric
     * @example
     * // Get one SocialMetric
     * const socialMetric = await prisma.socialMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SocialMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMetricFindFirstArgs} args - Arguments to find a SocialMetric
     * @example
     * // Get one SocialMetric
     * const socialMetric = await prisma.socialMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialMetricFindFirstArgs>(args?: SelectSubset<T, SocialMetricFindFirstArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SocialMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMetricFindFirstOrThrowArgs} args - Arguments to find a SocialMetric
     * @example
     * // Get one SocialMetric
     * const socialMetric = await prisma.socialMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SocialMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialMetrics
     * const socialMetrics = await prisma.socialMetric.findMany()
     * 
     * // Get first 10 SocialMetrics
     * const socialMetrics = await prisma.socialMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialMetricWithIdOnly = await prisma.socialMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialMetricFindManyArgs>(args?: SelectSubset<T, SocialMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SocialMetric.
     * @param {SocialMetricCreateArgs} args - Arguments to create a SocialMetric.
     * @example
     * // Create one SocialMetric
     * const SocialMetric = await prisma.socialMetric.create({
     *   data: {
     *     // ... data to create a SocialMetric
     *   }
     * })
     * 
     */
    create<T extends SocialMetricCreateArgs>(args: SelectSubset<T, SocialMetricCreateArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SocialMetrics.
     * @param {SocialMetricCreateManyArgs} args - Arguments to create many SocialMetrics.
     * @example
     * // Create many SocialMetrics
     * const socialMetric = await prisma.socialMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialMetricCreateManyArgs>(args?: SelectSubset<T, SocialMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialMetrics and returns the data saved in the database.
     * @param {SocialMetricCreateManyAndReturnArgs} args - Arguments to create many SocialMetrics.
     * @example
     * // Create many SocialMetrics
     * const socialMetric = await prisma.socialMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialMetrics and only return the `id`
     * const socialMetricWithIdOnly = await prisma.socialMetric.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SocialMetric.
     * @param {SocialMetricDeleteArgs} args - Arguments to delete one SocialMetric.
     * @example
     * // Delete one SocialMetric
     * const SocialMetric = await prisma.socialMetric.delete({
     *   where: {
     *     // ... filter to delete one SocialMetric
     *   }
     * })
     * 
     */
    delete<T extends SocialMetricDeleteArgs>(args: SelectSubset<T, SocialMetricDeleteArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SocialMetric.
     * @param {SocialMetricUpdateArgs} args - Arguments to update one SocialMetric.
     * @example
     * // Update one SocialMetric
     * const socialMetric = await prisma.socialMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialMetricUpdateArgs>(args: SelectSubset<T, SocialMetricUpdateArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SocialMetrics.
     * @param {SocialMetricDeleteManyArgs} args - Arguments to filter SocialMetrics to delete.
     * @example
     * // Delete a few SocialMetrics
     * const { count } = await prisma.socialMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialMetricDeleteManyArgs>(args?: SelectSubset<T, SocialMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialMetrics
     * const socialMetric = await prisma.socialMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialMetricUpdateManyArgs>(args: SelectSubset<T, SocialMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialMetric.
     * @param {SocialMetricUpsertArgs} args - Arguments to update or create a SocialMetric.
     * @example
     * // Update or create a SocialMetric
     * const socialMetric = await prisma.socialMetric.upsert({
     *   create: {
     *     // ... data to create a SocialMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialMetric we want to update
     *   }
     * })
     */
    upsert<T extends SocialMetricUpsertArgs>(args: SelectSubset<T, SocialMetricUpsertArgs<ExtArgs>>): Prisma__SocialMetricClient<$Result.GetResult<Prisma.$SocialMetricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SocialMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMetricCountArgs} args - Arguments to filter SocialMetrics to count.
     * @example
     * // Count the number of SocialMetrics
     * const count = await prisma.socialMetric.count({
     *   where: {
     *     // ... the filter for the SocialMetrics we want to count
     *   }
     * })
    **/
    count<T extends SocialMetricCountArgs>(
      args?: Subset<T, SocialMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialMetricAggregateArgs>(args: Subset<T, SocialMetricAggregateArgs>): Prisma.PrismaPromise<GetSocialMetricAggregateType<T>>

    /**
     * Group by SocialMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMetricGroupByArgs} args - Group by arguments.
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
      T extends SocialMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialMetricGroupByArgs['orderBy'] }
        : { orderBy?: SocialMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialMetric model
   */
  readonly fields: SocialMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SocialMetric model
   */ 
  interface SocialMetricFieldRefs {
    readonly id: FieldRef<"SocialMetric", 'Int'>
    readonly platform: FieldRef<"SocialMetric", 'String'>
    readonly metric: FieldRef<"SocialMetric", 'String'>
    readonly value: FieldRef<"SocialMetric", 'Float'>
    readonly date: FieldRef<"SocialMetric", 'DateTime'>
    readonly createdAt: FieldRef<"SocialMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialMetric findUnique
   */
  export type SocialMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * Filter, which SocialMetric to fetch.
     */
    where: SocialMetricWhereUniqueInput
  }

  /**
   * SocialMetric findUniqueOrThrow
   */
  export type SocialMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * Filter, which SocialMetric to fetch.
     */
    where: SocialMetricWhereUniqueInput
  }

  /**
   * SocialMetric findFirst
   */
  export type SocialMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * Filter, which SocialMetric to fetch.
     */
    where?: SocialMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMetrics to fetch.
     */
    orderBy?: SocialMetricOrderByWithRelationInput | SocialMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMetrics.
     */
    cursor?: SocialMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMetrics.
     */
    distinct?: SocialMetricScalarFieldEnum | SocialMetricScalarFieldEnum[]
  }

  /**
   * SocialMetric findFirstOrThrow
   */
  export type SocialMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * Filter, which SocialMetric to fetch.
     */
    where?: SocialMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMetrics to fetch.
     */
    orderBy?: SocialMetricOrderByWithRelationInput | SocialMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMetrics.
     */
    cursor?: SocialMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMetrics.
     */
    distinct?: SocialMetricScalarFieldEnum | SocialMetricScalarFieldEnum[]
  }

  /**
   * SocialMetric findMany
   */
  export type SocialMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * Filter, which SocialMetrics to fetch.
     */
    where?: SocialMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMetrics to fetch.
     */
    orderBy?: SocialMetricOrderByWithRelationInput | SocialMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialMetrics.
     */
    cursor?: SocialMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMetrics.
     */
    skip?: number
    distinct?: SocialMetricScalarFieldEnum | SocialMetricScalarFieldEnum[]
  }

  /**
   * SocialMetric create
   */
  export type SocialMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * The data needed to create a SocialMetric.
     */
    data: XOR<SocialMetricCreateInput, SocialMetricUncheckedCreateInput>
  }

  /**
   * SocialMetric createMany
   */
  export type SocialMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialMetrics.
     */
    data: SocialMetricCreateManyInput | SocialMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialMetric createManyAndReturn
   */
  export type SocialMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SocialMetrics.
     */
    data: SocialMetricCreateManyInput | SocialMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialMetric update
   */
  export type SocialMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * The data needed to update a SocialMetric.
     */
    data: XOR<SocialMetricUpdateInput, SocialMetricUncheckedUpdateInput>
    /**
     * Choose, which SocialMetric to update.
     */
    where: SocialMetricWhereUniqueInput
  }

  /**
   * SocialMetric updateMany
   */
  export type SocialMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialMetrics.
     */
    data: XOR<SocialMetricUpdateManyMutationInput, SocialMetricUncheckedUpdateManyInput>
    /**
     * Filter which SocialMetrics to update
     */
    where?: SocialMetricWhereInput
  }

  /**
   * SocialMetric upsert
   */
  export type SocialMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * The filter to search for the SocialMetric to update in case it exists.
     */
    where: SocialMetricWhereUniqueInput
    /**
     * In case the SocialMetric found by the `where` argument doesn't exist, create a new SocialMetric with this data.
     */
    create: XOR<SocialMetricCreateInput, SocialMetricUncheckedCreateInput>
    /**
     * In case the SocialMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialMetricUpdateInput, SocialMetricUncheckedUpdateInput>
  }

  /**
   * SocialMetric delete
   */
  export type SocialMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
    /**
     * Filter which SocialMetric to delete.
     */
    where: SocialMetricWhereUniqueInput
  }

  /**
   * SocialMetric deleteMany
   */
  export type SocialMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMetrics to delete
     */
    where?: SocialMetricWhereInput
  }

  /**
   * SocialMetric without action
   */
  export type SocialMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMetric
     */
    select?: SocialMetricSelect<ExtArgs> | null
  }


  /**
   * Model SocialPost
   */

  export type AggregateSocialPost = {
    _count: SocialPostCountAggregateOutputType | null
    _avg: SocialPostAvgAggregateOutputType | null
    _sum: SocialPostSumAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  export type SocialPostAvgAggregateOutputType = {
    likes: number | null
    comments: number | null
    shares: number | null
    impressions: number | null
    engagement: number | null
  }

  export type SocialPostSumAggregateOutputType = {
    likes: number | null
    comments: number | null
    shares: number | null
    impressions: number | null
    engagement: number | null
  }

  export type SocialPostMinAggregateOutputType = {
    id: string | null
    platformId: string | null
    platform: string | null
    content: string | null
    type: string | null
    url: string | null
    image: string | null
    postedAt: Date | null
    likes: number | null
    comments: number | null
    shares: number | null
    impressions: number | null
    engagement: number | null
    lastSyncAt: Date | null
  }

  export type SocialPostMaxAggregateOutputType = {
    id: string | null
    platformId: string | null
    platform: string | null
    content: string | null
    type: string | null
    url: string | null
    image: string | null
    postedAt: Date | null
    likes: number | null
    comments: number | null
    shares: number | null
    impressions: number | null
    engagement: number | null
    lastSyncAt: Date | null
  }

  export type SocialPostCountAggregateOutputType = {
    id: number
    platformId: number
    platform: number
    content: number
    type: number
    url: number
    image: number
    postedAt: number
    likes: number
    comments: number
    shares: number
    impressions: number
    engagement: number
    lastSyncAt: number
    _all: number
  }


  export type SocialPostAvgAggregateInputType = {
    likes?: true
    comments?: true
    shares?: true
    impressions?: true
    engagement?: true
  }

  export type SocialPostSumAggregateInputType = {
    likes?: true
    comments?: true
    shares?: true
    impressions?: true
    engagement?: true
  }

  export type SocialPostMinAggregateInputType = {
    id?: true
    platformId?: true
    platform?: true
    content?: true
    type?: true
    url?: true
    image?: true
    postedAt?: true
    likes?: true
    comments?: true
    shares?: true
    impressions?: true
    engagement?: true
    lastSyncAt?: true
  }

  export type SocialPostMaxAggregateInputType = {
    id?: true
    platformId?: true
    platform?: true
    content?: true
    type?: true
    url?: true
    image?: true
    postedAt?: true
    likes?: true
    comments?: true
    shares?: true
    impressions?: true
    engagement?: true
    lastSyncAt?: true
  }

  export type SocialPostCountAggregateInputType = {
    id?: true
    platformId?: true
    platform?: true
    content?: true
    type?: true
    url?: true
    image?: true
    postedAt?: true
    likes?: true
    comments?: true
    shares?: true
    impressions?: true
    engagement?: true
    lastSyncAt?: true
    _all?: true
  }

  export type SocialPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPost to aggregate.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialPosts
    **/
    _count?: true | SocialPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialPostMaxAggregateInputType
  }

  export type GetSocialPostAggregateType<T extends SocialPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialPost[P]>
      : GetScalarType<T[P], AggregateSocialPost[P]>
  }




  export type SocialPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPostWhereInput
    orderBy?: SocialPostOrderByWithAggregationInput | SocialPostOrderByWithAggregationInput[]
    by: SocialPostScalarFieldEnum[] | SocialPostScalarFieldEnum
    having?: SocialPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialPostCountAggregateInputType | true
    _avg?: SocialPostAvgAggregateInputType
    _sum?: SocialPostSumAggregateInputType
    _min?: SocialPostMinAggregateInputType
    _max?: SocialPostMaxAggregateInputType
  }

  export type SocialPostGroupByOutputType = {
    id: string
    platformId: string
    platform: string
    content: string | null
    type: string | null
    url: string | null
    image: string | null
    postedAt: Date
    likes: number
    comments: number
    shares: number
    impressions: number
    engagement: number
    lastSyncAt: Date
    _count: SocialPostCountAggregateOutputType | null
    _avg: SocialPostAvgAggregateOutputType | null
    _sum: SocialPostSumAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  type GetSocialPostGroupByPayload<T extends SocialPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
            : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
        }
      >
    >


  export type SocialPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    platform?: boolean
    content?: boolean
    type?: boolean
    url?: boolean
    image?: boolean
    postedAt?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    impressions?: boolean
    engagement?: boolean
    lastSyncAt?: boolean
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    platform?: boolean
    content?: boolean
    type?: boolean
    url?: boolean
    image?: boolean
    postedAt?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    impressions?: boolean
    engagement?: boolean
    lastSyncAt?: boolean
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectScalar = {
    id?: boolean
    platformId?: boolean
    platform?: boolean
    content?: boolean
    type?: boolean
    url?: boolean
    image?: boolean
    postedAt?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    impressions?: boolean
    engagement?: boolean
    lastSyncAt?: boolean
  }


  export type $SocialPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platformId: string
      platform: string
      content: string | null
      type: string | null
      url: string | null
      image: string | null
      postedAt: Date
      likes: number
      comments: number
      shares: number
      impressions: number
      engagement: number
      lastSyncAt: Date
    }, ExtArgs["result"]["socialPost"]>
    composites: {}
  }

  type SocialPostGetPayload<S extends boolean | null | undefined | SocialPostDefaultArgs> = $Result.GetResult<Prisma.$SocialPostPayload, S>

  type SocialPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialPostCountAggregateInputType | true
    }

  export interface SocialPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialPost'], meta: { name: 'SocialPost' } }
    /**
     * Find zero or one SocialPost that matches the filter.
     * @param {SocialPostFindUniqueArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialPostFindUniqueArgs>(args: SelectSubset<T, SocialPostFindUniqueArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SocialPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocialPostFindUniqueOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SocialPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialPostFindFirstArgs>(args?: SelectSubset<T, SocialPostFindFirstArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SocialPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SocialPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialPosts
     * const socialPosts = await prisma.socialPost.findMany()
     * 
     * // Get first 10 SocialPosts
     * const socialPosts = await prisma.socialPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialPostFindManyArgs>(args?: SelectSubset<T, SocialPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SocialPost.
     * @param {SocialPostCreateArgs} args - Arguments to create a SocialPost.
     * @example
     * // Create one SocialPost
     * const SocialPost = await prisma.socialPost.create({
     *   data: {
     *     // ... data to create a SocialPost
     *   }
     * })
     * 
     */
    create<T extends SocialPostCreateArgs>(args: SelectSubset<T, SocialPostCreateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SocialPosts.
     * @param {SocialPostCreateManyArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialPostCreateManyArgs>(args?: SelectSubset<T, SocialPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialPosts and returns the data saved in the database.
     * @param {SocialPostCreateManyAndReturnArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialPosts and only return the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SocialPost.
     * @param {SocialPostDeleteArgs} args - Arguments to delete one SocialPost.
     * @example
     * // Delete one SocialPost
     * const SocialPost = await prisma.socialPost.delete({
     *   where: {
     *     // ... filter to delete one SocialPost
     *   }
     * })
     * 
     */
    delete<T extends SocialPostDeleteArgs>(args: SelectSubset<T, SocialPostDeleteArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SocialPost.
     * @param {SocialPostUpdateArgs} args - Arguments to update one SocialPost.
     * @example
     * // Update one SocialPost
     * const socialPost = await prisma.socialPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialPostUpdateArgs>(args: SelectSubset<T, SocialPostUpdateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SocialPosts.
     * @param {SocialPostDeleteManyArgs} args - Arguments to filter SocialPosts to delete.
     * @example
     * // Delete a few SocialPosts
     * const { count } = await prisma.socialPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialPostDeleteManyArgs>(args?: SelectSubset<T, SocialPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialPosts
     * const socialPost = await prisma.socialPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialPostUpdateManyArgs>(args: SelectSubset<T, SocialPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialPost.
     * @param {SocialPostUpsertArgs} args - Arguments to update or create a SocialPost.
     * @example
     * // Update or create a SocialPost
     * const socialPost = await prisma.socialPost.upsert({
     *   create: {
     *     // ... data to create a SocialPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialPost we want to update
     *   }
     * })
     */
    upsert<T extends SocialPostUpsertArgs>(args: SelectSubset<T, SocialPostUpsertArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostCountArgs} args - Arguments to filter SocialPosts to count.
     * @example
     * // Count the number of SocialPosts
     * const count = await prisma.socialPost.count({
     *   where: {
     *     // ... the filter for the SocialPosts we want to count
     *   }
     * })
    **/
    count<T extends SocialPostCountArgs>(
      args?: Subset<T, SocialPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialPostAggregateArgs>(args: Subset<T, SocialPostAggregateArgs>): Prisma.PrismaPromise<GetSocialPostAggregateType<T>>

    /**
     * Group by SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostGroupByArgs} args - Group by arguments.
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
      T extends SocialPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialPostGroupByArgs['orderBy'] }
        : { orderBy?: SocialPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialPost model
   */
  readonly fields: SocialPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SocialPost model
   */ 
  interface SocialPostFieldRefs {
    readonly id: FieldRef<"SocialPost", 'String'>
    readonly platformId: FieldRef<"SocialPost", 'String'>
    readonly platform: FieldRef<"SocialPost", 'String'>
    readonly content: FieldRef<"SocialPost", 'String'>
    readonly type: FieldRef<"SocialPost", 'String'>
    readonly url: FieldRef<"SocialPost", 'String'>
    readonly image: FieldRef<"SocialPost", 'String'>
    readonly postedAt: FieldRef<"SocialPost", 'DateTime'>
    readonly likes: FieldRef<"SocialPost", 'Int'>
    readonly comments: FieldRef<"SocialPost", 'Int'>
    readonly shares: FieldRef<"SocialPost", 'Int'>
    readonly impressions: FieldRef<"SocialPost", 'Int'>
    readonly engagement: FieldRef<"SocialPost", 'Int'>
    readonly lastSyncAt: FieldRef<"SocialPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialPost findUnique
   */
  export type SocialPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findUniqueOrThrow
   */
  export type SocialPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findFirst
   */
  export type SocialPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findFirstOrThrow
   */
  export type SocialPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findMany
   */
  export type SocialPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Filter, which SocialPosts to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost create
   */
  export type SocialPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * The data needed to create a SocialPost.
     */
    data: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
  }

  /**
   * SocialPost createMany
   */
  export type SocialPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialPost createManyAndReturn
   */
  export type SocialPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialPost update
   */
  export type SocialPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * The data needed to update a SocialPost.
     */
    data: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
    /**
     * Choose, which SocialPost to update.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost updateMany
   */
  export type SocialPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialPosts.
     */
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyInput>
    /**
     * Filter which SocialPosts to update
     */
    where?: SocialPostWhereInput
  }

  /**
   * SocialPost upsert
   */
  export type SocialPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * The filter to search for the SocialPost to update in case it exists.
     */
    where: SocialPostWhereUniqueInput
    /**
     * In case the SocialPost found by the `where` argument doesn't exist, create a new SocialPost with this data.
     */
    create: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
    /**
     * In case the SocialPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
  }

  /**
   * SocialPost delete
   */
  export type SocialPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Filter which SocialPost to delete.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost deleteMany
   */
  export type SocialPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPosts to delete
     */
    where?: SocialPostWhereInput
  }

  /**
   * SocialPost without action
   */
  export type SocialPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
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


  export const SocialMetricScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    metric: 'metric',
    value: 'value',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type SocialMetricScalarFieldEnum = (typeof SocialMetricScalarFieldEnum)[keyof typeof SocialMetricScalarFieldEnum]


  export const SocialPostScalarFieldEnum: {
    id: 'id',
    platformId: 'platformId',
    platform: 'platform',
    content: 'content',
    type: 'type',
    url: 'url',
    image: 'image',
    postedAt: 'postedAt',
    likes: 'likes',
    comments: 'comments',
    shares: 'shares',
    impressions: 'impressions',
    engagement: 'engagement',
    lastSyncAt: 'lastSyncAt'
  };

  export type SocialPostScalarFieldEnum = (typeof SocialPostScalarFieldEnum)[keyof typeof SocialPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type SocialMetricWhereInput = {
    AND?: SocialMetricWhereInput | SocialMetricWhereInput[]
    OR?: SocialMetricWhereInput[]
    NOT?: SocialMetricWhereInput | SocialMetricWhereInput[]
    id?: IntFilter<"SocialMetric"> | number
    platform?: StringFilter<"SocialMetric"> | string
    metric?: StringFilter<"SocialMetric"> | string
    value?: FloatFilter<"SocialMetric"> | number
    date?: DateTimeFilter<"SocialMetric"> | Date | string
    createdAt?: DateTimeFilter<"SocialMetric"> | Date | string
  }

  export type SocialMetricOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    platform_metric_date?: SocialMetricPlatformMetricDateCompoundUniqueInput
    AND?: SocialMetricWhereInput | SocialMetricWhereInput[]
    OR?: SocialMetricWhereInput[]
    NOT?: SocialMetricWhereInput | SocialMetricWhereInput[]
    platform?: StringFilter<"SocialMetric"> | string
    metric?: StringFilter<"SocialMetric"> | string
    value?: FloatFilter<"SocialMetric"> | number
    date?: DateTimeFilter<"SocialMetric"> | Date | string
    createdAt?: DateTimeFilter<"SocialMetric"> | Date | string
  }, "id" | "platform_metric_date">

  export type SocialMetricOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: SocialMetricCountOrderByAggregateInput
    _avg?: SocialMetricAvgOrderByAggregateInput
    _max?: SocialMetricMaxOrderByAggregateInput
    _min?: SocialMetricMinOrderByAggregateInput
    _sum?: SocialMetricSumOrderByAggregateInput
  }

  export type SocialMetricScalarWhereWithAggregatesInput = {
    AND?: SocialMetricScalarWhereWithAggregatesInput | SocialMetricScalarWhereWithAggregatesInput[]
    OR?: SocialMetricScalarWhereWithAggregatesInput[]
    NOT?: SocialMetricScalarWhereWithAggregatesInput | SocialMetricScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialMetric"> | number
    platform?: StringWithAggregatesFilter<"SocialMetric"> | string
    metric?: StringWithAggregatesFilter<"SocialMetric"> | string
    value?: FloatWithAggregatesFilter<"SocialMetric"> | number
    date?: DateTimeWithAggregatesFilter<"SocialMetric"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialMetric"> | Date | string
  }

  export type SocialPostWhereInput = {
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    id?: StringFilter<"SocialPost"> | string
    platformId?: StringFilter<"SocialPost"> | string
    platform?: StringFilter<"SocialPost"> | string
    content?: StringNullableFilter<"SocialPost"> | string | null
    type?: StringNullableFilter<"SocialPost"> | string | null
    url?: StringNullableFilter<"SocialPost"> | string | null
    image?: StringNullableFilter<"SocialPost"> | string | null
    postedAt?: DateTimeFilter<"SocialPost"> | Date | string
    likes?: IntFilter<"SocialPost"> | number
    comments?: IntFilter<"SocialPost"> | number
    shares?: IntFilter<"SocialPost"> | number
    impressions?: IntFilter<"SocialPost"> | number
    engagement?: IntFilter<"SocialPost"> | number
    lastSyncAt?: DateTimeFilter<"SocialPost"> | Date | string
  }

  export type SocialPostOrderByWithRelationInput = {
    id?: SortOrder
    platformId?: SortOrder
    platform?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    postedAt?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    impressions?: SortOrder
    engagement?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type SocialPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    platform_platformId?: SocialPostPlatformPlatformIdCompoundUniqueInput
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    platformId?: StringFilter<"SocialPost"> | string
    platform?: StringFilter<"SocialPost"> | string
    content?: StringNullableFilter<"SocialPost"> | string | null
    type?: StringNullableFilter<"SocialPost"> | string | null
    url?: StringNullableFilter<"SocialPost"> | string | null
    image?: StringNullableFilter<"SocialPost"> | string | null
    postedAt?: DateTimeFilter<"SocialPost"> | Date | string
    likes?: IntFilter<"SocialPost"> | number
    comments?: IntFilter<"SocialPost"> | number
    shares?: IntFilter<"SocialPost"> | number
    impressions?: IntFilter<"SocialPost"> | number
    engagement?: IntFilter<"SocialPost"> | number
    lastSyncAt?: DateTimeFilter<"SocialPost"> | Date | string
  }, "id" | "platform_platformId">

  export type SocialPostOrderByWithAggregationInput = {
    id?: SortOrder
    platformId?: SortOrder
    platform?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    postedAt?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    impressions?: SortOrder
    engagement?: SortOrder
    lastSyncAt?: SortOrder
    _count?: SocialPostCountOrderByAggregateInput
    _avg?: SocialPostAvgOrderByAggregateInput
    _max?: SocialPostMaxOrderByAggregateInput
    _min?: SocialPostMinOrderByAggregateInput
    _sum?: SocialPostSumOrderByAggregateInput
  }

  export type SocialPostScalarWhereWithAggregatesInput = {
    AND?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    OR?: SocialPostScalarWhereWithAggregatesInput[]
    NOT?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialPost"> | string
    platformId?: StringWithAggregatesFilter<"SocialPost"> | string
    platform?: StringWithAggregatesFilter<"SocialPost"> | string
    content?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    type?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    url?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    image?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    postedAt?: DateTimeWithAggregatesFilter<"SocialPost"> | Date | string
    likes?: IntWithAggregatesFilter<"SocialPost"> | number
    comments?: IntWithAggregatesFilter<"SocialPost"> | number
    shares?: IntWithAggregatesFilter<"SocialPost"> | number
    impressions?: IntWithAggregatesFilter<"SocialPost"> | number
    engagement?: IntWithAggregatesFilter<"SocialPost"> | number
    lastSyncAt?: DateTimeWithAggregatesFilter<"SocialPost"> | Date | string
  }

  export type SocialMetricCreateInput = {
    platform: string
    metric: string
    value: number
    date: Date | string
    createdAt?: Date | string
  }

  export type SocialMetricUncheckedCreateInput = {
    id?: number
    platform: string
    metric: string
    value: number
    date: Date | string
    createdAt?: Date | string
  }

  export type SocialMetricUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMetricUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMetricCreateManyInput = {
    id?: number
    platform: string
    metric: string
    value: number
    date: Date | string
    createdAt?: Date | string
  }

  export type SocialMetricUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMetricUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostCreateInput = {
    id?: string
    platformId: string
    platform: string
    content?: string | null
    type?: string | null
    url?: string | null
    image?: string | null
    postedAt: Date | string
    likes?: number
    comments?: number
    shares?: number
    impressions?: number
    engagement?: number
    lastSyncAt?: Date | string
  }

  export type SocialPostUncheckedCreateInput = {
    id?: string
    platformId: string
    platform: string
    content?: string | null
    type?: string | null
    url?: string | null
    image?: string | null
    postedAt: Date | string
    likes?: number
    comments?: number
    shares?: number
    impressions?: number
    engagement?: number
    lastSyncAt?: Date | string
  }

  export type SocialPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    engagement?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    engagement?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostCreateManyInput = {
    id?: string
    platformId: string
    platform: string
    content?: string | null
    type?: string | null
    url?: string | null
    image?: string | null
    postedAt: Date | string
    likes?: number
    comments?: number
    shares?: number
    impressions?: number
    engagement?: number
    lastSyncAt?: Date | string
  }

  export type SocialPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    engagement?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    engagement?: IntFieldUpdateOperationsInput | number
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type SocialMetricPlatformMetricDateCompoundUniqueInput = {
    platform: string
    metric: string
    date: Date | string
  }

  export type SocialMetricCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMetricAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type SocialMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMetricMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMetricSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialPostPlatformPlatformIdCompoundUniqueInput = {
    platform: string
    platformId: string
  }

  export type SocialPostCountOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    platform?: SortOrder
    content?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrder
    postedAt?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    impressions?: SortOrder
    engagement?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type SocialPostAvgOrderByAggregateInput = {
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    impressions?: SortOrder
    engagement?: SortOrder
  }

  export type SocialPostMaxOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    platform?: SortOrder
    content?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrder
    postedAt?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    impressions?: SortOrder
    engagement?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type SocialPostMinOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    platform?: SortOrder
    content?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrder
    postedAt?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    impressions?: SortOrder
    engagement?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type SocialPostSumOrderByAggregateInput = {
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    impressions?: SortOrder
    engagement?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SocialMetricDefaultArgs instead
     */
    export type SocialMetricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialMetricDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialPostDefaultArgs instead
     */
    export type SocialPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialPostDefaultArgs<ExtArgs>

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