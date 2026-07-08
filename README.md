# Uttar Pradesh Tourism Information Website with DevOps Deployment

## Project Overview

This project is a static tourism website developed as part of a DevOps course assignment. The objective is to demonstrate DevOps practices including version control, CI/CD, containerization, Kubernetes deployment, and monitoring.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Docker
- Jenkins
- Maven
- Kubernetes
- Git & GitHub
- Nagios
- Graphite
- Grafana

## Project Structure

```
UP-Tourism/
│
├── index.html
├── attractions.html
├── hotels.html
├── guides.html
├── booking.html
├── contact.html
├── admin.html
├── admin-login.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── admin.js
│
├── images/
│
├── Dockerfile
├── Jenkinsfile
├── pom.xml
├── deployment.yaml
├── service.yaml
├── README.md
```

## Features

- Responsive Tourism Website
- Tourist Attractions
- Hotel Information
- Tourist Guides
- Booking Form
- Contact Form
- Admin Login (Simulation)
- Responsive Navigation
- Back-to-Top Button

## DevOps Workflow

1. Source code managed using GitHub.
2. Jenkins automates the build pipeline.
3. Maven validates the project structure.
4. Docker creates the application container.
5. Kubernetes deploys the container using a Deployment and NodePort Service.
6. Nagios monitors application availability.
7. Graphite collects metrics.
8. Grafana visualizes monitoring dashboards.

## Build Instructions

### Maven

```bash
mvn clean package
```

### Docker

```bash
docker build -t up-tourism:1.0 .
docker run -d --name up-tourism-container -p 8090:80 up-tourism:1.0
```

### Kubernetes

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get deployments
kubectl get pods
kubectl get services
```

## Application Access

Docker:

```
http://localhost:8090
```

Kubernetes:

```
http://localhost:30080
```

## Default Admin Credentials

Username:

```
admin
```

Password:

```
admin123
```

## Author

Akshat Pandey

B.Tech, VIT Vellore

DevOps Course Project