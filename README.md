# stackoverflowed.com

To develop:

```bash
$ ./tailwindcss -i sass/style.scss -o static/tailwind.css --watch

$ zola serve
```

To deploy:

```bash
$ ./tailwindcss -i sass/style.scss -o static/tailwind.css --minify

# Then git push
```