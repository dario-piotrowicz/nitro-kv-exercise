# Create a CRD endpoint using Nitro

Using [Nitro](https://nitro.unjs.io/) (alongside one of its [Cloudflare presets](https://nitro.unjs.io/deploy/providers/cloudflare)) create a CRD (CRUD without the Update) endpoint that uses a [Cloudflare KV](https://developers.cloudflare.com/kv/)
to create, read and delete values.

__GET__ requests to `/kv/<KEY>` should return a result such as:
```ts
{
    success: boolean,
    value: string,
}
```

where `success` indicate the success of the retrieval and `value` is the value of the entry (associated to the `KEY` key).

> Note: a value for the `CFLARE` key is already present in the local KV store

__PUT__ requests (with a `text/plain` `content-type` header) to `/kv/<KEY>` should return a result such as:
```ts
{
    success: boolean,
}
```
and __DELETE__ requests should do the same.

## Test

To validate your progress you can start the nitro dev server in a terminal and in a separate terminal run `npm run test`

## You can use cURL to manually test the endpoint

To get a value for a key (note: a value for the `CFLARE` key is already present in the local KV) run:
```
curl localhost:3000/kv/<KEY>
```

to put a value for a key run:
```
curl -X PUT localhost:3000/kv/<KEY> -H "Content-Type: text/plain" --data 'test'
```

and to delete the value of a key:
```
curl -X DELETE localhost:3000/kv/<KEY>
```
