from app import app
import psycopg2
import sys
import json
from flask import request
from flask_cors import CORS

# local import
from location import Location
from department import Department
from category import Category
from subcategory import Subcategory

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/")
def index():
    return "Welcome to the Flask"
    
'''
    *************************
      Location api endpoints
    *************************
'''

@app.route("/api/v1/location", methods = ['GET', 'POST'])
def location():
    model_object = Location()
    if request.method == 'POST':
        request_data = request.get_json()
        return model_object.add_location(request_data, False)
    else:
        return model_object.get_location(False)

@app.route("/api/v1/location/<id>/", methods = ['GET','DELETE', 'POST'])
def del_location(id):
    model_object = Location()
    if request.method == 'GET':
        return model_object.get_location(id)
    elif request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_location(request_data, id)
    else:
        return model_object.delete_location(id)

'''
    *************************
      Department api endpoints
    *************************
'''

@app.route("/api/v1/department", methods = ['GET', 'POST'])
def department():
    model_object = Department()
    if request.method == 'POST':
        request_data = request.get_json()
        return model_object.add_department(request_data, False)
    else:
        return model_object.get_department(False)

@app.route("/api/v1/department/<id>/", methods = ['GET','DELETE', 'POST'])
def del_department(id):
    model_object = Department()
    if request.method == 'GET':
        return model_object.get_department(id)
    elif request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_department(request_data, id)
    else:
        return model_object.delete_department(id)

'''
    *************************
      Category api endpoints
    *************************
'''

@app.route("/api/v1/category", methods = ['GET', 'POST'])
def category():
    model_object = Category()
    if request.method == 'POST':
        request_data = request.get_json()
        return model_object.add_category(request_data, False)
    else:
        return model_object.get_category(False)

@app.route("/api/v1/category/<id>/", methods = ['GET','DELETE', 'POST'])
def del_category(id):
    model_object = Category()
    if request.method == 'GET':
        return model_object.get_category(id)
    elif request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_category(request_data, id)
    else:
        return model_object.delete_category(id)

'''
    *************************
      Subcategory api endpoints
    *************************
'''

@app.route("/api/v1/subcategory", methods = ['GET', 'POST'])
def subcategory():
    model_object = Subcategory()
    if request.method == 'POST':
        request_data = request.get_json()
        return model_object.add_subcategory(request_data, False)
    else:
        return model_object.get_subcategory(False)

@app.route("/api/v1/subcategory/<id>/", methods = ['GET','DELETE', 'POST'])
def del_subcategory(id):
    model_object = Subcategory()
    if request.method == 'GET':
        return model_object.get_subcategory(id)
    elif request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_subcategory(request_data, id)
    else:
        return model_object.delete_subcategory(id)

'''
    *****************
     custom routes
    *****************
'''

# to fetch, create, and delete the departments against the location
@app.route("/api/v1/location/<location_id>/department", methods = ['GET','POST'])
def location_department(location_id):
    model_object = Location()
    if request.method == 'GET':
        return model_object.get_departments_of_location(location_id)
    elif request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_update_department_to_location(location_id, request_data, False)
    

# to update the location id for the given department
@app.route("/api/v1/location/<location_id>/department/<record_id>", methods = ['POST', 'DELETE'])
def delete_location_department(location_id, record_id):
    model_object = Location()
    if request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_update_department_to_location(location_id, request_data, record_id)
    else:
        return model_object.delete_department_of_location(location_id, record_id) 

# to fetch and create the category against the location and department
@app.route("/api/v1/location/<location_id>/department/<department_id>/category", methods = ['GET','POST'])
def location_department_category(location_id, department_id):
    model_object = Category()
    if request.method == 'GET':
        return model_object.get_categories_of_location_department(location_id, department_id)
    elif request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_updatye_category_to_location_department(location_id, department_id, request_data, False)
    

# to update the location id for the given department
@app.route("/api/v1/location/<location_id>/department/<department_id>/category/<record_id>", methods = ['POST', 'DELETE'])
def delete_location_department_category(location_id, department_id,record_id):
    model_object = Category()
    if request.method == 'POST':
        request_data =  request.get_json()
        return model_object.add_updatye_category_to_location_department(location_id, department_id,request_data, record_id)
    else:
        return model_object.delete_category_of_location_department(location_id, department_id, record_id) 