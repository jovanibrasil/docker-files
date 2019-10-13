FROM nginx:alpine
RUN apk add python-certbot-nginx
COPY nginx-configuration-files/ /etc/nginx/
COPY static-html-directory/ /usr/share/nginx/html
