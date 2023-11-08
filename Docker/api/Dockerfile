FROM ubuntu
SHELL ["/bin/bash", "-c"]
ENV NVM_DIR /usr/local/.nvm
ENV NODE_VERSION v18.16
RUN mkdir $NVM_DIR
RUN apt-get update && apt-get -y install git curl
RUN git clone https://github.com/mariemeSall/loona-api.git
WORKDIR /loona-api
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
ENV NODE_PATH $NVM_DIR/$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH
RUN echo "source $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    nvm use default" | bash
RUN source $NVM_DIR/nvm.sh && npm install
CMD source $NVM_DIR/nvm.sh && npm start
