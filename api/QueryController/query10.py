from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query10:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =  """  
          SELECT  c.store_key,i.month,  AVG(f.quantity)
            FROM ecom_star_schema.fact_table f
            JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
            JOIN ecom_star_schema.store_dim c on c.store_key = f.store_key
            GROUP BY CUBE(c.store_key, i.month, f.quantity)
            order by i.month,c.store_key, AVG(f.quantity) ASC

                 """    
        cur.execute(query)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['Store' ,'Month','Quantity'])
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query10 = Query10()
    data = query10.execute() 
    print(data)   
        
        