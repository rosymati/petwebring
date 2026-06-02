# .pet webring 🐾

A webring for [`.pet`](https://get.pet) domains. Personal sites, no required
topic.

Live at [ring.pet](https://ring.pet).

## Joining

You need a `.pet` domain with a personal website on it.

1. Add a webring nav somewhere on your site linking to the previous site, the
   ring homepage, and the next site:

   ```html
   <a href="https://ring.pet/prev/yourdomain.pet">← prev</a>
   <a href="https://ring.pet">ring.pet</a>
   <a href="https://ring.pet/next/yourdomain.pet">next →</a>
   ```

2. Open a pull request adding your domain to `members.ts`.

Personal sites only; no storefronts, aggregators, or bots.

## Development

```bash
deno task dev
```

To add a member, append their domain to the array in `members.ts`. Array order
determines ring order.

## License

This project is licensed under the
[Apache-2.0 License](http://www.apache.org/licenses/LICENSE-2.0). For more
information, please see the [LICENSE](LICENSE) file.
