FROM nginx:alpine

# Copying source files
COPY ./dist/md-dynamic-forms-app /usr/share/nginx/html
