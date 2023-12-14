from flask import jsonify
from flask.views import MethodView
from QueryController.analytics3a import Analytics3a

class Analytis3aAPI(MethodView):
    def __init__(self):
        self.analytis3a = Analytics3a()
        
        
    def get(self):
        result = self.analytis3a.execute()
        return jsonify(result)    