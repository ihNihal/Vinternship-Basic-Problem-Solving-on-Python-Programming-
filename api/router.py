from QueryServices.query1service import Query1API
from QueryServices.query7service import Query7API

from flask import Blueprint

query_api = Blueprint('queryapi', __name__)
query_api.add_url_rule('/query1', view_func=Query1API.as_view("Get Division-wise Sales"))
query_api.add_url_rule('/query7', view_func=Query7API.as_view("X Days"))

