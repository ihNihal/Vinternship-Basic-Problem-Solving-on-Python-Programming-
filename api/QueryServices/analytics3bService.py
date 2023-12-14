from flask import jsonify
from flask.views import MethodView
from QueryController.analytics3b import Analytics3b

class Analytis3bAPI(MethodView):
    def __init__(self):
        self.analytis3b = Analytics3b()
        
        
    def get(self):
        result = self.analytis3b.execute()
        return jsonify(result)    