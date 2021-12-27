from config import Config
from collections import OrderedDict
import json

class CustomModel:

    def __init__(self):
        self.config_obj = Config()
        self.connection_obj = self.config_obj.get_db_connection()

    def get_from_model(self, model_name, id = False):
        result_dict = []
        query = "select * from "+model_name+";"
        if id:
            query = "select * from "+model_name+" where id = "+id+" limit 1;"
        connection = self.connection_obj
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query)
                records = cursor.fetchall();
        for index, record in enumerate(records):
            each_record ={}
            for value in record:
                each_record['id'] = record[0]
                each_record['name'] = record[1]
                each_record['description'] = record[2]
            result_dict.append(each_record)
        return json.dumps(result_dict)

    def insert_to_model(self, model_name, request_data, id = False,):
        post_data = OrderedDict()
        post_data['name'] = request_data.get('name', ''),
        post_data['description'] = request_data.get('description', '')
        connection = self.connection_obj
        query = "insert into "+model_name+" (name, description) values(%s, %s)"
        if id:
            query = "update "+model_name+" set name = %s, description=%s where id = "+id+";"
        val = [value for key,value in post_data.items()]
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query, tuple(val))
        return {'response': 'success'}
        
    def delete_from_model(self, model_name, id):
        connection = self.connection_obj
        query = "delete from "+model_name+" where id ="+id+";"
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query)
        return {'response': 'success'}
