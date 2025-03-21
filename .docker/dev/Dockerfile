FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Zurich  
ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8

    # Update locale settings
RUN apt-get update && \
    apt-get install -y locales && \
    locale-gen en_US.UTF-8



# Create a new user 'dev' with the provided UID and add it to the 'root' group
RUN useradd -m dev 
RUN usermod -aG users,root dev
RUN echo 'dev:1234' | chpasswd

# Update and install necessary packages
RUN apt-get update -y && apt-get install -y curl wget unzip 

RUN apt-get install -y sudo

# based server deps
RUN apt-get install -y libpq-dev

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Install build tools and other dependencies
RUN apt-get install -y build-essential uuid-dev libssl-dev git vim

# Install InfluxDB
RUN wget -q https://repos.influxdata.com/influxdata-archive_compat.key
RUN echo '393e8779c89ac8d958f81f942f9ad7fb82a25e133faddaf92e15b16e6ac9ce4c influxdata-archive_compat.key' | sha256sum -c && cat influxdata-archive_compat.key | gpg --dearmor | tee /etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg > /dev/null
RUN echo 'deb [signed-by=/etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg] https://repos.influxdata.com/debian stable main' | tee /etc/apt/sources.list.d/influxdata.list

RUN apt-get update &&  apt-get -y install influxdb2

RUN mkdir -p /var/lib/influxdb

WORKDIR /app
RUN npm completion >> /home/.bashrc

RUN npm install -g pnpm@9.1.4

RUN usermod -aG sudo dev
RUN apt-get install -y bash-completion

# Add sudoers entries for the dev user
RUN echo "dev ALL=(ALL) NOPASSWD: /usr/sbin/service influxdb stop" >> /etc/sudoers 
RUN echo "dev ALL=(ALL) NOPASSWD: /usr/sbin/service influxdb start" >> /etc/sudoers

# Switch to the new user for subsequent Dockerfile commands and for when the container is run
USER dev
RUN pnpm completion bash > ~/completion-for-pnpm.bash
RUN echo 'source ~/completion-for-pnpm.bash' >> ~/.bashrc

EXPOSE 3030
EXPOSE 8086