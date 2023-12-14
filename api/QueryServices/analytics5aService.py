from flask import jsonify
from flask.views import MethodView
from QueryController.analytics5a import Analytics5a

class Analytis5aAPI(MethodView):
    def __init__(self):
        self.analytis5a = Analytics5a()
        
        
    def get(self):
        result = self.analytis5a.execute()
        return jsonify(result)    