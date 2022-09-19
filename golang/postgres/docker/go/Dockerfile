FROM golang:1.17.0-alpine

ARG SERVER_PORT
ARG PROJECT_OWNER
ARG PROJECT_NAME

RUN apk update && apk add git

WORKDIR /go/src/github.com/${PROJECT_OWNER}/${PROJECT_NAME}
COPY . .

EXPOSE ${SERVER_PORT}

RUN go get github.com/cosmtrek/air

RUN go mod tidy

CMD [ "air", "-c", ".air.toml" ]