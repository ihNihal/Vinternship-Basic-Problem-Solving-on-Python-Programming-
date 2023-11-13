from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query4:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =  """  
                SELECT s.year, SUM(t.total_price)
                FROM ecom_star_schema.fact_table t
                JOIN ecom_star_schema.time_dim s on s.time_key = t.time_key
                where s.year = '2015'
                GROUP BY CUBE(s.year)
                order by s.year

                 """    
        cur.execute(query)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['year', 'sales'])
        pd_data['sales'] = pd_data['sales'].astype('float64')
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query4 = Query4()
    data = query4.execute() 
    print(data)   
        
        