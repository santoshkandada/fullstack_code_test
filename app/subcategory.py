from custommodel import CustomModel

class Subcategory:

    def __init__(self):
        self.custommodel = CustomModel()
        self.model_name = 'subcategory'

    def get_subcategory(self, id = False):
        return self.custommodel.get_from_model(self.model_name, id)

    def add_subcategory(self, request_data, id = False):
        return self.custommodel.insert_to_model(self.model_name, request_data, id)
        
    def delete_subcategory(self, id):
        return self.custommodel.delete_from_model(self.model_name, id)