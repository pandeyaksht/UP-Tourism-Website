# Use lightweight Nginx image
FROM nginx:alpine

LABEL maintainer="Akshat Pandey"
LABEL project="Uttar Pradesh Tourism Website"
LABEL version="1.0"

# Remove default Nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy website files into Nginx web root
COPY . /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]