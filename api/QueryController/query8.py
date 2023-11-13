from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query8:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =  """  
            SELECT t.quarter, i.item_name,  SUM(f.quantity)
            FROM ecom_star_schema.fact_table f
            JOIN ecom_star_schema.item_dim i on i.item_key = f.item_key
            JOIN ecom_star_schema.time_dim t on t.time_key = f.time_key
            GROUP BY CUBE(t.quarter, i.item_name, f.quantity)
            order by t.quarter, SUM(f.quantity) ASC

                 """    
        cur.execute(query)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['Quarter','Item_name' ,'Quantity'])
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query8 = Query8()
    data = query8.execute() 
    print(data)   
        
        