# PG-event-triggers-with-Node.js
A postgres node.js event listener created using pg-listen.
PostgreSQL can act as a message broker: Send notifications with arbitrary payloads from one database client to others.

# Why pg-listen?
Using the NOTIFY and LISTEN features is not trivial using node-postgres (pg) directly, since you cannot use connection pools and even distinct client connections also tend to time out.

# Simplest Way to implement LISTEN and NOTIFY
