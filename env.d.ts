/// <reference types="@cloudflare/workers-types/experimental" />

interface CloudflareEnv extends Env {}

declare module "h3" {
    interface H3EventContext {
      cf: CfProperties;
      cloudflare: {
        request: Request;
        env: CloudflareEnv;
        context: ExecutionContext;
      };
    }
}

export {};