from influxdb import InfluxDBClient


class DBConnection:
    def __init__(self):
        self.client = InfluxDBClient(host='localhost', port=8086)

    def get_databases(self):
        return self.client.get_list_database()
