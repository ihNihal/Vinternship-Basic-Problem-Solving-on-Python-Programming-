import psycopg2

class PostgresConnection(object):
    #right after calling this class __init__() function will execute first
    def __init__(self):
        self.connection = psycopg2.connect(database = "ecomdb",
                                           user = "postgres",
                                           password = "admin",
                                           host = "127.0.0.1",
                                           port = "5432")
        print("\nConnected!")
    #getConnection() function will call __init__() and connect
    def getConnection(self):
            print("Connection to DB established")
            return self.connection