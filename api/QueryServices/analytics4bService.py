from flask import jsonify
from flask.views import MethodView
from QueryController.analytics4b import Analytics4b

class Analytis4bAPI(MethodView):
    def __init__(self):
        self.analytis4b = Analytics4b()
        
        
    def get(self):
        result = self.analytis4b.execute()
        return jsonify(result)    