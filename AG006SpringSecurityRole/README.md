This project is created using https://start.spring.io/
The application running on port 9090 (the setting is in application.property)

H2 database is added in this project. The database dashGood board can be access through http://localhost:9090/h2-console

The list of API can be queried from http://localhost:9090/api

http://localhost:9090/api

HTTP method     CRUD

GET             Read
POST            Create
PUT/PATCH       Update
DELETE          Delete


Using browser to search data. to activate this functionality, org.springframework.boot:spring-boot-starter-data-rest dependency needs to be added
http://localhost:9090/api/owners/search/findByFirstname?firstname=Mary

OpenAPI documentation is configured in this project it can be access through
http://localhost:9090/swagger-ui/index.html

http://localhost:9090/api-docs ( JSON format )


To test the security, the following is the credential
Username: user, password: user
Username: admin, password: admin


To Test JWT, you need to get the token by sending POST request from http://localhost:9090/login
Then copy the authentication token that you received to the GET request

Some OAuth2 resources
https://www.baeldung.com/spring-boot-keycloak
https://auth0.com/docs/quickstart/webapp/java-spring-boot/interactive
Auth0: https://auth0.com/
Okta: https://www.okta.com/
Keycloak: https://www.keycloak.org/