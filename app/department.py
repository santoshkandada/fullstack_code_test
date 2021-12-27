from custommodel import CustomModel

class Department:

    def __init__(self):
        self.custommodel = CustomModel()
        self.model_name = 'department'

    def get_department(self, id = False):
        return self.custommodel.get_from_model(self.model_name, id)

    def add_department(self, request_data, id = False):
        return self.custommodel.insert_to_model(self.model_name, request_data, id)
        
    def delete_department(self, id):
        return self.custommodel.delete_from_model(self.model_name, id)