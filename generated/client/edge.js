
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.1
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.1",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.IngredientScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  amount: 'amount'
});

exports.Prisma.NutritionInformationScalarFieldEnum = makeEnum({
  id: 'id',
  calories: 'calories',
  fat: 'fat',
  sodium: 'sodium',
  carbohydrates: 'carbohydrates',
  fiber: 'fiber',
  sugar: 'sugar',
  protein: 'protein'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RecipeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  category: 'category',
  prepTime: 'prepTime',
  cookTime: 'cookTime',
  yields: 'yields',
  servingSize: 'servingSize',
  images: 'images',
  instruction: 'instruction',
  notes: 'notes'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Recipe: 'Recipe',
  NutritionInformation: 'NutritionInformation',
  Ingredient: 'Ingredient'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/vantolbennett/Stream/JavaScript-Proj/fresh-cards-app/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.8.1",
  "engineVersion": "d6e67a83f971b175a593ccc12e15c4a757f93ffe",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBSZWNpcGUgewogIGlkIEludCBAbWFwKCJyZWNpcGVfaWQiKSBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgU3RyaW5nCiAgY2F0ZWdvcnkgU3RyaW5nCiAgcHJlcFRpbWUgSW50CiAgY29va1RpbWUgSW50CiAgeWllbGRzIEludAogIHNlcnZpbmdTaXplIEludAogIG51dHJpdGlvbkluZm9ybWF0aW9uIE51dHJpdGlvbkluZm9ybWF0aW9uPyAgQHJlbGF0aW9uKHJlZmVyZW5jZXM6IFtpZF0sIGZpZWxkczogW2lkXSkKICBpbWFnZXMgU3RyaW5nW10KICBpbmdyZWRpZW50cyBJbmdyZWRpZW50PyAgCiAgaW5zdHJ1Y3Rpb24gU3RyaW5nW10KICBub3RlcyBTdHJpbmcKfQoKbW9kZWwgTnV0cml0aW9uSW5mb3JtYXRpb24gewogIGlkIEludCBAbWFwKCJudXRyaXRpb25faWQiKSBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNhbG9yaWVzIFN0cmluZwogIGZhdCBTdHJpbmcKICBzb2RpdW0gU3RyaW5nCiAgY2FyYm9oeWRyYXRlcyBTdHJpbmcKICBmaWJlciBTdHJpbmcKICBzdWdhciBTdHJpbmcKICBwcm90ZWluIFN0cmluZwogIHJlY2lwZSBSZWNpcGU/Cn0KCm1vZGVsIEluZ3JlZGllbnQgewogIGlkIEludCBAbWFwKCJpbmdyZWRpZW50X2lkIikgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lIFN0cmluZwogIGFtb3VudCBJbnQKICByZWNpcGUgUmVjaXBlPyBAcmVsYXRpb24ocmVmZXJlbmNlczogW2lkXSwgZmllbGRzOiBbaWRdKQp9'
config.inlineSchemaHash = '7bfa7702fbca20ac53997b19f4ae22c8a80673d850fc2dd1be336efe2dcfeb73'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

