from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query5:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =  """  
               SELECT d.division, s.year, SUM(t.total_price)
                FROM ecom_star_schema.fact_table t
                JOIN ecom_star_schema.time_dim s on s.time_key = t.time_key
                JOIN ecom_star_schema.store_dim d on d.store_key = t.store_key
                WHERE d.division ='Dhaka' AND s.year = '2015'
                GROUP BY CUBE(s.year, d.division)
                order by s.year

                 """    
        cur.execute(query)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['Division','Year', 'sales'])
        pd_data['sales'] = pd_data['sales'].astype('float64')
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query5 = Query5()
    data = query5.execute() 
    print(data)   
        
        