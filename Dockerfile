# Description: Dockerfile for the application
# Pull base image from Docker Hub - Alpine Linux with Python 3.8
FROM python:3.8-alpine

# Set environment variables
ENV VIRTUAL_ENV=/opt/venv

RUN apk update

# Install dependencies
RUN apk add nodejs
RUN apk add npm
RUN apk add bash
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Copy the application folder inside the container
COPY . /app

# Set the working directory to /app
WORKDIR /app


# Install python dependencies
RUN pip install -r python/requirements.txt

# Install node dependencies
RUN cd nodejs && npm i && cd ..


# Run the application
CMD ["python", "python/main.py"]
