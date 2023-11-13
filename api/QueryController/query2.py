from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query2:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =  """  
                SELECT s.name, SUM(t.total_price)
                FROM ecom_star_schema.fact_table t
                JOIN ecom_star_schema.customer_dim s on s.customer_key = t.customer_key
                GROUP BY CUBE(s.name)
                order by s.name

                 """    
        cur.execute(query)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['Name', 'sales'])
        pd_data['sales'] = pd_data['sales'].astype('float64')
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query2 = Query2()
    data = query2.execute() 
    print(data)   
        
        