# JLearn

While being a student myself, I noticed the [java.cnpi.lu](http://java.cnpi.lu) website was really old and wasn't up to standards to websites from 2022.
So I decided to make a full rework of the website in my free time to train myself. The website is now much more modern and has full support for all devices and screens. It provides a more user-friendly UI and UX to future IT students across Luxembourg.

## Tools used

- [Svelte](https://svelte.dev): Used as Front-end Framework, specifically used components and it's features.
- [SvelteKit](https://kit.svelte.dev): Used as Back-end Framework, specifically used routing and some back-end done in TypeScript.
- [ViteJS](https://vitejs.dev/): Used for faster testing and provides several building tools.
- [TailwindCSS](https://tailwindcss.com/): As an utility CSS Framework, tailwind helped writing css a lot faster and making the website responsive in an easier way.
- [Figma](https://www.figma.com/design/): Used to make the whole design of the website and prototype.

## Why Svelte?

For starters, Svelte and SvelteKit have been one of my favorite Frameworks to work with. Together with Tailwindcss and Vite, it can do miracles!
This might look a little bit too much for what it seems an easy website, but I decided to use Svelte not only to train myself but also because of it's super fast speed and flexibility. Svelte's components helped a lot making the code cleaner (although still room for improvement) and will make it easier to update the website when needed.

## Current Issues

The only known issue right now is the fact that I am still using CNPI's website for the download links. Sadly the website is still in http which means files downloaded with this link will be considered insecure by most browsers. I plan on adding all the files to my own website, to avoid using external websites where possible.

## Building

In case you want to build it yourself, to create a production version of the app use:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
