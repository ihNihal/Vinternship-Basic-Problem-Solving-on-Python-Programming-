from flask import jsonify
from flask.views import MethodView
from QueryController.analytics2b import Analytics2b

class Analytis2bAPI(MethodView):
    def __init__(self):
        self.analytis2b = Analytics2b()
        
        
    def get(self):
        result = self.analytis2b.execute()
        return jsonify(result)    