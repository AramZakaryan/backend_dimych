const http = require("http")


const server = http.createServer(
    (request, response) => {

        switch (request.url) {
            case "/":{
                response.write("Hello, welcome !")
                break
            }
            case "/students": {
                response.write("STUDENTS")
                break
            }
            case "/courses":{
                response.write("COURSES")
                break
            }
            default: {
                response.write("404 not found")
            }
        }

        response.end()
    }
)

server.listen(3007)