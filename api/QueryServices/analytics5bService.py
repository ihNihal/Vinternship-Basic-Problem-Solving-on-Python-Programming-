from flask import jsonify
from flask.views import MethodView
from QueryController.analytics5b import Analytics5b

class Analytis5bAPI(MethodView):
    def __init__(self):
        self.analytis5b = Analytics5b()
        
        
    def get(self):
        result = self.analytis5b.execute()
        return jsonify(result)    