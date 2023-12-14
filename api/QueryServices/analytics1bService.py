from flask import jsonify
from flask.views import MethodView
from QueryController.analytics1b import Analytics1b

class Analytis1bAPI(MethodView):
    def __init__(self):
        self.analytis1b = Analytics1b()
        
        
    def get(self):
        result = self.analytis1b.execute()
        return jsonify(result)    