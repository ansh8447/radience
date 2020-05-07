from flask import Flask
from DBConnection import DBConnection


class InfluxFlaskApi:
    def __init__(self):
        self.data = []

    def data_retrieval(self):
        print(db.DBConnection.get_databases())


if __init__ == "main":
    print(InfluxFlaskApi.data_retrieval())
