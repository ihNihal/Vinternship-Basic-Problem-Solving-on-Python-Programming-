from flask import jsonify
from flask.views import MethodView
from QueryController.analytics2a import Analytics2a

class Analytis2aAPI(MethodView):
    def __init__(self):
        self.analytis2a = Analytics2a()
        
        
    def get(self):
        result = self.analytis2a.execute()
        return jsonify(result)    