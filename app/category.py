from custommodel import CustomModel
from collections import OrderedDict
from config import Config
import json

class Category:

    def __init__(self):
        self.custommodel = CustomModel()
        self.model_name = 'category'
        self.config_obj = Config()
        self.connection_obj = self.config_obj.get_db_connection()

    def get_category(self, id = False):
        return self.custommodel.get_from_model(self.model_name, id)

    def add_category(self, request_data, id = False):
        return self.custommodel.insert_to_model(self.model_name, request_data, id)
        
    def delete_category(self, id):
        return self.custommodel.delete_from_model(self.model_name, id)
    
    def get_categories_of_location_department(self, location_id, department_id):
        result_dict = []
        connection =  self.connection_obj
        query = "select fcr.id, dep.id as department_id, dep.name as department, dep.description as description, fcr.location_id as location_id, l.name as location, fcr.category_id as category_id, cat.name as category from department dep join food_catalogue_relationship fcr on fcr.department_id = dep.id join location as l on l.id = fcr.location_id join category as cat on cat.id = fcr.category_id where fcr.location_id =" + location_id + " and fcr.department_id = "+ department_id+";" 
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query)
                records = cursor.fetchall();
        for index, record in enumerate(records):
            each_record ={}
            for value in record:
                each_record['id'] = record[0]
                each_record['department_id'] = record[1]
                each_record['department'] = record[2]
                each_record['description'] = record[3]
                each_record['location_id'] = record[4]
                each_record['location'] = record[5]
                each_record['category_id'] = record[6]
                each_record['category'] = record[7]
            result_dict.append(each_record)
        return json.dumps(result_dict)
    
    def add_updatye_category_to_location_department(self, location_id, department_id, request_data, record_id):
        connection =  self.connection_obj
        post_data = OrderedDict()
        post_data['location_id'] = location_id
        post_data['department_id'] = department_id
        post_data['category_id'] = request_data.get('category_id', '')
        query = "insert into food_catalogue_relationship (location_id, department_id, category_id) values(%s, %s, %s)"
        if record_id:
            query = "update food_catalogue_relationship set location_id = %s, department_id=%s, category_id=%s where id = "+record_id+";"
        val = [value for key,value in post_data.items()]
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query, tuple(val))
        return {'response': 'success'}

    def delete_category_of_location_department(self, location_id, department_id, record_id):
        connection = self.connection_obj
        query = "delete from food_catalogue_relationship where location_id ="+location_id+" and department_id="+department_id+" and id = "+record_id+";"
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query)
        return {'response': 'success'}