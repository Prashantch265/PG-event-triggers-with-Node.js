# PG-event-triggers-with-Node.js

A nodejs event listener that uses PG LISTEN and NOTIFY with event triggers.

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install dependencies.

```bash
npm install
```

## Description

A postgres event listener created with node.js, express and [pg](https://node-postgres.com/). It uses PostgreSQL [LISTEN](https://www.postgresql.org/docs/current/sql-listen.html) and [NOTIFY](https://www.postgresql.org/docs/current/sql-notify.html) features.

#### This repo has 2 branches
* [main](https://github.com/Prashantch265/PG-event-triggers-with-Node.js/tree/main) Created using pg
* [pglisten](https://github.com/Prashantch265/PG-event-triggers-with-Node.js/tree/pglisten) Created using [pg-listen](https://www.npmjs.com/package/pg-listen)
 
==================================

- First of all we need to have a database
- After creating the database we need to create a table with some data
- After that we need to send an event when a row is added. PSQL allows us to create event triggers.
- We need to create a PSQL function first

Follow Up [Tutorial](https://edernegrete.medium.com/psql-event-triggers-in-node-js-ec27a0ba9baa)

### Listen and Notify

The PostgreSQL protocol includes a streaming protocol with COPY and also implements asynchronous messages and notifications. This means that as soon as a connection is established with PostgreSQL, the server can send messages to the client even when the client is idle.

```sql
postgres=# LISTEN channel;
LISTEN
postgres=# NOTIFY channel, 'Hello';
NOTIFY
Asynchronous notification "channel" with payload "Hello" received from server process with PID 743.
```

### PSQL function

```sql
create or replace function get_notify()
returns trigger
language plpgsql
as $$
begin
perform pg_notify('new_event', row_to_json(NEW)::text);
return null;
end;
$$;
```

### PSQL TRIGGER

```sql
create trigger notify after insert on events for each row execute procedure get_notify();
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
