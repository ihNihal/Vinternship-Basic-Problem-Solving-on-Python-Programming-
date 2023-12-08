from flask import jsonify
from flask.views import MethodView
from QueryController.analytics1a import Analytics1a

class Analytis1aAPI(MethodView):
    def __init__(self):
        self.analytis1a = Analytics1a()
        
        
    def get(self):
        result = self.analytis1a.execute()
        return jsonify(result)    