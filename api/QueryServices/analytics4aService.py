from flask import jsonify
from flask.views import MethodView
from QueryController.analytics4a import Analytics4a

class Analytis4aAPI(MethodView):
    def __init__(self):
        self.analytis4a = Analytics4a()
        
        
    def get(self):
        result = self.analytis4a.execute()
        return jsonify(result)    