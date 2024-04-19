dev:
    ./tailwindcss -i sass/style.scss -o static/tailwind.css --watch & zola serve

minify:
    ./tailwindcss -i sass/style.scss -o static/tailwind.css --minify