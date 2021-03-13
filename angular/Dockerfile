From nginx:1.19.7-alpine
COPY nginx.conf /etc/nginx/nginx.conf
Copy /dist/ /usr/share/nginx/html
EXPOSE 50500
cmd ["nginx","-g","daemon off;"]